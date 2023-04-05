/**
* Author      : Farhad (farhad@sinbad.co.id)
* Modifier    :
* Domain      : product
* Description : This File for Model Seeding Data on product_units table
*/

import seedingData from '@at-api-core/seeding-data';
import { ObjectId } from 'mongodb';

/**
 * This function for seeding data select by id on product_units table.
 * @param {Number} id product_units id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'product_units',
    condition: {
      _id: ObjectId(id),
    },
    limit: 5,
  };

  const result = await seedingData(query, 'mongo', 'ms-ng-ecom-product');

  return result;
};

/**
 * This function for seeding data delete by id on product_units table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idProductUnits id from product_units table.
 */
export const deleteById = async (id) => {
  const query = {
    type: 'remove',
    table: 'product_units',
    condition: {
      _id: ObjectId(id),
    },
  };

  await seedingData(query, 'mongo', 'ms-ng-ecom-product');
};
