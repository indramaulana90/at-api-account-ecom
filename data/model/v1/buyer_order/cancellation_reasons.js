/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    :
* Domain      : buyer_order
* Description : This File for Model Seeding Data on cancellation_reasons table
*/

import seedingData from '@at-api-core/seeding-data';

/**
 * This function for seeding data select by id on cancellation_reasons table.
 * @param {Number} id cancellation_reasons id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'public.cancellation_reasons',
    condition: { id },
    limit: 5,
  };

  const result = await seedingData(query, 'ms_ng_ecom_order');

  return result;
};

/**
 * This function for seeding data delete by id on cancellation_reasons table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idCancellationReasons id from cancellation_reasons table.
 */
export const deleteById = async (params) => {
  const query = {
    type: 'remove',
    table: 'public.cancellation_reasons',
    condition: {
      id: params.idCancellationReasons,
    },
  };

  await seedingData(query, 'ms_ng_ecom_order');
};
