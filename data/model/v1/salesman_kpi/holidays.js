/**
* Author      : Aida Fastabiqa Khairati (aida.fastabiqa@sinbad.co.id)
* Modifier    :
* Domain      : salesman_kpi
* Description : This File for Model Seeding Data on holidays table
*/

import seedingData from '@at-api-core/seeding-data';

const dateCommander = require('@at-api-core/date-commander');

/**
 * This function for seeding data select by id on holidays table.
 * @param {Number} id holidays id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'public.holidays',
    condition: { id },
    limit: 5,
  };

  const result = await seedingData(query, 'service_salesman_kpi');

  return result;
};

/**
 * This function for seeding data insert with half params on holidays table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idHolidays id from holidays table.
 * @param {String} params.atName Original name of AT Name without space maximum 11 char (e.g. StoreDtail).
 * @param {?Date} params.createdAt created date of working day
 * @param {?Date} params.updatedAt update date of working day
 * @param {Number} params.sellerId id from sellers table.
 * @param {Date} params.holidayDate date for holiday dd/mm/yyyy format
 * @param {String} params.reason reason of holiday
 */
export const insertHalfParams = async (params) => {
  const query = {
    type: 'insert',
    table: 'public.holidays',
    values: {
      id: params.idHolidays,
      created_at: params.createdAt || dateCommander('now'),
      updated_at: params.updatedAt || dateCommander('now'),
      seller_id: params.sellerId,
      date: params.holidayDate,
      reason: params.reason,
    },
  };

  await seedingData(query, 'service_salesman_kpi');
};

/**
 * This function for seeding data delete by id on holidays table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idHolidays id from holidays table.
 */
export const deleteById = async (params) => {
  const query = {
    type: 'remove',
    table: 'public.holidays',
    condition: {
      id: params.idHolidays,
    },
  };

  await seedingData(query, 'service_salesman_kpi');
};
