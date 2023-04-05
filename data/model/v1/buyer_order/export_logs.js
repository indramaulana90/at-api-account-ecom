/**
* Author      : Farhad (farhad@sinbad.co.id)
* Modifier    :
* Domain      : buyer_order
* Description : This File for Model Seeding Data on export_logs table
*/

import seedingData from '@at-api-core/seeding-data';
import getModelValues from '@at-api-core/get-model-values';

/**
 * This function for seeding data select by id on export_logs table.
 * @param {Number} id export_logs id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'public.export_logs',
    condition: { id },
    limit: 5,
  };

  const result = await seedingData(query, 'ms_ng_common');

  return result;
};

/**
 * This function for seeding data insert with half params on export_logs table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idExportLogs id from export_logs table.
 * @param {String} params.atName Original name of AT Name without space maximum 11 char (e.g. StoreDtail).
 */
export const insertHalfParams = async (params) => {
  const query = {
    type: 'insert',
    table: 'public.export_logs',
    values: {
      id: params.idExportLogs,
      external_id: getModelValues('exportLogs', params).externalId,
      is_bank_account_verified: false,
      bank_id: null,
    },
  };

  await seedingData(query, 'service_buyer_order');
};

/**
 * This function for seeding data insert with half params on export_logs table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idExportLogs id from export_logs table.
 * @param {String} params.atName Original name of AT Name without space maximum 11 char (e.g. StoreDtail).
 */
export const insertFullParams = async (params) => {
  const query = {
    type: 'insert',
    table: 'public.export_logs',
    values: {
      id: params.idExportLogs,
      external_id: getModelValues('exportLogs', params).externalId,
      name: getModelValues('exportLogs', params).name,
    },
  };

  await seedingData(query, 'service_buyer_order');
};

/**
 * This function for seeding data delete by id on export_logs table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idExportLogs id from export_logs table.
 */
export const deleteById = async (params) => {
  const query = {
    type: 'remove',
    table: 'public.export_logs',
    condition: {
      id: params.idExportLogs,
    },
  };

  await seedingData(query, 'service_buyer_order');
};
