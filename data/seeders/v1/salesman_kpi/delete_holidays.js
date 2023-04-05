/**
* Author      : Aida Fastabiqa Khairati (aida.fastabiqa@sinbad.co.id)
* Modifier    :
* Domain      : salesman_kpi
* Description : This File for Seeders Data for Delete Holiday
*/

import { deleteById as deleteHolidays } from '../../../model/v1/salesman_kpi/holidays';

export const delete2holidays = async (params1, params2) => {
  await deleteHolidays(params1);
  await deleteHolidays(params2);
};

export const delete3holidays = async (params1, params2, params3) => {
  await deleteHolidays(params1);
  await deleteHolidays(params2);
  await deleteHolidays(params3);
};

export const delete5holidays = async (params1, params2, params3, params4, params5) => {
  await deleteHolidays(params1);
  await deleteHolidays(params2);
  await deleteHolidays(params3);
  await deleteHolidays(params4);
  await deleteHolidays(params5);
};
