/**
* Author      : Farhad (farhad@sinbad.co.id)
* Modifier    :
* Domain      : order
* Description : This File for Seeders Data for Create Order Parcel
*/

import { insertHalfParams as insertUrbans } from '../../../model/v1/order/urbans';
import { insertHalfParams as insertBuyers } from '../../../model/v1/order/buyers';
import { insertHalfParams as insertInvoiceGroups } from '../../../model/v1/order/invoice_groups';
import { insertHalfParams as insertBrands } from '../../../model/v1/order/brands';
import { insertHalfParams as insertProducts } from '../../../model/v1/order/products';
import { insertHalfParams as insertOrder } from '../../../model/v1/order/orders';
import { insertHalfParams as insertOrderParcels } from '../../../model/v1/order/order_parcels';
import { insertHalfParams as insertOrderParcelProducts } from '../../../model/v1/order/order_parcel_products';

/**
 * This function for seeding data insert with half params on orders table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idOrders id from orders table.
 * @param {String} params.idOrderParcels id from order_parcels table.
 * @param {String} params.idOrderParcelProducts id from order_parcel_products table.
 * @param {?String} params.status status order parcel.
 * @param {?String} params.orderSent condition order is sent true or false
 * @param {?String} params.deliveredModified condition delivered is true or false
 * @param {String} params.idBrands id from brands table.
 * @param {String} params.idBuyers id from buyers table.
 * @param {String} params.idUrbans id from urbans table.
 * @param {String} params.idInvoiceGroups id from invoice_groups table.
 * @param {String} params.idCart id from cart table in mongoDB.
 * @param {String} params.idDevice id from deviceId.
 * @param {String} params.idProducts id from products table.
 * @param {String} params.atName Original name of AT Name without space maximum 11 char (e.g. StoreDtail).
 * @param {String} params.idPhoneNumber (0893)phone number.
 */
export default async (params) => {
  await insertUrbans(params);
  await insertBuyers(params);
  await insertInvoiceGroups(params);
  await insertBrands(params);
  await insertProducts(params);
  await insertOrder(params);
  await insertOrderParcels(params);
  await insertOrderParcelProducts(params);
};
