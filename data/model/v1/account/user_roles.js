/**
* Author      : yosua siagian (yosua@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Model Seeding Data on user_roles table
*/

import seedingData from '@at-api-core/seeding-data';

/**
 * This function for seeding data insert with half params on users roles table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idUsers id from users table.
 * @return {ArrayOfObject} result from db.
 */
export const insertHalfParams = async (params) => {
  const query = `INSERT INTO public.user_roles ("createdAt","updatedAt","userId","roleId") VALUES ('2021-06-25 13:40:16.695','2021-06-25 13:40:16.695','${params.idUsers}',1);`;

  await seedingData(query);
};

/**
 * This function for seeding data delete by id on user roles table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idUsers id from users table.
 */
export const deleteById = async (params) => {
  const query = `DELETE FROM public.user_roles WHERE "userId"=${params.idUsers};`;

  await seedingData(query);
};
