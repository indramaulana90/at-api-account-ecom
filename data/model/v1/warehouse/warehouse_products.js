/**
* Author      : Christoforus Williem Deo Lumoindong (christoforus.williem@sinbad.co.id)
* Modifier    :
* Domain      : warehouse
* Description : This File for Model Seeding Data on warehouse_products table
*/

import seedingData from '@at-api-core/seeding-data';
import dateCommander from '@at-api-core/date-commander';

/**
 * This function for seeding data select by id on warehouse_products table.
 * @param {Number} id warehouse_products id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'public.warehouse_products',
    condition: { id },
    limit: 5,
  };

  const result = await seedingData(query, 'ms-service-warehouse');

  return result;
};

/**
 * This function for seeding data select by id on warehouse_products table.
 * @param {String} id product id from products mongodb collection.
 * @return {ArrayOfObject} result from db.
 */
export const selectByProductId = async (id) => {
  const query = {
    type: 'select',
    table: 'public.warehouse_products',
    condition: { product_id: id },
    limit: 5,
  };

  const result = await seedingData(query, 'ms-service-warehouse');

  return result;
};

/**
 * This function for seeding data select by warehouse_id on warehouse_products table.
 * @param {Number} id warehouse id.
 * @return {ArrayOfObject} result from db.
 */
export const selectByWarehouseId = async (id) => {
  const query = {
    type: 'select',
    table: 'public.warehouse_products',
    condition: { warehouse_id: id },
    limit: 5,
  };

  const result = await seedingData(query, 'ms-service-warehouse');

  return result;
};

/**
 * This function for seeding data select by warehouse_id on warehouse_products table.
 * @param {Number} id warehouse id.
 * @return {ArrayOfObject} result from db.
 */
export const selectByWarehouseAndProductId = async (wId, pId) => {
  const query = {
    type: 'select',
    table: 'public.warehouse_products',
    condition: {
      warehouse_id: wId,
      product_id: pId,
    },
    limit: 5,
  };

  const result = await seedingData(query, 'ms-service-warehouse');

  return result;
};

/**
 * This function for seeding data select by warehouse_id on warehouse_products table.
 * @param {Number} id warehouse id.
 * @return {ArrayOfObject} result from db.
 */
export const selectEmpty = async (wId) => {
  const query = {
    type: 'select',
    table: 'public.warehouse_products',
    condition: {
      warehouse_id: wId,
      is_unlimited: false,
      stock: 0,
    },
    limit: 5,
  };

  const result = await seedingData(query, 'ms-service-warehouse');

  return result;
};

/**
 * This function for seeding data insert with half params on warehouse_products table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idWarehouseProducts id from warehouse_products table.
 * @param {Number} params.idWarehouse id from warehouses table.
 * @param {String} params.idSyncProduct id from sync_products table.
 * @param {Boolean} params.unlim unlimited or not (boolean).
 * @param {Number?} params.stock stock of the product (not applicable if unlimited).
 * @param {Number?} params.reserve_stock reserve stock of the product (not applicable if unlimited).
 * @param {String} params.atName Original name of AT Name without space maximum 11 char (e.g. StoreDtail).
 */
export const insertFullParams = async (params) => {
  const query = {
    type: 'insert',
    table: 'public.warehouse_products',
    values: {
      id: params.idWarehouseProducts,
      warehouse_id: params.idWarehouse,
      product_id: params.idSyncProduct,
      is_unlimited: params.unlim,
      stock: params.stock,
      reserve_stock: params.reserve,
    },
  };
  await seedingData(query, 'ms-service-warehouse');
};

/**
 * This function for seeding data insert with half params on warehouse_products table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idWarehouseProducts id from warehouse_products table.
 * @param {Number} params.idWarehouse id from warehouses table.
 * @param {String} params.idSyncProduct id from sync_products table.
 * @param {Boolean} params.unlim unlimited or not (boolean).
 * @param {Number?} params.stock stock of the product (not applicable if unlimited).
 * @param {Number?} params.reserve_stock reserve stock of the product (not applicable if unlimited).
 * @param {String} params.atName Original name of AT Name without space maximum 11 char (e.g. StoreDtail).
 */
export const insertFullParamsNG = async (params) => {
  const query = {
    type: 'insert',
    table: 'public.warehouse_products',
    values: {
      id: params.idWarehouseProducts,
      warehouse_id: params.idWarehouse,
      product_id: params.idSyncProduct,
      stock: params.stock,
      reserve_stock: params.reserve,
      created_at: dateCommander('now'),
      updated_at: dateCommander('now'),
    },
  };
  await seedingData(query, 'ms_ng_ecom_warehouse');
};

/**
 * This function for seeding data delete by id on warehouse_products table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idWarehouseProducts id from warehouse_products table.
 */
export const deleteById = async (id) => {
  const query = {
    type: 'remove',
    table: 'public.warehouse_products',
    condition: {
      id,
    },
  };

  await seedingData(query, 'ms_ng_ecom_warehouse');
};

/**
 * This function for seeding data delete by id on warehouse_products table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.IdWarehouse idWarehouse from warehouse_products table.
 */
export const deleteByIdWarehouse = async (IdWarehouse) => {
  const query = {
    type: 'remove',
    table: 'public.warehouse_products',
    condition: {
      warehouse_id: IdWarehouse,
    },
  };

  await seedingData(query, 'ms_ng_ecom_warehouse');
};

/**
 * This function for seeding data select by id on warehouse_products table.
 * @param {Number} id warehouse_products id.
 * @return {ArrayOfObject} result from db.
 */
export const selectByProductIdParam = async (idSyncProduct) => {
  const query = {
    type: 'select',
    table: 'public.warehouse_products',
    condition: { product_id: idSyncProduct },
    limit: 5,
  };

  const result = await seedingData(query, 'ms_ng_ecom_warehouse');

  return result;
};
