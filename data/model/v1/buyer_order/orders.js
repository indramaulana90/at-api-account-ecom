/**
* Author      : Farhad (farhad@sinbad.co.id)
* Modifier    : 1. Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Domain      : order
* Description : This File for Model Seeding Data on orders table
*/

import seedingData from '@at-api-core/seeding-data';

/**
 * This function for seeding data select by id on orders table.
 * @param {Number} id orders id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'public.orders',
    condition: { id },
    limit: 5,
  };

  const result = await seedingData(query, 'ms_ng_ecom_order');

  return result;
};

/**
 * This function for seeding data delete by id on orders table.
 * @param {Number} id id from orders table.
 */
export const deleteById = async (id) => {
  const query = {
    type: 'remove',
    table: 'public.orders',
    condition: {
      id,
    },
  };

  await seedingData(query, 'ms_ng_ecom_order');
};

/**
 * This function for seeding data create order on orders table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.orderId id from orders table.
 * @param {Date} params.created_at created_at from orders table.
 * @param {Date} params.updated_at updated_at from orders table.
 * @param {Date} params.reserved_at reserved_at from orders table.
 * @param {String} params.cart_id cart_id from orders table.
 * @param {String} params.device_id device_id from orders table.
 * @param {Number} params.user_id user_id from orders table.
 * @param {Number} params.buyer_id buyer_id from orders table.
 * @param {String} params.buyer_name buyer_name from orders table.
 * @param {String} params.buyer_address_latitude buyer_address_latitude from orders table.
 * @param {String} params.buyer_address_longitude buyer_address_longitude from orders table.
 * @param {String} params.buyer_address_province buyer_address_province from orders table.
 * @param {String} params.buyer_address_city buyer_address_city from orders table.
 * @param {String} params.buyer_address_district buyer_address_district from orders table.
 * @param {String} params.buyer_address_urban buyer_address_urban from orders table.
 * @param {String} params.buyer_address_zip_code buyer_address_zip_code from orders table.
 * @param {String} params.buyer_address buyer_address from orders table.
 * @param {String} params.buyer_note_address buyer_note_address from orders table.
 * @param {String} params.buyer_address_location_id buyer_address_location_id from orders table.
 * @param {Number} params.total_order_price total_order_price from orders table.
 * @param {String} params.order_status order_status from orders table.
 * @param {String} params.order_code order_code from orders table.
 */
export const createOrders = async (params) => {
  const query = {
    type: 'insert',
    table: 'public.orders',
    values: {
      id: params.orderId,
      created_at: params.created_at,
      updated_at: params.updated_at,
      reserved_at: params.reserved_at,
      cart_id: params.cart_id,
      device_id: params.device_id,
      user_id: params.user_id,
      buyer_id: params.buyer_id,
      buyer_name: params.buyer_name,
      buyer_address_latitude: params.buyer_address_latitude,
      buyer_address_longitude: params.buyer_address_longitude,
      buyer_address_province: params.buyer_address_province,
      buyer_address_city: params.buyer_address_city,
      buyer_address_district: params.buyer_address_district,
      buyer_address_urban: params.buyer_address_urban,
      buyer_address_zip_code: params.buyer_address_zip_code,
      buyer_address: params.buyer_address,
      buyer_note_address: params.buyer_note_address,
      buyer_address_location_id: params.buyer_address_location_id,
      total_order_price_after_tax: params.total_order_price,
      order_status: params.order_status,
      order_code: params.order_code,
    },
  };

  await seedingData(query, 'ms_ng_ecom_order');
};
