/**
* Author      : Farhad (farhad@sinbad.co.id)
* Modifier    :
* Domain      : order
* Description : This File for Model Seeding Data on urbans table
*/

import seedingData from '@at-api-core/seeding-data';
import getModelValues from '@at-api-core/get-model-values';

const dateCommander = require('@at-api-core/date-commander');

/**
 * This function for seeding data select by id on urbans table.
 * @param {Number} id urbans id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'public.urbans',
    condition: { id },
    limit: 5,
  };

  const result = await seedingData(query, 'service_order');

  return result;
};

/**
 * This function for seeding data insert with half params on urbans table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idUrbans id from urbans table.
 */
export const insertHalfParams = async (params) => {
  const query = {
    type: 'insert',
    table: 'public.urbans',
    values: {
      id: params.idUrbans,
      urban: getModelValues('urbans', params).urban,
      created_at: dateCommander('now'),
      updated_at: dateCommander('now'),
      deleted_at: null,
    },
  };

  await seedingData(query, 'service_order');
};

/**
 * This function for seeding data delete by id on urbans table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idUrbans id from urbans table.
 */
export const deleteById = async (params) => {
  const query = {
    type: 'remove',
    table: 'public.urbans',
    condition: {
      id: params.idUrbans,
    },
  };

  await seedingData(query, 'service_order');
};
