/**
* Author      : Immanuel Yohansen (immanuel.yohansen@sinbad.co.id)
* Modifier    :
* Domain      : cart
* Description : This File for Model Seeding Data on sellers table
*/

import seedingData from '@at-api-core/seeding-data';
import getModelValues from '@at-api-core/get-model-values';

/**
 * This function for seeding data select by id on sellers table.
 * @param {Number} id sellers id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'sellers',
    condition: { id },
    limit: 5,
  };

  const result = await seedingData(query,'mongo', 'ms-service-cart-stg');

  return result;
};