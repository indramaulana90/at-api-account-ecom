/**
* Author      : Fulki Firosyan (fulki.firosyan@sinbad.co.id)
* Modifier    :
* Domain      : cart
* Description : This File for Model Seeding Data on orders table
*/

import seedingData from '@at-api-core/seeding-data';
import { ObjectId } from 'mongodb';

/**
 * This function for seeding data select by id on orders table.
 * @param {Number} id orders id.
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
    table: 'orders',
    condition: {
      _id: idConvert,
    },
    limit: 5,
  };

  const result = await seedingData(query, 'mongo', 'ms-ng-ecom-cart-stg');

  return result;
};

/**
 * This function for seeding data delete by id on orders table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idOrders id from orders table.
 */
export const deleteById = async (params) => {
  const query = {
    type: 'remove',
    table: 'orders',
    condition: {
      id: params.idOrders,
    },
  };

  await seedingData(query, 'mongo', 'ms-ng-ecom-cart-stg');
};

/**
 * This function for seeding data delete by cart id on orders table.
 * @param {Number} idCarts id from orders table.
 */
export const deleteByCartId = async (idCarts) => {
  const query = {
    type: 'remove',
    table: 'orders',
    condition: {
      cartId: idCarts,
    },
  };

  await seedingData(query, 'mongo', 'ms-ng-ecom-cart-stg');
};
