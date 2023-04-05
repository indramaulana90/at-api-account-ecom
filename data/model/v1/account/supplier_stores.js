/**
* Author      : yosua siagian (yosua@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Model Seeding Data on supplier_stores table
*/

import seedingData from '@at-api-core/seeding-data';

/**
 * This function for seeding data select by id on supplier-stores table.
 * @param {Number} id supplier-stores id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'public.supplier_stores',
    condition: { id },
  };

  const result = await seedingData(query, 'service_account');

  return result;
};

/**
 * This function for seeding data delete by id on supplier-stores table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idSupplierStores id from supplier-stores table.
 */
export const deleteSupplierStoreById = async (params) => {
  const query = {
    type: 'remove',
    table: 'public.supplier_stores',
    condition: {
      id: params.idSupplierStores,
    },
  };

  await seedingData(query, 'service_account');
};
