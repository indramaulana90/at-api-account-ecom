/**
* Author      : Aria Suseno (aria.suseno@sinbad.co.id)
* Modifier    : 1. Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Domain      : buyer_order
* Description : This File for Model Seeding Data on order_products table
*/

import seedingData from '@at-api-core/seeding-data';

/**
 * This function for seeding data select by id on order_products table.
 * @param {Number} id order_products id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'public.order_products',
    condition: { id },
    limit: 5,
  };

  const result = await seedingData(query, 'ms_ng_ecom_order');

  return result;
};

/**
 * This function for seeding data select by order_seller_id on order_products table.
 * @param {Number} orderSellerId order_seller_id on order_products table.
 * @return {ArrayOfObject} result from db.
 */
export const selectByOrderSellerId = async (orderSellerId) => {
  const query = {
    type: 'select',
    table: 'public.order_products',
    condition: { order_seller_id: orderSellerId },
    limit: 5,
  };

  const result = await seedingData(query, 'ms_ng_ecom_order');

  return result;
};

/**
 * This function for seeding data delete by id on order_products table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idOrderProducts id from order_products table.
 */
export const deleteById = async (params) => {
  const query = {
    type: 'remove',
    table: 'public.order_products',
    condition: {
      id: params.idOrderProducts,
    },
  };

  await seedingData(query, 'ms_ng_ecom_order');
};

/**
 * This function for seeding data delete by order_id on order_products table.
 * @param {Number} orderSellerId order_seller_id from order_products table.
 */
export const deleteByOrderSellerId = async (orderSellerId) => {
  const query = {
    type: 'remove',
    table: 'public.order_products',
    condition: {
      order_seller_id: orderSellerId,
    },
  };

  await seedingData(query, 'ms_ng_ecom_order');
};

/**
 * This function for seeding data create order on order_products table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.orderProductId id from order_products table.
 * @param {Date} params.created_at created_at from order_products table.
 * @param {Date} params.updated_at updated_at from order_products table.
 * @param {Number} params.orderSellerId order_seller_id from order_products table.
 * @param {String} params.product_id product_id from order_products table.
 * @param {Number} params.warehouse_id warehouse_id from order_products table.
 * @param {String} params.warehouse_name warehouse_name from order_products table.
 * @param {String} params.category_id category_id from order_products table.
 * @param {String} params.brand_id brand_id from order_products table.
 * @param {String} params.brand_name brand_name from order_products table.
 * @param {Number} params.lead_time lead_time from order_products table.
 * @param {String} params.product_name product_name from order_products table.
 * @param {String} params.product_image_url product_image_url from order_products table.
 * @param {Number} params.qty qty from order_products table.
 * @param {Number} params.qty_per_box qty_per_box from order_products table.
 * @param {String} params.uom_label uom_label from order_products table.
 * @param {Boolean} params.is_price_after_tax is_price_after_tax from order_products table.
 * @param {Number} params.tax_percentage tax_percentage from order_products table.
 * @param {Number} params.price price from order_products table.
 * @param {Number} params.total_product_price total_product_price from order_products table.
 */
export const createOrderProducts = async (params) => {
  const query = {
    type: 'insert',
    table: 'public.order_products',
    values: {
      id: params.orderProductId,
      created_at: params.created_at,
      updated_at: params.updated_at,
      deleted_at: null,
      order_seller_id: params.orderSellerId,
      product_id: params.product_id,
      warehouse_id: params.warehouse_id,
      warehouse_name: params.warehouse_name,
      category_id: params.category_id,
      brand_id: params.brand_id,
      brand_name: params.brand_name,
      lead_time: params.lead_time,
      product_name: params.product_name,
      product_image_url: params.product_image_url,
      qty: params.qty,
      qty_per_box: params.qty_per_box,
      uom_label: params.uom_label,
      is_price_after_tax: params.is_price_after_tax,
      tax_percentage: params.tax_percentage,
      product_price_after_tax: params.price,
      total_product_price_after_tax: params.total_product_price,
    },
  };

  await seedingData(query, 'ms_ng_ecom_order');
};
