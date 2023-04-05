/**
* Author      : Immanuel Yohansen (immanuel.yohansen@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Model Seeding Data on buyer_categories table
*/

import seedingData from '@at-api-core/seeding-data';

/**
 * This function for seeding data select by id on buyer_categories table.
 * @param {Number} id buyer_categories id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'public.buyer_categories',
    condition: { id },
    limit: 5,
  };

  const result = await seedingData(query, 'ms_ng_ecom_account');

  return result;
};
