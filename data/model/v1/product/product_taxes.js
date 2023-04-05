/**
* Author      : Christoforus Williem Deo Lumoindong (christoforus.williem@sinbad.co.id)
* Modifier    : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Domain      : product
* Description : This File for Model Seeding Data on product_taxes table
*/

import seedingData from '@at-api-core/seeding-data';
import getModelValues from '@at-api-core/get-model-values';
import { ObjectId } from 'mongodb';

/**
 * This function for seeding data select by id on product_taxes table.
 * @param {Number} id product_taxes id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'product_taxes',
    condition: { _id: ObjectId(id) },
    limit: 5,
  };

  const result = await seedingData(query, 'mongo', 'ms-ng-ecom-product');

  return result;
};

/**
 * This function for seeding data insert with half params on product_taxes table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idProductTaxes id from product_taxes table.
 * @param {String} params.atName Original name of AT Name without space maximum 11 char (e.g. StoreDtail).
 */
export const insertHalfParams = async (params) => {
  const query = {
    type: 'insert',
    table: 'product_taxes',
    values: {
      id: params.idProductTaxes,
      external_id: getModelValues('productTaxes', params).externalId,
      is_bank_account_verified: false,
      bank_id: null,
    },
  };

  await seedingData(query, 'mongo', 'ms-ng-ecom-product');
};

/**
 * This function for seeding data insert with half params on product_taxes table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idProductTaxes id from product_taxes table.
 * @param {String} params.atName Original name of AT Name without space maximum 11 char (e.g. StoreDtail).
 */
export const insertFullParams = async (params) => {
  const query = {
    type: 'insert',
    table: 'product_taxes',
    values: {
      id: params.idProductTaxes,
      external_id: getModelValues('productTaxes', params).externalId,
      name: getModelValues('productTaxes', params).name,
    },
  };

  await seedingData(query, 'mongo', 'ms-ng-ecom-product');
};

/**
 * This function for seeding data delete by id on product_taxes table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idProductTaxes id from product_taxes table.
 */
export const deleteById = async (params) => {
  const query = {
    type: 'remove',
    table: 'product_taxes',
    condition: {
      id: params.idProductTaxes,
    },
  };

  await seedingData(query, 'mongo', 'ms-ng-ecom-product');
};
