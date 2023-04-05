/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
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
  };

  const result = await seedingData(query, 'service_auth');

  return result;
};

/**
 * This function for seeding data select by id on users table.
 * @param {Number} phone users mobile_phone.
 * @return {ArrayOfObject} result from db.
 */
export const selectByPhone = async (phone) => {
  const query = {
    type: 'select',
    table: 'public.users',
    condition: { mobile_phone: phone },
  };

  const result = await seedingData(query, 'service_auth');

  return result;
};

/**
 * This function for seeding data reset account by id on users table.
 * @param {Number} id users id.
 */
export const resetAccountChimera = async (id) => {
  const query = {
    type: 'update',
    table: 'public.users',
    modifier: {
      name: 'Chimera-SR',
      image_url: 'https://sinbad.co.id/image.jpg',
    },
    condition: { id },
  };

  await seedingData(query, 'service_auth');
};

/**
 * This function for seeding data select by id on users table.
 * @param {Number} id users id.
 */
export const deleteById = async (id) => {
  const query = {
    type: 'remove',
    table: 'public.users',
    condition: { id },
  };

  await seedingData(query, 'service_auth');
};
