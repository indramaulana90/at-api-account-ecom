/**
* Author      : Farhad (farhad@sinbad.co.id)
* Modifier    :
* Domain      : auth
* Description : This File for Model Seeding Data on sms_logs table
*/

import dateCommander from '@at-api-core/date-commander';
import seedingData from '@at-api-core/seeding-data';

/**
 * This function for seeding data select by id on sms_logs table.
 * @param {Number} id sms_logs id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (params) => {
  const query = {
    type: 'select',
    table: 'public.sms_logs',
    condition: { id: params.idSmsLogs },
    limit: 5,
  };

  const result = await seedingData(query, 'service_auth');

  return result;
};

/**
 * This function for seeding data select by id on sms_logs table.
 * @param {Number} id sms_logs id.
 * @return {ArrayOfObject} result from db.
 */
export const selectByMobilePhone = async (phone) => {
  const query = {
    type: 'select',
    table: 'public.sms_logs',
    condition: { mobile_phone: phone },
    limit: 5,
  };

  const result = await seedingData(query, 'service_auth');

  return result;
};

/**
 * This function for seeding data insert with half params on sms_logs table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idSmsLogs id from sms_logs table.
 * @param {Number} params.counter counter from sms_logs table.
 * @param {Number} params.waitingTime waiting time from sms_logs table.
 * @param {Number} params.nextSend waiting time from sms_logs table.
 */
export const insertFullParams = async (params) => {
  const query = {
    type: 'insert',
    table: 'public.sms_logs',
    values: {
      id: params.idSmsLogs,
      mobile_phone: params.phone,
      last_send: dateCommander('yesterday'),
      counter: params.counter,
      created_at: dateCommander('yesterday'),
      updated_at: dateCommander('yesterday'),
      deleted_at: null,
      waiting_time: params.waitingTime,
      next_send_on: params.nextSend,
    },
  };

  await seedingData(query, 'service_auth');
};

/**
 * This function for seeding data delete by id on sms_logs table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idSmsLogs id from sms_logs table.
 */
export const deleteById = async (params) => {
  const query = {
    type: 'remove',
    table: 'public.sms_logs',
    condition: {
      id: params.idSmsLogs,
    },
  };

  await seedingData(query, 'service_auth');
};

/**
 * This function for seeding data delete by id on sms_logs table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idSmsLogs id from sms_logs table.
 */
export const deleteByMobilePhone = async (phone) => {
  const query = {
    type: 'remove',
    table: 'public.sms_logs',
    condition: {
      mobile_phone: phone,
    },
  };

  await seedingData(query, 'service_auth');
};
