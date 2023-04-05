/**
* Author      : Aria Suseno (aria.suseno@sinbad.co.id)
* Modifier    :
* Domain      : discount
* Description : This File for Model Seeding Data on promo_seller_flexi_combos table
*/

import seedingData from '@at-api-core/seeding-data';
// import getModelValues from '@at-api-core/get-model-values';

/**
 * This function for seeding data select by id on promo_seller_flexi_combos table.
 * @param {Number} promo_seller_id promo_seller_flexi_combos id.
 * @return {ArrayOfObject} result from db.
 */

export const selectById = async (promo_seller_id) => {
  const query = {
    type: 'select',
    table: 'public.promo_seller_flexi_combos',
    condition: { promo_seller_id },
  };

  const result = await seedingData(query, 'service_discount');

  return result;
};
