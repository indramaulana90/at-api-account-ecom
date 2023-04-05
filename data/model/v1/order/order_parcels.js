/**
* Author      : Farhad (farhad@sinbad.co.id)
* Modifier    :
* Domain      : order
* Description : This File for Model Seeding Data on order_parcels table
*/

import seedingData from '@at-api-core/seeding-data';
import getModelValues from '@at-api-core/get-model-values';

const dateCommander = require('@at-api-core/date-commander');

/**
 * This function for seeding data select by id on order_parcels table.
 * @param {Number} id order_parcels id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'public.order_parcels',
    condition: { id },
    limit: 5,
  };

  const result = await seedingData(query, 'service_order');

  return result;
};

/**
 * This function for seeding data delete by id on order_parcels table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idOrderParcels id from order_parcels table.
 */
export const deleteById = async (params) => {
  const query = {
    type: 'remove',
    table: 'public.order_parcels',
    condition: {
      id: params.idOrderParcels,
    },
  };

  await seedingData(query, 'service_order');
};

/**
 * This function for seeding data insert with half params on a table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idOrderParcels id from a table.
 * @param {String} params.idOrder id from a table order.
 * @param {?String} params.status status order parcel.
 * @param {?String} params.orderSent condition order is sent true or false.
 * @param {?String} params.deliveredModified condition delivered is true or false.
 * @param {?String} params.idInvoiceGroups id from invoice_groups table.
 */
export const insertHalfParams = async (params) => {
  const query = {
    type: 'insert',
    table: 'public.order_parcels',
    values: {
      id: params.idOrderParcels,
      order_id: params.idOrders,
      seller_id: 1,
      invoice_group_id: params.idInvoiceGroups,
      invoice_group_name: getModelValues('invoiceGroups', params).name,
      cart_parcel_id: null,
      portfolio_id: null,
      order_cancel_reason_id: null,
      payment_type_id: 3,
      payment_channel_id: 1,
      paylater_type_id: null,
      est_delivered_date: dateCommander('tomorrow'),
      delivered_date: null,
      order_notes: null,
      order_code: null,
      order_ref: null,
      paid_time: null,
      expired_payment_time: null,
      cancel_by: null,
      status_payment: 'waiting_for_payment',
      due_date: null,
      est_due_date: null,
      parcel_nett_price: 1100000,
      parcel_gross_price: 1000000,
      promo_seller_value: 0,
      voucher_seller_value: 0,
      parcel_taxes: 100000,
      parcel_final_price: 1100000,
      parcel_qty: 10,
      status: params.status || 'pending',
      status_update: dateCommander('now'),
      order_is_sent: params.orderSent || false,
      invoiced_parcel_gross_price: 0,
      invoiced_parcel_nett_price: 0,
      invoiced_promo_seller_value: 0,
      invoiced_voucher_seller_value: 0,
      invoiced_parcel_taxes: 0,
      invoiced_parcel_final_price: 0,
      invoiced_parcel_qty: 0,
      invoiced_parcel_modified: false,
      delivered_parcel_nett_price: 0,
      delivered_parcel_gross_price: 0,
      delivered_promo_seller_value: 0,
      delivered_voucher_seller_value: 0,
      delivered_parcel_taxes: 0,
      delivered_parcel_final_price: 0,
      delivered_parcel_qty: 0,
      delivered_parcel_modified: params.deliveredModified || false,
      cancel_time: null,
      refunded_time: null,
      promo_payment_id: null,
      promo_payment_name: null,
      parcel_promo_payment_value: 0.00,
      parcel_final_price_buyer: 0.00,
      invoiced_parcel_final_price_buyer: 0.00,
      delivered_parcel_final_price_buyer: 0.00,
      created_at: dateCommander('now'),
      updated_at: dateCommander('now'),
      deleted_at: null,
    },
  };

  await seedingData(query, 'service_order');
};

/**
 * This function for seeding data count each order parcel status on order_parcels table.
 * @return {ArrayOfObject} result from db.
 */
export const countOrderParcelStatus = async () => {
  const query = `SELECT
  SUM(CASE WHEN status NOT IN ('checkout', 'pending_seller', 'created') THEN 1 ELSE 0 END) AS "totalOrder",
  SUM(CASE WHEN status = 'confirmed' THEN 1 ELSE 0 END) AS "totalNewOrder",
  SUM(CASE WHEN status = 'packing' THEN 1 ELSE 0 END) AS "totalPackedOrder",
  SUM(CASE WHEN status = 'shipping' THEN 1 ELSE 0 END) AS "totalShippedOrder",
  SUM(CASE WHEN status = 'delivered' THEN 1 ELSE 0 END) AS "totalDeliveredOrder",
  SUM(CASE WHEN status = 'done' THEN 1 ELSE 0 END) AS "totalCompletedOrder",
  SUM(CASE WHEN status = 'cancel' THEN 1 ELSE 0 END) AS "totalCanceledOrder",
  SUM(CASE WHEN status = 'pending' THEN 1 ELSE 0 END) AS "totalPendingOrder",
  SUM(CASE WHEN status = 'pending_payment' THEN 1 ELSE 0 END) AS "totalPendingPaymentOrder",
  SUM(CASE WHEN status = 'pending_seller' THEN 1 ELSE 0 END) AS "totalPendingSeller",
  SUM(CASE WHEN status = 'pending_partial' THEN 1 ELSE 0 END) AS "totalPendingPartialOrder"
  FROM
    order_parcels
  WHERE
    seller_id = 1
  AND
    deleted_at IS NULL`;

  const result = await seedingData(query, 'service_order');

  return result;
};
