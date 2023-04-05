/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Data on API post_email_verification
*/

import tc from './tc';

export default (mail = 'testAtapi01@mailinator.com') => ({
  email: mail,
});

export const positiveCase = [
  {
    title: tc.positive.addEmail,
    value: {
      email: 'testAtapi@mail.com',
    },
  },
  {
    title: tc.positive.changeEmail,
    value: {
      email: 'testUpdate@mail.com',
    },
  },
];

export const compareDB = [
  {
    responseKey: 'email',
    databaseField: 'email',
  },
];

export const negativeCase = [
  {
    title: tc.negative.existingEmail,
    value: {
      email: 'DavyJonesSR@ATAPIqe.com',
    },
  },
  {
    title: tc.negative.nullEmail,
    value: {
      email: null,
    },
  },
];

export const negativeCase2 = [
  {
    title: tc.negative.invalidOTP,
    value: {
      code: '11111',
    },
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
