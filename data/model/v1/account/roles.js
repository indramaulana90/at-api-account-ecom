/**
* Author      : Immanuel Yohansen (immanuel.yohansen@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Model Seeding Data on roles table
*/

import seedingData from '@at-api-core/seeding-data';

/**
 * This function for seeding data select by id on roles table.
 * @param {Number} id roles id.
 * @return {ArrayOfObject} result from db.
 */
export default async function selectById(id) {
  const query = {
    type: 'select',
    table: 'public.roles',
    condition: { id },
    limit: 5,
  };

  const result = await seedingData(query, 'service_account');

  return result;
}
