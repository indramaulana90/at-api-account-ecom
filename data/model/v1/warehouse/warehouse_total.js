/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
/**
* Author      : Tua Roy Situmorang (tuaroy.situmorang@sinbad.co.id)
* Modifier    :
* Domain      : warehouse
* Description : This File for Model Seeding Data on warehouse_total table
*/

import seedingData from '@at-api-core/seeding-data';

/**
 * This function for seeding data select by id on warehouses table.
 * @param {Number} id warehouse_total id.
 * @return {ArrayOfObject} result from db.
 */
export const selectByWarehouseId = async (warehouseId) => {
  const query = {
    type: 'select',
    table: 'public.warehouse_total',
    condition: { warehouse_id: warehouseId },
  };

  const result = await seedingData(query, 'ms_ng_ecom_warehouse');

  return result;
};

/**
 * This function for seeding data delete by id on warehouse_total table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idWarehouseTotal id from warehouse_total table.
 */
export const deleteById = async (warehouse_id) => {
  const query = {
    type: 'remove',
    table: 'public.warehouse_total',
    condition: { warehouse_id },
  };

  await seedingData(query, 'ms_ng_ecom_warehouse');
};
