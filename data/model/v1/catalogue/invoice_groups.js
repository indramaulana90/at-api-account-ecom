/**
* Author      : Farhad (farhad@sinbad.co.id)
* Modifier    :
* Domain      : catalogue
* Description : This File for Model Seeding Data on invoice_groups table
*/

import seedingData from '@at-api-core/seeding-data';

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

  const result = await seedingData(query);

  return result;
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

  await seedingData(query);
};
