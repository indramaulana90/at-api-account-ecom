/**
* Author      : Farhad (farhad@sinbad.co.id)
* Modifier    :
* Domain      : order
* Description : This File for Model Seeding Data on order_parcel_logs table
*/

import seedingData from '@at-api-core/seeding-data';

/**
 * This function for seeding data select by id on order_parcel_logs table.
 * @param {Number} id order_parcel_logs id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'public.order_parcel_logs',
    condition: { id },
    limit: 5,
  };

  const result = await seedingData(query, 'service_order');

  return result;
};

/**
 * This function for seeding data delete by id on order_parcel_logs table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idOrderParcel order_parcel_id from order_parcel_logs table.
 */
export const selectByOrderParcelId = async (params) => {
  const query = {
    type: 'select',
    table: 'public.order_parcel_logs',
    condition: {
      order_parcel_id: params.idOrderParcels,
    },
  };

  await seedingData(query, 'service_order');
};

/**
 * This function for seeding data delete by id on order_parcel_logs table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idOrderParcelLogs id from order_parcel_logs table.
 */
export const deleteById = async (params) => {
  const query = {
    type: 'remove',
    table: 'public.order_parcel_logs',
    condition: {
      id: params.idOrderParcelLogs,
    },
  };

  await seedingData(query, 'service_order');
};

/**
 * This function for seeding data delete by id on order_parcel_logs table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idOrderParcel order_parcel_id from order_parcel_logs table.
 */
export const deleteByOrderParcelId = async (params) => {
  const query = {
    type: 'remove',
    table: 'public.order_parcel_logs',
    condition: {
      order_parcel_id: params.idOrderParcels,
    },
  };

  await seedingData(query, 'service_order');
};
