/**
* Author      : Farhad (farhad@sinbad.co.id)
* Modifier    :
* Domain      : order
* Description : This File for Model Seeding Data on brands table
*/

import seedingData from '@at-api-core/seeding-data';
import getModelValues from '@at-api-core/get-model-values';

const dateCommander = require('@at-api-core/date-commander');

/**
 * This function for seeding data select by id on brands table.
 * @param {Number} id brands id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'public.brands',
    condition: { id },
    limit: 5,
  };

  const result = await seedingData(query, 'service_order');

  return result;
};

/**
 * This function for seeding data insert with half params on brands table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idBrands id from brands table.
 * c
 */
export const insertHalfParams = async (params) => {
  const query = {
    type: 'insert',
    table: 'public.brands',
    values: {
      id: params.idBrands,
      name: getModelValues('brands', params).name,
      created_at: dateCommander('now'),
      updated_at: dateCommander('now'),
      deleted_at: null,
    },
  };

  await seedingData(query, 'service_order');
};

/**
 * This function for seeding data delete by id on brands table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idBrands id from brands table.
 */
export const deleteById = async (params) => {
  const query = {
    type: 'remove',
    table: 'public.brands',
    condition: {
      id: params.idBrands,
    },
  };

  await seedingData(query, 'service_order');
};
