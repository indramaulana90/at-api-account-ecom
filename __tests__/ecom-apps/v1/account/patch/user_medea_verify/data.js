/**
* Author      : Shaqia Rahmadania Dharmawan (shaqia.rahma@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Data on API patch_user_medea_verify
*/

import tc from './tc';

export const verify = (ownerName, buyerName, address, idNo, ownerPhoneNumber) => ({
  ownerName,
  buyerName,
  address,
  idNo,
  ownerPhoneNumber,
});

const ownerName = 'Chimera-SR';
const buyerName = 'Chimera-SR';
const address = 'JL. DINAR ASRI 1 DINAR ELOK RAYA NO. 15 METESEH';
const idNo = '3374075301999991';
const ownerPhoneNumber = '081231111111';

export const loopingError = [
  {
    title: tc.negative.ownerNameInteger,
    value: {
      ownerName: 73253,
      buyerName,
      address,
      idNo,
      ownerPhoneNumber,
    },
  },
  {
    title: tc.negative.ownerNameNull,
    value: {
      ownerName: null,
      buyerName,
      address,
      idNo,
      ownerPhoneNumber,
    },
  },
  {
    title: tc.negative.buyerNameInteger,
    value: {
      buyerName: 73253,
      ownerName,
      address,
      idNo,
      ownerPhoneNumber,
    },
  },
  {
    title: tc.negative.buyerNameNull,
    value: {
      buyerName: null,
      ownerName,
      address,
      idNo,
      ownerPhoneNumber,
    },
  },
  {
    title: tc.negative.addressInteger,
    value: {
      address: 73253,
      ownerName,
      buyerName,
      idNo,
      ownerPhoneNumber,
    },
  },
  {
    title: tc.negative.addressNull,
    value: {
      address: null,
      ownerName,
      buyerName,
      idNo,
      ownerPhoneNumber,
    },
  },
  {
    title: tc.negative.idNoInteger,
    value: {
      idNo: 73253,
      ownerName,
      buyerName,
      address,
      ownerPhoneNumber,
    },
  },
  {
    title: tc.negative.idNoNull,
    value: {
      idNo: null,
      ownerName,
      buyerName,
      address,
      ownerPhoneNumber,
    },
  },
  {
    title: tc.negative.ownerPhoneNumberNull,
    value: {
      ownerPhoneNumber: null,
      ownerName,
      buyerName,
      address,
      idNo,
    },
  },
];

export const loopingErrorNotSet = [
  {
    title: tc.negative.ownerNameNotSet,
    value: {
      buyerName,
      address,
      idNo,
      ownerPhoneNumber,
    },
  },
  {
    title: tc.negative.buyerNameNotSet,
    value: {
      ownerName,
      address,
      idNo,
      ownerPhoneNumber,
    },
  },
  {
    title: tc.negative.addressNotSet,
    value: {
      ownerName,
      buyerName,
      idNo,
      ownerPhoneNumber,
    },
  },
  {
    title: tc.negative.idNoNotSet,
    value: {
      ownerName,
      buyerName,
      address,
      ownerPhoneNumber,
    },
  },
  {
    title: tc.negative.ownerPhoneNumberNotSet,
    value: {
      ownerName,
      buyerName,
      address,
      idNo,
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
