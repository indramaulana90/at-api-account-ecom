/**
* Author      : Aida Fastabiqa Khairati (aida.fastabiqa@sinbad.co.id)
* Modifier    :
* Domain      : salesman_kpi
* Description : This File for Model Seeding Data on working_days table
*/

import seedingData from '@at-api-core/seeding-data';

const dateCommander = require('@at-api-core/date-commander');

/**
 * This function for seeding data select by id on working_days table.
 * @param {Number} id working_days id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (idWorkingDays) => {
  const query = {
    type: 'select',
    table: 'public.working_days',
    condition: { id: idWorkingDays },
    limit: 5,
  };

  const result = await seedingData(query, 'service_salesman_kpi');

  return result;
};

/**
 * This function for seeding data insert with half params on working_days table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idWorkingDays id from working_days table.
 * @param {Number} params.sellerId id from sellers table.
 * @param {Number} params.workingYear year for working day
 * @param {?Boolean} params.sunday days for working day set to true or false
 * @param {?Boolean} params.monday days for working day set to true or false
 * @param {?Boolean} params.tuesday days for working day set to true or false
 * @param {?Boolean} params.wednesday days for working day set to true or false
 * @param {Boolean} params.thursday days for working day set to true or false
 * @param {Boolean} params.friday days for working day set to true or false
 * @param {Boolean} params.saturday days for working day set to true or false
 * @param {?Date} params.createdAt created date of working day
 * @param {?Date} params.updatedAt update date of working day
 */
export const insertHalfParams = async (params) => {
  const query = {
    type: 'insert',
    table: 'public.working_days',
    values: {
      id: params.idWorkingDays,
      created_at: params.createdAt || dateCommander('now'),
      updated_at: params.updatedAt || dateCommander('now'),
      seller_id: params.sellerId,
      year: params.workingYear,
      sunday: params.sunday || false,
      monday: params.monday || true,
      tuesday: params.tuesday || true,
      wednesday: params.wednesday || true,
      thursday: params.thursday,
      friday: params.friday,
      saturday: params.saturday,
    },
  };

  await seedingData(query, 'service_salesman_kpi');
};

/**
 * This function for seeding data delete by id on working_days table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idWorkingDays id from working_days table.
 */
export const deleteById = async (params) => {
  const query = {
    type: 'remove',
    table: 'public.working_days',
    condition: {
      id: params.idWorkingDays,
    },
  };

  await seedingData(query, 'service_salesman_kpi');
};
