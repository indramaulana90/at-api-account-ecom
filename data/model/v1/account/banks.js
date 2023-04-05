/**
* Author      : Fauzan Novaldi Suteja (fauzan.novaldi@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Model Seeding Data on banks table
*/

import seedingData from '@at-api-core/seeding-data';

/**
 * This function for seeding data select by id on banks table.
 * @param {Number} id banks id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'public.banks',
    condition: { id },
  };

  const result = await seedingData(query, 'ms_ng_ecom_account');

  return result;
};

/**
 * This function for seeding data delete by id on banks table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idBanks id from banks table.
 */
export const deleteById = async (params) => {
  const query = {
    type: 'remove',
    table: 'public.banks',
    condition: {
      id: params.idBanks,
    },
  };

  await seedingData(query, 'ms_ng_ecom_account');
};
