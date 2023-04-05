/**
* Author      : Immanuel Yohansen (immanuel.yohansen@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Model Seeding Data on users table
*/

import seedingData from '@at-api-core/seeding-data';

/**
 * This function for seeding data select by name on users table.
 * @param {Number} name users name.
 * @return {ArrayOfObject} result from db.
 */
export const selectByName = async (name) => {
  const query = {
    type: 'select',
    table: 'public.users',
    condition: { name },
    limit: 5,
  };

  const result = await seedingData(query, 'ms_ng_ecom_account');

  return result;
};
