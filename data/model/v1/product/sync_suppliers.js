/**
* Author      : Aida Fastabiqa Khairati (aida.fastabiqa@sinbad.co.id)
* Modifier    :
* Domain      : product
* Description : This File for Model Seeding Data on sync_suppliers table
*/

import seedingData from '@at-api-core/seeding-data';
import getModelValues from '@at-api-core/get-model-values';
import { ObjectId } from 'mongodb';

/**
 * This function for seeding data select by id on sync_suppliers table.
 * @param {Number} id sync_suppliers id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'sync_suppliers',
    condition: { 
      _id: String(id), 
    },
    // sort: {'createdAt': -1},
  };

  const result = await seedingData(query, 'mongo', 'ms-ng-ecom-product');

  return result;
};

/**
 * This function for seeding data insert with half params on sync_suppliers table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idSyncSuppliers id from sync_suppliers table.
 * @param {String} params.atName Original name of AT Name without space maximum 11 char (e.g. StoreDtail).
 */
export const insertHalfParams = async (params) => {
  const query = {
    type: 'insert',
    table: 'public.sync_suppliers',
    values: {
      id: params.idSyncSuppliers,
      external_id: getModelValues('syncSuppliers', params).externalId,
      is_bank_account_verified: false,
      bank_id: null,
    },
  };

  await seedingData(query, 'service_product');
};

/**
 * This function for seeding data insert with half params on sync_suppliers table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idSyncSuppliers id from sync_suppliers table.
 * @param {String} params.atName Original name of AT Name without space maximum 11 char (e.g. StoreDtail).
 */
export const insertFullParams = async (params) => {
  const query = {
    type: 'insert',
    table: 'public.sync_suppliers',
    values: {
      id: params.idSyncSuppliers,
      external_id: getModelValues('syncSuppliers', params).externalId,
      name: getModelValues('syncSuppliers', params).name,
    },
  };

  await seedingData(query, 'service_product');
};

/**
 * This function for seeding data delete by id on sync_suppliers table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idSyncSuppliers id from sync_suppliers table.
 */
export const deleteById = async (params) => {
  const query = {
    type: 'remove',
    table: 'public.sync_suppliers',
    condition: {
      id: params.idSyncSuppliers,
    },
  };

  await seedingData(query, 'service_product');
};
