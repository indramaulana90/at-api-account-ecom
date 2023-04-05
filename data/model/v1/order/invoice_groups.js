/**
* Author      : Farhad (farhad@sinbad.co.id)
* Modifier    :
* Domain      : order
* Description : This File for Model Seeding Data on invoice_groups table
*/

import seedingData from '@at-api-core/seeding-data';
import getModelValues from '@at-api-core/get-model-values';

const dateCommander = require('@at-api-core/date-commander');

/**
 * This function for seeding data select by id on invoice_groups table.
 * @param {Number} id invoice_groups id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'public.invoice_groups',
    condition: { id },
    limit: 5,
  };

  const result = await seedingData(query, 'service_order');

  return result;
};

/**
 * This function for seeding data insert with half params on invoice_groups table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idInvoiceGroups id from invoice_groups table.
 */
export const insertHalfParams = async (params) => {
  const query = {
    type: 'insert',
    table: 'public.invoice_groups',
    values: {
      id: params.idInvoiceGroups,
      name: getModelValues('invoiceGroups', params).name,
      created_at: dateCommander('now'),
      updated_at: dateCommander('now'),
      deleted_at: null,
    },
  };

  await seedingData(query, 'service_order');
};

/**
 * This function for seeding data delete by id on invoice_groups table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idInvoiceGroups id from invoice_groups table.
 */
export const deleteById = async (params) => {
  const query = {
    type: 'remove',
    table: 'public.invoice_groups',
    condition: {
      id: params.idInvoiceGroups,
    },
  };

  await seedingData(query, 'service_order');
};
