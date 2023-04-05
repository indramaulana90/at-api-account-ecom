/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    :
* Domain      : buyer_order
* Description : This File for Model Seeding Data on failed_delivery_reasons table
*/

import seedingData from '@at-api-core/seeding-data';

/**
 * This function for seeding data select by id on failed_delivery_reasons table.
 * @param {Number} id failed_delivery_reasons id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'public.failed_delivery_reasons',
    condition: { id },
    limit: 5,
  };

  const result = await seedingData(query, 'ms_ng_ecom_order');

  return result;
};

/**
 * This function for seeding data delete by id on failed_delivery_reasons table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idFailedDeliveryReasons id from failed_delivery_reasons table.
 */
export const deleteById = async (params) => {
  const query = {
    type: 'remove',
    table: 'public.failed_delivery_reasons',
    condition: {
      id: params.idFailedDeliveryReasons,
    },
  };

  await seedingData(query, 'ms_ng_ecom_order');
};
