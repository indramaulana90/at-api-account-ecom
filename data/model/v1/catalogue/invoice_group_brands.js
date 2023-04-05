/**
* Author      : Farhad (farhad@sinbad.co.id)
* Modifier    :
* Domain      : catalogue
* Description : This File for Model Seeding Data on invoice_group_brands table
*/

import seedingData from '@at-api-core/seeding-data';

/**
 * This function for seeding data select by id on invoice_group_brands table.
 * @param {Number} id invoice_group_brands id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'public.invoice_group_brands',
    condition: { id },
    limit: 5,
  };

  const result = await seedingData(query);

  return result;
};

/**
 * This function for seeding data delete by id on invoice_group_brands table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idInvoiceGroupBrands id from invoice_group_brands table.
 */
export const deleteById = async (params) => {
  const query = {
    type: 'remove',
    table: 'public.invoice_group_brands',
    condition: {
      id: params.idInvoiceGroupBrands,
    },
  };

  await seedingData(query);
};
