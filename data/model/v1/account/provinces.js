/**
* Author      : Fulki Firosyan (fulki.firosyan@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Model Seeding Data on provinces table
*/

import seedingData from '@at-api-core/seeding-data';

/**
 * This function for seeding data select by id on provinces table.
 * @param {Number} id provinces id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'public.provinces',
    condition: { id },
  };

  const result = await seedingData(query, 'ms_ng_ecom_account');

  return result;
};

/**
 * This function for seeding data delete by id on provinces table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idProvinces id from provinces table.
 */
export const deleteById = async (params) => {
  const query = {
    type: 'remove',
    table: 'public.provinces',
    condition: {
      id: params.idProvinces,
    },
  };

  await seedingData(query, 'ms_ng_ecom_account');
};
