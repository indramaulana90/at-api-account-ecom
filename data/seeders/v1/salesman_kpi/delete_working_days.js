/**
* Author      : Aida Fastabiqa Khairati (aida.fastabiqa@sinbad.co.id)
* Modifier    :
* Domain      : salesman_kpi
* Description : This File for Seeders Data for Delete Working Day
*/

import { deleteById as deleteWorkingDays } from '../../../model/v1/salesman_kpi/working_days';

/**
 * This function for seeders on delete working day with all related table.
 *@param {Object} params object on will be inserted with:
 * @param {Number} params.idWorkingDays id from working_days table.
 * @param {Number} params.sellerId id from sellers table.
 * @param {Number} params.workingYear year for working day
 * @param {?} params.sunday days for working day set to true or false
 * @param {?} params.monday days for working day set to true or false
 * @param {?} params.tuesday days for working day set to true or false
 * @param {?} params.wednesday days for working day set to true or false
 * @param {Boolean} params.thursday days for working day set to true or false
 * @param {Boolean} params.friday days for working day set to true or false
 * @param {Boolean} params.saturday days for working day set to true or false
 */

export const delete2WorkingDay = async (params1, params2) => {
  await deleteWorkingDays(params1);
  await deleteWorkingDays(params2);
};

/**
 * This function for seeders on delete working day with all related table.
 *@param {Object} params object on will be inserted with:
 * @param {Number} params.idWorkingDays id from working_days table.
 * @param {Number} params.sellerId id from sellers table.
 * @param {Number} params.workingYear year for working day
 * @param {?} params.sunday days for working day set to true or false
 * @param {?} params.monday days for working day set to true or false
 * @param {?} params.tuesday days for working day set to true or false
 * @param {?} params.wednesday days for working day set to true or false
 * @param {Boolean} params.thursday days for working day set to true or false
 * @param {Boolean} params.friday days for working day set to true or false
 * @param {Boolean} params.saturday days for working day set to true or false
 */

export const delete3WorkingDay = async (params1, params2, params3) => {
  await deleteWorkingDays(params1);
  await deleteWorkingDays(params2);
  await deleteWorkingDays(params3);
};
