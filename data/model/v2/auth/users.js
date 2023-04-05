/**
* Author      : Immanuel Yohansen (immanuel.yohansen@sinbad.co.id)
* Modifier    :
* Domain      : auth
* Description : This File for Model Seeding Data on users table
*/

import seedingData from '@at-api-core/seeding-data';

/**
 * This function for seeding data select by id on users table.
 * @param {Number} id users id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'public.users',
    condition: { id },
    limit: 5,
  };

  const result = await seedingData(query, 'service_auth');

  return result;
};
