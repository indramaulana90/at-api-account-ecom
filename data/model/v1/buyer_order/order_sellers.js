/**
* Author      : Fakhruzzahid Wahdah (fakhruzzahid.wahdah@sinbad.co.id)
* Modifier    : 1. Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
                2. Bob Nathan Saputra (bob.saputra@sinbad.co.id)
                3. Aria Suseno (aria.suseno@sinbad.co.id)
* Domain      : buyer_order
* Description : This File for Model Seeding Data on order_sellers table
*/

import seedingData from '@at-api-core/seeding-data';

/**
 * This function for seeding data select by id on order_sellers table.
 * @param {Number} id order_sellers id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'public.order_sellers',
    condition: { id },
    limit: 5,
  };

  const result = await seedingData(query, 'ms_ng_ecom_order');

  return result;
};

/**
 * This function for seeding data select by id on order_sellers table.
 * @param {Number} sellerId seller_id from order_sellers table.
 * @return {ArrayOfObject} result from db.
 */
export const selectBySellerId = async (sellerId) => {
  const query = {
    type: 'select',
    table: 'public.order_sellers',
    condition: {
      seller_id: sellerId,
    },
  };

  const result = await seedingData(query, 'ms_ng_ecom_order');

  return result;
};

/**
 * This function for seeding data select by order_id on order_sellers table.
 * @return {ArrayOfObject} result from db.
 * @param {Number} idOrders id from order_sellers table.
 */
export const selectByOrderId = async (id) => {
  const query = {
    type: 'select',
    table: 'public.order_sellers',
    condition: { order_id: id },
    limit: 5,
  };

  const result = await seedingData(query, 'ms_ng_ecom_order');

  return result;
};

/**
 * This function for seeding data select all limit 1 by parameter on order_sellers table.
 * @param {String} seller_admin_email Seller Admin Email.
 * @return {ArrayOfObject} result from db.
 */
export const selectByParameter = async () => {
  const query = {
    type: 'select',
    table: 'public.order_sellers',
    condition: {
      seller_admin_email: 'admin.trs@sinbad.co.id',
    },
    limit: 1,
  };

  const result = await seedingData(query, 'ms_ng_ecom_order');

  return result;
};

/**
 * This function for seeding data delete by id on order_sellers table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idOrderSellers id from order_sellers table.
 */
export const deleteById = async (params) => {
  const query = {
    type: 'remove',
    table: 'public.order_sellers',
    condition: {
      id: params.idOrderSellers,
    },
  };

  await seedingData(query, 'ms_ng_ecom_order');
};

/**
 * This function for seeding data delete by order_id on order_sellers table.
 * @param {Number} orderId order_id from order_sellers table.
 */
export const deleteByOrderId = async (orderId) => {
  const query = {
    type: 'remove',
    table: 'public.order_sellers',
    condition: {
      order_id: orderId,
    },
  };

  await seedingData(query, 'ms_ng_ecom_order');
};

/**
 * This function for seeding data create order on order_sellers table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.orderSellerId id from order_sellers table.
 * @param {Date} params.created_at created_at from order_sellers table.
 * @param {Date} params.updated_at updated_at from order_sellers table.
 * @param {Number} params.orderId order_id from order_sellers table.
 * @param {Number} params.seller_id seller_id from order_sellers table.
 * @param {String} params.order_seller_code order_seller_code from order_sellers table.
 * @param {Number} params.total_seller_price total_seller_price from order_sellers table.
 * @param {String} params.last_status last_status from order_sellers table.
 * @param {String} params.last_status_reason last_status_reason from order_sellers table.
 * @param {Number} params.max_lead_time mas_lead_time from order_sellers table.
 */
export const createOrderSellers = async (params) => {
  const query = {
    type: 'insert',
    table: 'public.order_sellers',
    values: {
      id: params.orderSellerId,
      created_at: params.created_at,
      updated_at: params.updated_at,
      deleted_at: null,
      order_id: params.orderId,
      seller_id: params.seller_id,
      seller_name: params.seller_name,
      order_seller_code: params.order_seller_code,
      total_seller_price_after_tax: params.total_seller_price,
      last_status: params.last_status,
      last_status_reason_eng: params.last_status_reason_eng,
      last_status_reason_idn: params.last_status_reason_idn,
      max_lead_time: params.max_lead_time,
      total_qty: params.qty,
    },
  };

  await seedingData(query, 'ms_ng_ecom_order');
};

/**
 * This function for seeding data select data based on last_status and last_status_reason_eng in order_sellers table.
 * @return {ArrayOfObject} result from db.
 */
export const selectAll = async () => {
  const query = 'select * from public.order_sellers where last_status_reason_eng is not null and last_status is not null order by id asc limit 1;';
  const result = await seedingData(query, 'ms_ng_ecom_order');
  return result;
};
