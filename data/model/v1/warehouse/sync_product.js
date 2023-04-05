/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    :
* Domain      : warehouse
* Description : This File for Model Seeding Data on sync_product table
*/

import seedingData from '@at-api-core/seeding-data';

/**
 * This function for seeding data select by id on sync_product table.
 * @param {String} id sync_product id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'public.sync_product',
    condition: { id },
    limit: 5,
  };

  const result = await seedingData(query, 'ms_ng_ecom_warehouse');

  return result;
};

/**
 * This function for seeding data delete by id on sync_product table.
 * @param {String} id id from sync_product table.
 */
export const deleteById = async (id) => {
  const query = {
    type: 'remove',
    table: 'public.sync_product',
    condition: {
      id,
    },
  };

  await seedingData(query, 'ms_ng_ecom_warehouse');
};

export const createProduct = async (params) => {
  const query = {
    type: 'insert',
    table: 'public.sync_product',
    values: {
      id: params.idSyncProduct,
      name: params.nameProduct,
      external_code: params.external_code,
      status: params.status,
      seller_id: params.seller_id,
      thumbnail: params.thumbnail,
      created_at: params.created_at,
      updated_at: params.updated_at,
      deleted_at: params.deleted_at || null,
      product_unit: 'CTN',
      min_qty: 1,
    },
  };
  await seedingData(query, 'ms_ng_ecom_warehouse');
};
