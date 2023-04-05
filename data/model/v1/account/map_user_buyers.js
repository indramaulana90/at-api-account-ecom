/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Model Seeding Data on map_user_buyers table
*/

import seedingData from '@at-api-core/seeding-data';

/**
 * This function for seeding data select by id on map_user_buyers table.
 * @param {Number} id map_user_buyers id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'public.map_user_buyers',
    condition: { id },
    limit: 5,
  };

  const result = await seedingData(query, 'ms_ng_ecom_account');

  return result;
};

/**
 * This function for seeding data select by user_id on map_user_buyers table.
 * @param {Number} userId map_user_buyers id.
 * @return {ArrayOfObject} result from db.
 */
export const selectByUserId = async (userId) => {
  const query = {
    type: 'select',
    table: 'public.map_user_buyers',
    condition: { user_id: userId },
  };

  const result = await seedingData(query, 'ms_ng_ecom_account');

  return result;
};

/**
 * This function for seeding data delete by user_id on map_user_buyers table.
 * @param {Number} userId user_id from map_user_buyers table.
 */
export const deleteByUserId = async (userId) => {
  const query = {
    type: 'remove',
    table: 'public.map_user_buyers',
    condition: {
      user_id: userId,
    },
  };

  await seedingData(query, 'ms_ng_ecom_account');
};

/**
 * This function for seeding data reset status of sompleted data on map_user_buyers table.
 * @param {Number} userId user_id from map_user_buyers table.
 */
export const resetCompletedData = async (userId) => {
  const query = {
    type: 'update',
    table: 'public.map_user_buyers',
    modifier: { is_data_completed: false },
    condition: {
      user_id: userId,
    },
  };

  await seedingData(query, 'ms_ng_ecom_account');
};
