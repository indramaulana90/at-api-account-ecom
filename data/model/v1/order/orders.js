/**
* Author      : Farhad (farhad@sinbad.co.id)
* Modifier    :
* Domain      : order
* Description : This File for Model Seeding Data on orders table
*/

import seedingData from '@at-api-core/seeding-data';
import getModelValues from '@at-api-core/get-model-values';

const dateCommander = require('@at-api-core/date-commander');

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

  const result = await seedingData(query, 'service_order');

  return result;
};

/**
 * This function for seeding data insert with half params on orders table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idOrders id from orders table.
 * @param {String} params.idUsers id from tmp/datas-staging.
 * @param {String} params.idBuyers id from buyers table.
 * @param {String} params.idCart id from cart table in mongoDb.
 * @param {String} params.idDevice id from deviceId
 * @param {String} params.idPhoneNumber (0893)phone number
 */
export const insertHalfParams = async (params) => {
  const query = {
    type: 'insert',
    table: 'public.orders',
    values: {
      id: params.idOrders,
      user_id: params.idUsers,
      buyer_id: params.idBuyers,
      cart_id: params.idCart,
      origin_order_code: null,
      first_order: false,
      platform: 'sinbad-app',
      status: 'confirmed',
      device_id: params.idDevice,
      buyer_name: getModelValues('buyers', params).name,
      buyer_address: getModelValues('buyers', params).address,
      buyer_phone_no: `0893${params.idPhoneNumber}`,
      created_at: dateCommander('now'),
      updated_at: dateCommander('now'),
      deleted_at: null,
    },
  };

  await seedingData(query, 'service_order');
};

/**
 * This function for seeding data delete by id on orders table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idOrders id from orders table.
 */
export const deleteById = async (params) => {
  const query = {
    type: 'remove',
    table: 'public.orders',
    condition: {
      id: params.idOrders,
    },
  };

  await seedingData(query, 'service_order');
};
