/**
* Author      : Farhad (farhad@sinbad.co.id)
* Modifier    :
* Domain      : order
* Description : This File for Model Seeding Data on order_parcel_products table
*/

import seedingData from '@at-api-core/seeding-data';

const dateCommander = require('@at-api-core/date-commander');

/**
 * This function for seeding data select by id on order_parcel_products table.
 * @param {Number} id order_parcel_products id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'public.order_parcel_products',
    condition: { id },
    limit: 5,
  };

  const result = await seedingData(query, 'service_order');

  return result;
};

/**
 * This function for seeding data insert with half params on order_parcel_products table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idOrderParcelProducts id from order_parcel_products table.
 * @param {String} params.idBrands id from brands table
 * @param {String} params.idProducts id from products table
 */
export const insertHalfParams = async (params) => {
  const query = {
    type: 'insert',
    table: 'public.order_parcel_products',
    values: {
      id: params.idOrderParcelProducts,
      order_parcel_id: params.idOrderParcels,
      brand_id: params.idBrands,
      product_promo_seller_value: 0,
      product_voucher_seller_value: 0,
      invoiced_promo_seller_value: 0,
      invoiced_voucher_seller_value: 0,
      delivered_promo_seller_value: 0,
      delivered_voucher_seller_value: 0,
      product_id: params.idProducts,
      product_tax_id: '110000000000000000000000',
      warehouse_id: 8,
      qty: 3,
      invoiced_qty: 0,
      delivered_qty: 0,
      gross_price: 100000,
      nett_price: 110000,
      product_nett_price: 1100000,
      product_gross_price: 1000000,
      product_taxes: 100000,
      product_final_price: 1100000,
      invoiced_product_nett_price: 0,
      invoiced_product_gross_price: 0,
      invoiced_gross_price: 0,
      invoiced_product_final_price: 0,
      invoiced_order_modified: false,
      delivered_product_nett_price: 0,
      delivered_product_gross_price: 0,
      delivered_product_final_price: 0,
      delivered_order_modified: false,
      delivered_gross_price: 0,
      returned_qty: null,
      created_at: dateCommander('now'),
      updated_at: dateCommander('now'),
      deleted_at: null,
    },
  };

  await seedingData(query, 'service_order');
};

/**
 * This function for seeding data delete by id on order_parcel_products table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idOrderParcelProducts id from order_parcel_products table.
 */
export const deleteById = async (params) => {
  const query = {
    type: 'remove',
    table: 'public.order_parcel_products',
    condition: {
      id: params.idOrderParcelProducts,
    },
  };

  await seedingData(query, 'service_order');
};
