/**
* Author      : Aida Fastabiqa Khairati (aida.fastabiqa@sinbad.co.id)
* Modifier    :
* Domain      : salesman_kpi
* Description : This File for Seeders Data for Create Holiday
*/

import { insertHalfParams as insertHolidays } from '../../../model/v1/salesman_kpi/holidays';

export const insert2holidays = async (params1, params2) => {
  await insertHolidays(params1);
  await insertHolidays(params2);
};

export const insert3holidays = async (params1, params2, params3) => {
  await insertHolidays(params1);
  await insertHolidays(params2);
  await insertHolidays(params3);
};

export const insert5holidays = async (params1, params2, params3, params4, params5) => {
  await insertHolidays(params1);
  await insertHolidays(params2);
  await insertHolidays(params3);
  await insertHolidays(params4);
  await insertHolidays(params5);
};
