/**
* Author      : Aida Fastabiqa Khairati (aida.fastabiqa@sinbad.co.id)
* Modifier    :
* Domain      : salesman_kpi
* Description : This File for Seeders Data for Create Working Day
*/

import { insertHalfParams as insertWorkingDays } from '../../../model/v1/salesman_kpi/working_days';

export const insert2WorkingDay = async (params1, params2) => {
  await insertWorkingDays(params1);
  await insertWorkingDays(params2);
};

export const insert3WorkingDay = async (params1, params2, params3) => {
  await insertWorkingDays(params1);
  await insertWorkingDays(params2);
  await insertWorkingDays(params3);
};
