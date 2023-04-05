/**
* Author      : Tua Roy Situmorang (tuaroy.situmorang@sinbad.co.id)
* Modifier    :
* Domain      : warehouse
* Description : This File for Model Seeding Data on warehouses table
*/

import seedingData from '@at-api-core/seeding-data';

/**
 * This function for seeding data select by id on warehouses table.
 * @param {Number} id warehouses id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'public.warehouses',
    condition: { id },
  };

  const result = await seedingData(query, 'ms_ng_ecom_warehouse');

  return result;
};

/**
 * This function for seeding data select by name on warehouses table.
 * @param {Number} id warehouses id.
 * @return {ArrayOfObject} result from db.
 */
export const selectByName = async (whName, sellerId) => {
  const query = {
    type: 'select',
    table: 'public.warehouses',
    condition: { 
      name: whName,
      seller_id: sellerId 
    },
  };

  const result = await seedingData(query, 'ms_ng_ecom_warehouse');

  return result;
};

/**
 * This function for seeding data select by id on warehouses table.
 * @param {Number} slug warehouses id.
 * @return {ArrayOfObject} result from db.
 */
export const selectBySlug = async (slug) => {
  const query = {
    type: 'select',
    table: 'public.warehouses',
    condition: { slug },
  };

  const result = await seedingData(query, 'ms_ng_ecom_warehouse');

  return result;
};

/**
 * This function for seeding data select by id on warehouses table.
 * @return {ArrayOfObject} result from db.
 */
export const select = async () => {
  const query = {
    type: 'select',
    table: 'public.warehouses',
    limit: 5,
  };

  const result = await seedingData(query, 'ms_ng_ecom_warehouse');

  return result;
};

/**
 * This function for seeding data select by id on warehouses table.
 * @param {Number} sellerId warehouses sellerId.
 * @return {ArrayOfObject} result from db.
 */
export const selectBySellerId = async (sellerId) => {
  const query = {
    type: 'select',
    table: 'public.warehouses',
    condition: { seller_id: sellerId },
    sort: '1',
    limit: 5,
  };

  const result = await seedingData(query, 'ms_ng_ecom_warehouse');

  return result;
};

/**
 * This function for seeding data delete by id on warehouses table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idWarehouses id from warehouses table.
 */
export const deleteById = async (id) => {
  const query = {
    type: 'remove',
    table: 'public.warehouses',
    condition: { id },
  };

  await seedingData(query, 'ms_ng_ecom_warehouse');
};

/**
 * This function for seeding data delete by id on warehouses table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idWarehouses id from warehouses table.
 */
export const deleteByIdParam = async (id) => {
  const query = {
    type: 'remove',
    table: 'public.warehouses',
    condition: { id },
  };

  await seedingData(query, 'ms_ng_ecom_warehouse');
};

export const createWarehouse = async (params) => {
  const query = {
    type: 'insert',
    table: 'public.warehouses',
    values: {
      id: params.idWarehouses,
      seller_id: params.seller_id,
      location_id: params.location_id,
      slug: params.slug,
      name: params.nameWarehouses,
      external_code: params.external_code,
      address: params.address,
      note_address: params.note_address,
      lead_time: params.lead_time,
      status: params.status,
      created_at: params.created_at,
      updated_at: params.updated_at,
    },
  };
  await seedingData(query, 'ms_ng_ecom_warehouse');
};
