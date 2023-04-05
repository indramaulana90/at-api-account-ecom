/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    :
* Domain      : buyer_order
* Description : This File for Seeders Data for Order Histories
*/

import { createOrders, deleteById as deleteOrder } from '../../../model/v1/buyer_order/orders';
import { createOrderSellers, deleteByOrderId as deleteOrderSeller } from '../../../model/v1/buyer_order/order_sellers';
import { createOrderSellerStatusHistories, deleteByOrderSellerId as deleteOrderSellerStatus } from '../../../model/v1/buyer_order/order_seller_status_histories';
import { createOrderProducts, deleteByOrderSellerId as deleteOrderProduct } from '../../../model/v1/buyer_order/order_products';
import { createOrderBillings, deleteByOrderId as deleteOrderBilling } from '../../../model/v1/buyer_order/order_billings';

export const createOrderHistory = async (objectData) => {
  await createOrders(objectData);
  await createOrderSellers(objectData);
  await createOrderSellerStatusHistories(objectData);
  await createOrderProducts(objectData);
  await createOrderBillings(objectData);
};

export const deleteOrderHistory = async (orderId, orderSellerId) => {
  await deleteOrderBilling(orderId);
  await deleteOrderProduct(orderSellerId);
  await deleteOrderSellerStatus(orderSellerId);
  await deleteOrderSeller(orderId);
  await deleteOrder(orderId);
};

export const deleteOrderHistoryWODeleteOrder = async (orderId, orderSellerId) => {
  await deleteOrderBilling(orderId);
  await deleteOrderProduct(orderSellerId);
  await deleteOrderSellerStatus(orderSellerId);
  await deleteOrderSeller(orderId);
  // await deleteOrder(orderId); // dont delete order code because have issue on midtrans if deleted
};
