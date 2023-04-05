/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Model Seeding Data on map_buyer_sellers table
*/

import seedingData from '@at-api-core/seeding-data';
import getModelValues from '@at-api-core/get-model-values';

/**
 * This function for seeding data select by id on map_buyer_sellers table.
 * @param {Number} id map_buyer_sellers id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'public.map_buyer_sellers',
    condition: { id },
    limit: 5,
  };

  const result = await seedingData(query, 'ms_ng_ecom_account');

  return result;
};

/**
 * This function for seeding data select by id on map_buyer_sellers table.
 * @param {Number} buyerId map_buyer_sellers id.
 * @return {ArrayOfObject} result from db.
 */
export const selectByBuyerId = async (buyerId) => {
  const query = {
    type: 'select',
    table: 'public.map_buyer_sellers',
    condition: { buyer_id: buyerId },
    limit: 5,
  };

  const result = await seedingData(query, 'ms_ng_ecom_account');

  return result;
};

/**
 * This function for seeding data insert with half params on map_buyer_sellers table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idMapBuyerSellers id from map_buyer_sellers table.
 * @param {String} params.atName Original name of AT Name without space maximum 11 char (e.g. StoreDtail).
 */
export const insertHalfParams = async (params) => {
  const query = {
    type: 'insert',
    table: 'public.map_buyer_sellers',
    values: {
      id: params.idMapBuyerSellers,
      external_id: getModelValues('mapBuyerSellers', params).externalId,
      is_bank_account_verified: false,
      bank_id: null,
    },
  };

  await seedingData(query, 'ms_ng_ecom_account');
};

/**
 * This function for seeding data insert with half params on map_buyer_sellers table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idMapBuyerSellers id from map_buyer_sellers table.
 * @param {String} params.atName Original name of AT Name without space maximum 11 char (e.g. StoreDtail).
 */
export const insertFullParams = async (params) => {
  const query = {
    type: 'insert',
    table: 'public.map_buyer_sellers',
    values: {
      id: params.idMapBuyerSellers,
      external_id: getModelValues('mapBuyerSellers', params).externalId,
      name: getModelValues('mapBuyerSellers', params).name,
    },
  };

  await seedingData(query, 'ms_ng_ecom_account');
};

/**
 * This function for seeding data delete by id on map_buyer_sellers table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idMapBuyerSellers id from map_buyer_sellers table.
 */
export const deleteById = async (params) => {
  const query = {
    type: 'remove',
    table: 'public.map_buyer_sellers',
    condition: {
      id: params.idMapBuyerSellers,
    },
  };

  await seedingData(query, 'ms_ng_ecom_account');
};
