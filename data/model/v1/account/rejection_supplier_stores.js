/**
* Author      : yosua siagian (yosua@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Model Seeding Data on rejection_supplier_stores table
*/

import seedingData from '@at-api-core/seeding-data';

/**
 * This function for seeding data select by id on rejection_supplier_stores table.
 * @param {Number} id rejection_supplier_stores id.
 * @return {ArrayOfObject} result from db.
 */
export const selectByRejectionSuppStoreId = async (id) => {
  const query = {
    type: 'select',
    table: 'public.rejection_supplier_stores',
    condition: { id },
    limit: 5,
  };

  const result = await seedingData(query, 'service_account');

  return result;
};

/**
 * This function for seeding data delete by id on rejection_supplier_stores table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idRejectionSupplierStores id from rejection_supplier_stores table.
 */
export const deleteByRejectionStoreId = async (params) => {
  const query = {
    type: 'remove',
    table: 'public.rejection_supplier_stores',
    condition: {
      supplier_store_id: params.idRejectionSupplierStores,
    },
  };

  await seedingData(query, 'service_account');
};
