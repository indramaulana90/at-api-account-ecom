/**
* Author      : Aida Fastabiqa Khairati (aida.fastabiqa@sinbad.co.id)
* Modifier    :
* Domain      : product
* Description : This File for Model Seeding Data on domain_event_logs table
*/

import seedingData from '@at-api-core/seeding-data';
import getModelValues from '@at-api-core/get-model-values';

/**
 * This function for seeding data select by id on domain_event_logs table.
 * @param {Number} id domain_event_logs id.
 * @return {ArrayOfObject} result from db.
 */
export const selectByExCode = async (id) => {
  const query = {
    type: 'select',
    table: 'domain_event_logs',
    condition: { 'payload.data.id': id },
    sort: {createdAt: -1},
  };

  const result = await seedingData(query, 'mongo', 'ms-ng-ecom-product');

  return result;
};

/**
 * This function for seeding data insert with half params on domain_event_logs table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idDomainEventLogs id from domain_event_logs table.
 * @param {String} params.atName Original name of AT Name without space maximum 11 char (e.g. StoreDtail).
 */
export const insertHalfParams = async (params) => {
  const query = {
    type: 'insert',
    table: 'public.domain_event_logs',
    values: {
      id: params.idDomainEventLogs,
      external_id: getModelValues('domainEventLogs', params).externalId,
      is_bank_account_verified: false,
      bank_id: null,
    },
  };

  const result = await seedingData(query, 'mongo', 'ms-ng-ecom-product');
};

/**
 * This function for seeding data insert with half params on domain_event_logs table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idDomainEventLogs id from domain_event_logs table.
 * @param {String} params.atName Original name of AT Name without space maximum 11 char (e.g. StoreDtail).
 */
export const insertFullParams = async (params) => {
  const query = {
    type: 'insert',
    table: 'public.domain_event_logs',
    values: {
      id: params.idDomainEventLogs,
      external_id: getModelValues('domainEventLogs', params).externalId,
      name: getModelValues('domainEventLogs', params).name,
    },
  };

  const result = await seedingData(query, 'mongo', 'ms-ng-ecom-product');
};

/**
 * This function for seeding data delete by id on domain_event_logs table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idDomainEventLogs id from domain_event_logs table.
 */
export const deleteById = async (id) => {
  const query = {
    type: 'remove',
    table: 'domain_event_logs',
    condition: { _id: id },
  };

  const result = await seedingData(query, 'mongo', 'ms-ng-ecom-product');
};
