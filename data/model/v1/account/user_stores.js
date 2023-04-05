/**
* Author      : yosua siagian (yosua@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Model Seeding Data on user_stores table
*/

import seedingData from '@at-api-core/seeding-data';

/**
 * This function for seeding data insert with half params on user stores table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idUserStores id from user stores table.
 * @param {Number} params.idUsers id from users table.
 * @param {Number} params.idStores id from stores table.
 */
export const insertHalfParams = async (params) => {
  const query = {
    type: 'insert',
    table: 'public.user_stores',
    values: {
      id: params.idUserStores,
      user_id: params.idUsers,
      store_id: params.idStores,
      status: 'active',
      created_at: '2020-11-11T04:29:31.588Z',
      updated_at: '2020-11-11T04:29:31.588Z',
      deleted_at: null,
    },
  };

  await seedingData(query);
};

/**
 * This function for seeding data delete by id on user stores table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idUserStores user stores id.
 */
export const deleteById = async (params) => {
  const query = {
    type: 'remove',
    table: 'public.user_stores',
    condition: {
      id: params.idUserStores,
    },
  };

  await seedingData(query);
};

/**
 * This function for seeding data delete by user id on user stores table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idUsers user id.
 */
export const deleteByUserId = async (params) => {
  const query = {
    type: 'remove',
    table: 'public.user_stores',
    condition: {
      user_id: params.idUsers,
    },
  };

  await seedingData(query);
};
