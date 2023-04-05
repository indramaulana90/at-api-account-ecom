/**
* Author      : Aria Suseno (aria.suseno@sinbad.co.id)
* Modifier    :
* Domain      : discount
* Description : This File for Model Seeding Data on promo_sellers table
*/

import seedingData from '@at-api-core/seeding-data';
// import getModelValues from '@at-api-core/get-model-values';

/**
 * This function for seeding data select by id on promo_sellers table.
 * @param {string} slug promo_sellers slug.
 * @return {ArrayOfObject} result from db.
 */

export const selectBySlug = async (slug) => {
  const query = {
    type: 'select',
    table: 'public.promo_sellers',
    condition: {
      slug,
    },
  };

  const result = await seedingData(query, 'service_discount');

  return result;
};
