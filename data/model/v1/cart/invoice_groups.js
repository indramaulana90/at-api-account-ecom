/**
* Author      : Immanuel Yohansen (immanuel.yohansen@sinbad.co.id)
* Modifier    :
* Domain      : cart
* Description : This File for Model Seeding Data on invoice_groups table
*/

import seedingData from '@at-api-core/seeding-data';
import getModelValues from '@at-api-core/get-model-values';
import { ObjectId } from 'mongodb';

/**
 * This function for seeding data select by id on invoice_groups table.
 * @param {Number} id invoice_groups id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'invoice_groups',
    condition: { _id: ObjectId(id)  },
    limit: 5,
  };

  const result = await seedingData(query,'mongo', 'ms-service-cart-stg');

  return result;
};