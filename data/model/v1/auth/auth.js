/**
* Author      : yosua siagian (yosua@sinbad.co.id)
* Modifier    :
* Domain      : auth
* Description : This File for Model Seeding Data on auth table
*/

import seedingData from '@at-api-core/seeding-data';

/**
 * This function for seeding data select by id on auth table.
 * @param {Number} idUser auth user id.
 * @return {ArrayOfObject} result from db.
 */
export const selectByIdAuth = async (idUser) => {
  const query = {
    type: 'select',
    table: 'public.auth',
    condition: { idUser },
    limit: 5,
  };

  const result = await seedingData(query, 'service_auth');

  return result;
};

/**
 * This function for seeding data delete by id on auth table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.mobilePhoneAuth mobile phone from user table.
 */
export const deleteAuthByNumber = async (params) => {
  const query = {
    type: 'remove',
    table: 'public.auth',
    condition: {
      mobile_phone: params.mobilePhoneAuth,
    },
  };

  await seedingData(query, 'service_auth');
};
