/**
* Author      : Aria Suseno (aria.suseno@sinbad.co.id)
* Modifier    :
* Domain      : cart
* Description : This File for Model Seeding Data on carts table
*/

import seedingData from '@at-api-core/seeding-data';
import { ObjectId } from 'mongodb';

/**
 * This function for seeding data select by id on carts table.
 * @param {Number} id carts id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  let idConvert;
  if (typeof id === 'string') {
    idConvert = ObjectId(id);
  } else if (typeof id === 'object') {
    idConvert = id;
  }

  const query = {
    type: 'select',
    table: 'carts',
    condition: {
      _id: idConvert,
    },
  };

  const result = await seedingData(query, 'mongo', 'ms-ng-ecom-cart-stg');

  return result;
};

/**
 * This function for seeding data select by buyer id on carts table.
 * @param {Number} id carts id.
 * @return {ArrayOfObject} result from db.
 */
export const selectByBuyerId = async (id) => {
  const query = {
    type: 'select',
    table: 'carts',
    condition: { buyerId: id },
  };

  const result = await seedingData(query, 'mongo', 'ms-ng-ecom-cart-stg');

  return result;
};

/**
 * This function for seeding data delete by id on carts table.
 * @param {Number} id id from carts table.
 */
export const deleteById = async (id) => {
  let idConvert;
  if (typeof id === 'string') {
    idConvert = ObjectId(id);
  } else if (typeof id === 'object') {
    idConvert = id;
  }

  const query = {
    type: 'remove',
    table: 'carts',
    condition: {
      _id: idConvert,
    },
  };

  await seedingData(query, 'mongo', 'ms-ng-ecom-cart');
};
