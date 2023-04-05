/**
* Author      : Farhad (farhad@sinbad.co.id)
* Modifier    :
* Domain      : order
* Description : This File for Model Seeding Data on products table
*/

import seedingData from '@at-api-core/seeding-data';
import getModelValues from '@at-api-core/get-model-values';

const dateCommander = require('@at-api-core/date-commander');

/**
 * This function for seeding data select by id on products table.
 * @param {Number} id products id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'public.products',
    condition: { id },
    limit: 5,
  };

  const result = await seedingData(query, 'service_order');

  return result;
};

/**
 * This function for seeding data insert with half params on products table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idProducts id from products table.
 * @param {String} params.idBrands id from brands table.
 */
export const insertHalfParams = async (params) => {
  const query = {
    type: 'insert',
    table: 'public.products',
    values: {
      id: params.idProducts,
      brand_id: params.idBrands,
      name: getModelValues('products', params).name,
      product_tax_id: '110000000000000000000000',
      external_id: getModelValues('products', params).externalId,
      created_at: dateCommander('now'),
      updated_at: dateCommander('now'),
      deleted_at: null,
    },
  };

  await seedingData(query, 'service_order');
};

/**
 * This function for seeding data delete by id on products table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idProducts id from products table.
 */
export const deleteById = async (params) => {
  const query = {
    type: 'remove',
    table: 'public.products',
    condition: {
      id: params.idProducts,
    },
  };

  await seedingData(query, 'service_order');
};

export const a = {
  id: '53f790000000000000000000',
  brand_id: '440c00000000000000000000',
  name: 'LAKME PRIMER MATTE COMPACT NATURAL LIGHT',
  product_tax_id: '110000000000000000000000',
  external_id: '67400574',
  created_at: '2019-05-26T10:48:16.776Z',
  updated_at: '2021-01-29T04:27:39.465Z',
  deleted_at: null,
};
