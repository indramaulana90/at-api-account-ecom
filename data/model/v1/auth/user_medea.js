/**
* Author      : Farhad (farhad@sinbad.co.id)
* Modifier    :
* Domain      : auth
* Description : This File for Model Seeding Data on user_medea table
*/

import seedingData from '@at-api-core/seeding-data';
import getModelValues from '@at-api-core/get-model-values';

/**
 * This function for seeding data select by id on user_medea table.
 * @param {Number} id user_medea id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'public.user_medea',
    condition: { id },
    limit: 5,
  };

  const result = await seedingData(query, 'service_auth');

  return result;
};

/**
 * This function for seeding data select by id on user_medea table.
 * @param {Number} id user_medea id.
 * @return {ArrayOfObject} result from db.
 */
export const selectByMobilePhone = async (id) => {
  const query = {
    type: 'select',
    table: 'public.user_medea',
    condition: { mobile_phone: id },
  };

  const result = await seedingData(query, 'service_auth');

  return result;
};

/**
 * This function for seeding data select by id on user_medea table.
 * @param {Number} ownerName user_medea name.
 * @return {ArrayOfObject} result from db.
 */
export const selectByName = async (ownerName) => {
  const query = {
    type: 'select',
    table: 'public.user_medea',
    condition: { owner_name: ownerName },
    limit: 5,
  };

  const result = await seedingData(query, 'service_auth');

  return result;
};

/**
 * This function for seeding data delete by id on user_medea table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idUserMedea id from user_medea table.
 */
export const deleteById = async (params) => {
  const query = {
    type: 'remove',
    table: 'public.user_medea',
    condition: {
      id: params.idUserMedea,
    },
  };

  await seedingData(query, 'service_auth');
};
