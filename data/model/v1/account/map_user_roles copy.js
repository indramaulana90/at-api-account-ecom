/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Model Seeding Data on map_user_roles table
*/

import seedingData from '@at-api-core/seeding-data';

/**
 * This function for seeding data select by id on map_user_roles table.
 * @param {Number} id map_user_roles id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'public.map_user_roles',
    condition: { id },
    limit: 5,
  };

  const result = await seedingData(query, 'ms_ng_ecom_account');

  return result;
};

/**
 * This function for seeding data delete by user_id on map_user_roles table.
 * @param {Number} userId user_id from map_user_roles table.
 */
export const deleteByUserId = async (userId) => {
  const query = {
    type: 'remove',
    table: 'public.map_user_roles',
    condition: {
      user_id: userId,
    },
  };

  await seedingData(query, 'ms_ng_ecom_account');
};
