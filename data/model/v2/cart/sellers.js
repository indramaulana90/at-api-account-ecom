/**
* Author      : Aria Suseno (aria.suseno@sinbad.co.id)
* Modifier    :
* Domain      : cart
* Description : This File for Model Seeding Data on sellers table
*/

import seedingData from '@at-api-core/seeding-data';

/**
 * This function for seeding data select by id on sellers table.
 * @param {Number} id sellers id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'public.sellers',
    condition: { id },
    limit: 5,
  };

  const result = await seedingData(query, 'ms_ng_ecom_account');

  return result;
};

/**
 * This function for seeding data delete by id on sellers table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idSellers id from sellers table.
 */
export const deleteById = async (params) => {
  const query = {
    type: 'remove',
    table: 'public.sellers',
    condition: {
      id: params.idSellers,
    },
  };

  await seedingData(query, 'ms_ng_ecom_account');
};
