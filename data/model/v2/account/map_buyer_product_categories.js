/**
* Author      : Immanuel Yohansen (immanuel.yohansen@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Model Seeding Data on map_buyer_product_categories table
*/

import seedingData from '@at-api-core/seeding-data';
import dateCommander from '@at-api-core/date-commander';

/**
 * This function for seeding data select by buyer_id on map_buyer_product_categories table.
 * @param {Number} buyer_id map_buyer_product_categories buyer_id.
 * @return {ArrayOfObject} result from db.
 */
export const selectByBuyerId = async (buyer_id) => {
  const query = {
    type: 'select',
    table: 'public.map_buyer_product_categories',
    condition: { buyer_id },
    limit: 5,
  };

  const result = await seedingData(query, 'ms_ng_ecom_account');

  return result;
};

/**
 * This function for seeding data insert with half params on map_buyer_product_categories table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idMapBuyerProductCategories id from map_buyer_product_categories table.
 * @param {String} params.atName Original name of AT Name without space maximum 11 char (e.g. StoreDtail).
 */
export const insertFullParams = async (params) => {
  const query = {
    type: 'insert',
    table: 'public.map_buyer_product_categories',
    values: {
      id: params.id,
      buyer_id: params.buyer_id,
      product_category_id: params.product_category_id,
      created_at: dateCommander('today'),
      updated_at: dateCommander('today'),
    },
  };

  await seedingData(query, 'ms_ng_ecom_account');
};

/**
 * This function for seeding data delete by id on map_buyer_product_categories table.
 */
export const deleteById = async (id) => {
  const query = {
    type: 'remove',
    table: 'public.map_buyer_product_categories',
    condition: {
      buyer_id: id,
    },
  };

  await seedingData(query, 'ms_ng_ecom_account');
};
