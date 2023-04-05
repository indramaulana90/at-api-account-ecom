/**
* Author      : Fulki Firosyan (fulki.firosyan@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Data on API get_provinces_list
*/

import tc from './tc';
// import getIdsDatabase from '@at-api-core/get-ids-database';

// const getIds = getIdsDatabase(__filename, process.cwd());
// const {
//   idUsers,
// } = getIds;

export const paramDefault = () => ({
  limit: 10,
  skip: 0,
});

export const loopingError = [
  {
    title: tc.negative.limitNull,
    value: {
      limit: null,
    },
  },
  {
    title: tc.negative.limitEmpty,
    value: {
      limit: '',
    },
  },
  {
    title: tc.negative.limitError,
    value: {
      limit: 'error',
    },
  },
  {
    title: tc.negative.skipNull,
    value: {
      skip: null,
    },
  },
  {
    title: tc.negative.skipEmpty,
    value: {
      skip: '',
    },
  },
  {
    title: tc.negative.skipError,
    value: {
      skip: 'error',
    },
  },
  {
    title: tc.negative.sortError,
    value: {
      sort: 'error',
    },
  },
  {
    title: tc.negative.sortByError,
    value: {
      sortby: 'error',
    },
  },
];

export const notSetError = [
  {
    title: tc.negative.limitNotSet,
    value: 'limit',
  },
  {
    title: tc.negative.skipNotSet,
    value: 'skip',
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

export const compareDB = [
  {
    dbTypeData: 'number',
    responseKey: 'id',
    databaseField: 'id',
  },
  {
    responseKey: 'name',
    databaseField: 'name',
  },
];
