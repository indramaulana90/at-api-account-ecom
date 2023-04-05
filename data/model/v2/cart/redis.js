/**
* Author      : Fulki (fulki.firosyan@sinbad.co.id)
* Modifier    :
* Domain      : redis
* Description : This File for Model Seeding Data redis on carts db
*/

import seedingData from '@at-api-core/seeding-data';

/**
 * This function for seeding data select by table.
 * @param {String} table table name.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (table) => {
  const query = {
    type: 'select',
    table,
  };

  const result = await seedingData(query, 'redis', 'buyer cart');

  return result;
};

/**
 * This function for seeding data delete by table.
 * @param {String} table table name.
 */
export const deleteById = async (table) => {
  const query = {
    type: 'remove',
    table,
  };

  await seedingData(query, 'redis', 'buyer cart');
};

/**
 * This function for seeding data insert by table.
 * @param {String} table table name.
 * @param {Object} params object on will be inserted with:
 */
export const insertCart = async (table, params) => {
  const query = {
    type: 'insert',
    table,
    values: {
      id: params.id, // this is just for demo
      name: params.name, // this is just for demo
      address: params.address, // this is just for demo
    },
  };
  await seedingData(query, 'redis', 'buyer cart');
};
