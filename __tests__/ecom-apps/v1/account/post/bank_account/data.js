/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Data on API post_bank_account
*/

import Randomstring from 'randomstring';
import tc from './tc';

export default () => ({
  bankId: 1,
  accountName: 'ATAPI Next Gen 123',
  accountNo: '9473839822',
  branch: null,
});

export const positiveCase = [
  {
    title: tc.positive.addBank,
    value: {
      bankId: 2,
    },
  },
  {
    title: tc.positive.editBank,
    value: {
      accountName: '1',
    },
  },
  {
    title: tc.positive.accountName50char,
    value: {
      accountName: Randomstring.generate(50),
    },
  },
  {
    title: tc.positive.withBranch,
    value: {
      branch: 'Jakarta',
    },
  },
];

export const negativeCase = [
  {
    title: tc.negative.invalidBankId,
    value: {
      bankId: 'satu',
    },
  },
  {
    title: tc.negative.invalidAccountName,
    value: {
      accountName: 2,
    },
  },
  {
    title: tc.negative.accountName51char,
    value: {
      accountName: Randomstring.generate(51),
    },
  },
  {
    title: tc.negative.invalidAccountNo,
    value: {
      accountNo: 3,
    },
  },
  {
    title: tc.negative.invalidBranch,
    value: {
      branch: 123,
    },
  },
  {
    title: tc.negative.branch51char,
    value: {
      branch: Randomstring.generate(51),
    },
  },
];

export const nullValue = [
  {
    title: tc.negative.nullBankId,
    value: {
      bankId: null,
    },
  },
  {
    title: tc.negative.nullAccountName,
    value: {
      accountName: null,
    },
  },
  {
    title: tc.negative.nullAccountNo,
    value: {
      accountNo: null,
    },
  },
];

export const deleteParam = [
  {
    title: tc.negative.withoutBankId,
    value: {
      bankId: null,
    },
  },
  {
    title: tc.negative.withoutAccountName,
    value: {
      accountName: null,
    },
  },
  {
    title: tc.negative.withoutAccountNo,
    value: {
      accountNo: null,
    },
  },
];

export const compareDB = [
  {
    dbTypeData: 'number',
    responseKey: 'bankId',
    databaseField: 'bank_id',
  },
  {
    responseKey: 'accountName',
    databaseField: 'account_name',
  },
  {
    responseKey: 'accountNo',
    databaseField: 'account_no',
  },
  {
    responseKey: 'branch',
    databaseField: 'branch',
  },
];

export const loopingErrorCookies = [
  {
    title: tc.negative.invalidCookies,
    value: 'error',
  },
  {
    title: tc.negative.nullCookies,
    value: null,
  },
  {
    title: tc.negative.emptyCookies,
    value: '',
  },
];
