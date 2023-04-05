/**
* Author      : Aria Suseno (aria.suseno@sinbad.co.id)
* Modifier    : 1. Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Domain      : buyer_order
* Description : This File for Model Seeding Data on order_seller_status_histories table
*/

import seedingData from '@at-api-core/seeding-data';

/**
 * This function for seeding data select by id on order_seller_status_histories table.
 * @param {Number} id order_seller_status_histories order_sellers_id.
 * @return {ArrayOfObject} result from db.
 */
// eslint-disable-next-line camelcase
export const selectByOrderSellersId = async (order_seller_id) => {
  const query = {
    type: 'select',
    table: 'public.order_seller_status_histories',
    condition: { order_seller_id },
    limit: 5,
  };

  const result = await seedingData(query, 'ms_ng_ecom_order');

  return result;
};

/**
 * This function for seeding data delete by id on order_seller_status_histories table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idOrderSellerStatusHistories id from order_seller_status_histories table.
 */
export const deleteById = async (id) => {
  const query = {
    type: 'remove',
    table: 'public.order_seller_status_histories',
    condition: {
      id,
    },
  };

  await seedingData(query, 'ms_ng_ecom_order');
};

/**
 * This function for seeding data delete by order_seller_id on order_seller_status_histories table.
 * @param {Number} orderSellerId order_seller_id from order_seller_status_histories table.
 */
export const deleteByOrderSellerId = async (orderSellerId) => {
  const query = {
    type: 'remove',
    table: 'public.order_seller_status_histories',
    condition: {
      order_seller_id: orderSellerId,
    },
  };

  await seedingData(query, 'ms_ng_ecom_order');
};

/**
 * This function for seeding data create order on order_seller_status_histories table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.orderSellerStatusHistoriesId id from order_seller_status_histories table.
 * @param {Number} params.orderSellerId order_seller_id from order_seller_status_histories table.
 * @param {Number} params.order_seller_status order_seller_status from order_seller_status_histories table.
 * @param {String} params.order_seller_status_reason order_seller_status_reason from order_seller_status_histories table.
 * @param {Date} params.created_at created_at from order_seller_status_histories table.
 * @param {Date} params.updated_at updated_at from order_seller_status_histories table.
 */
export const createOrderSellerStatusHistories = async (params) => {
  const query = {
    type: 'insert',
    table: 'public.order_seller_status_histories',
    values: {
      id: params.orderSellerStatusHistoriesId,
      order_seller_id: params.orderSellerId,
      order_seller_status: params.order_seller_status,
      order_seller_status_reason_eng: params.order_seller_status_reason_eng,
      order_seller_status_reason_idn: params.order_seller_status_reason_idn,
      created_at: params.created_at,
      updated_at: params.updated_at,
      deleted_at: null,
    },
  };

  await seedingData(query, 'ms_ng_ecom_order');
};
