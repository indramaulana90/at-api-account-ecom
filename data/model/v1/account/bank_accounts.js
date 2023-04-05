/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Model Seeding Data on bank_accounts table
*/

import seedingData from '@at-api-core/seeding-data';

/**
 * This function for seeding data select by id on bank_accounts table.
 * @param {Number} id bank_accounts id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'public.bank_accounts',
    condition: { id },
    limit: 5,
  };

  const result = await seedingData(query, 'ms_ng_ecom_account');

  return result;
};

/**
 * This function for seeding data select by id on bank_accounts table.
 * @param {Number} userId user_id from bank_accounts table.
 * @return {ArrayOfObject} result from db.
 */
export const selectByUserId = async (userId) => {
  const query = {
    type: 'select',
    table: 'public.bank_accounts',
    condition: { user_id: userId },
    limit: 5,
  };

  const result = await seedingData(query, 'ms_ng_ecom_account');

  return result;
};

/**
 * This function for seeding data delete by id on bank_accounts table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} userId user_id from bank_accounts table.
 * @param {Number} params.idBankAccounts id from bank_accounts table.
 */
export const deleteById = async (params) => {
  const query = {
    type: 'remove',
    table: 'public.bank_accounts',
    condition: {
      id: params.idBankAccounts,
    },
  };

  await seedingData(query, 'ms_ng_ecom_account');
};

export const deleteByUserId = async (userId) => {
  const query = {
    type: 'remove',
    table: 'public.bank_accounts',
    condition: {
      user_id: userId,
    },
  };

  await seedingData(query, 'ms_ng_ecom_account');
};
