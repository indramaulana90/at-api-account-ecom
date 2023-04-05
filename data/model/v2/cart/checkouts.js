/**
* Author      : Aria Suseno (aria.suseno@sinbad.co.id)
* Modifier    :
* Domain      : cart
* Description : This File for Model Seeding Data on checkouts table
*/

import seedingData from '@at-api-core/seeding-data';
import { ObjectId } from 'mongodb';

/**
 * This function for seeding data select by id on checkouts table.
 * @param {Number} id checkouts id.
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
    table: 'checkouts',
    condition: {
      _id: idConvert,
    },
  };

  const result = await seedingData(query, 'mongo', 'ms-ng-ecom-cart-stg');

  return result;
};

/**
 * This function for seeding data delete by id on checkouts table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idCheckouts id from checkouts table.
 */
export const deleteById = async (params) => {
  const query = {
    type: 'remove',
    table: 'checkouts',
    condition: {
      id: params.idCheckouts,
    },
  };

  await seedingData(query, 'mongo', 'ms-ng-ecom-cart-stg');
};

/**
 * This function for seeding data delete by id carts on checkouts table.
 * @param {Number} idCart id from carts table.
 */
export const deleteByCartId = async (idCart) => {
  const query = {
    type: 'remove',
    table: 'checkouts',
    condition: {
      cartId: idCart,
    },
  };

  await seedingData(query, 'mongo', 'ms-ng-ecom-cart-stg');
};
