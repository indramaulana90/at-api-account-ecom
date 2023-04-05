/**
* Author      : Farhad (farhad@sinbad.co.id)
* Modifier    :
* Domain      : order
* Description : This File for Model Seeding Data on buyers table
*/

import seedingData from '@at-api-core/seeding-data';
import getModelValues from '@at-api-core/get-model-values';

const dateCommander = require('@at-api-core/date-commander');

/**
 * This function for seeding data select by id on buyers table.
 * @param {Number} id buyers id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'public.buyers',
    condition: { id },
    limit: 5,
  };

  const result = await seedingData(query, 'service_order');

  return result;
};

/**
 * This function for seeding data insert with half params on buyers table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idBuyers id from buyers table.
 * @param {String} params.idUrbans id from urbans table.
 */
export const insertHalfParams = async (params) => {
  const query = {
    type: 'insert',
    table: 'public.buyers',
    values: {
      id: params.idBuyers,
      name: getModelValues('buyers', params).name,
      address: getModelValues('buyers', params).address,
      urban_id: params.idUrbans,
      tax_no: '',
      created_at: dateCommander('now'),
      updated_at: dateCommander('now'),
      deleted_at: null,
    },
  };

  await seedingData(query, 'service_order');
};

/**
 * This function for seeding data delete by id on buyers table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idBuyers id from buyers table.
 */
export const deleteById = async (params) => {
  const query = {
    type: 'remove',
    table: 'public.buyers',
    condition: {
      id: params.idBuyers,
    },
  };

  await seedingData(query, 'service_order');
};
