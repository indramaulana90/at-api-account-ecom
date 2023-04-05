/**
* Author      : Immanuel Yohansen (immanuel.yohansen@sinbad.co.id)
* Modifier    :
* Domain      : locations
* Description : This File for Model Seeding Data on locations table
*/

import seedingData from '@at-api-core/seeding-data';
import { ObjectId } from 'mongodb';

/**
 * This function for seeding data select by id on locations table.
 * @param {Number} id locations id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'locations',
    condition: { _id: ObjectId(id) },
    limit: 5,
  };

  const result = await seedingData(query, 'mongo', 'ms-ng-ecom-location');

  return result;
};
