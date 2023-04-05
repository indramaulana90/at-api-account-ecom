/**
* Author      : Immanuel Yohansen (immanuel.yohansen@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Model Seeding Data on map_user_buyers table
*/

import seedingData from '@at-api-core/seeding-data';

/**
 * This function for seeding data select by user_id on map_user_buyers table.
 * @param {Number} user_id map_user_buyers user_id.
 * @return {ArrayOfObject} result from db.
 */
export const selectByUserId = async (user_id) => {
  const query = {
    type: 'select',
    table: 'public.map_user_buyers',
    condition: { user_id },
    limit: 5,
  };

  const result = await seedingData(query, 'ms_ng_ecom_account');

  return result;
};
