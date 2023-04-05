/**
* Author      : Bob Nathan Saputra (bob.saputra@sinbad.co.id)
* Modifier    : 1. Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Domain      : buyer_order
* Description : This File for Model Seeding Data on order_billings table
*/

import seedingData from '@at-api-core/seeding-data';

/**
 * This function for seeding data select by id on order_billings table.
 * @param {Number} id order_billings id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'public.order_billings',
    condition: { id },
    limit: 5,
  };

  const result = await seedingData(query, 'ms_ng_ecom_order');

  return result;
};

/**
 * This function for seeding data select by order_id on order_billings table.
 * @param {Number} idOrder order_billings id.
 * @return {ArrayOfObject} result from db.
 */
export const selectByOrderId = async (idOrder) => {
  const query = {
    type: 'select',
    table: 'public.order_billings',
    condition: { order_id: idOrder },
    limit: 5,
  };

  const result = await seedingData(query, 'ms_ng_ecom_order');

  return result;
};

/**
 * This function for seeding data delete by id on order_billings table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idOrderBillings id from order_billings table.
 */
export const deleteById = async (params) => {
  const query = {
    type: 'remove',
    table: 'public.order_billings',
    condition: {
      id: params.idOrderBillings,
    },
  };

  await seedingData(query, 'ms_ng_ecom_order');
};

/**
 * This function for seeding data delete by order_id on order_billings table.
 * @param {Number} orderId order_id from order_billings table.
 */
export const deleteByOrderId = async (orderId) => {
  const query = {
    type: 'remove',
    table: 'public.order_billings',
    condition: {
      order_id: orderId,
    },
  };

  await seedingData(query, 'ms_ng_ecom_order');
};

/**
 * This function for seeding data create order on order_billings table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.orderBillingId id from order_billings table.
 * @param {Date} params.created_at created_at from order_billings table.
 * @param {Date} params.updated_at updated_at from order_billings table.
 * @param {Date} params.paid_at paid_at from order_billings table.
 * @param {Date} params.expired_at expired_at from order_billings table.
 * @param {Number} params.orderId order_id from order_id table.
 * @param {String} params.virtual_account_no virtual_account_no from order_billings table.
 * @param {Number} params.total_fee_deduct total_fee_deduct from order_billings table.
 * @param {Number} params.total_fee_non_deduct total_fee_non_deduct from order_billings table.
 * @param {Boolean} params.is_service_fee_free is_service_fee_free from order_billings table.
 * @param {Number} params.payment_method_id payment_method_id from order_billings table.
 */
export const createOrderBillings = async (params) => {
  const query = {
    type: 'insert',
    table: 'public.order_billings',
    values: {
      id: params.orderBillingId,
      created_at: params.created_at,
      updated_at: params.updated_at,
      deleted_at: null,
      paid_at: params.paid_at,
      expired_at: params.expired_at,
      order_id: params.orderId,
      virtual_account_no: params.virtual_account_no,
      total_fee_deduct: params.total_fee_deduct,
      total_fee_non_deduct: params.total_fee_non_deduct,
      is_service_fee_free: params.is_service_fee_free,
      payment_method_id: params.payment_method_id,
    },
  };

  await seedingData(query, 'ms_ng_ecom_order');
};
