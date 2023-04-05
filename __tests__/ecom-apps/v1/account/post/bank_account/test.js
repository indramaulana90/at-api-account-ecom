/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This Main File for Testing on API post_bank_account
*/

import getDataFromPool from '@at-api-core/get-data-from-pool';
import * as er from '@at-api-core/expect-response';
import { verifyBank, verifyOTP } from './endpoint';
import * as data from './data';
import tc from './tc';
import schema from './schema.json';
import schemaError from '../../../../../../helper/schema/schema_error_default.json';
import rs from '../../../../../../helper/responseStatusLibrary.json';
import { selectByUserId, deleteByUserId } from '../../../../../../data/model/v1/account/bank_accounts.js';

const pause = require('@at-api-core/pause');

const { cookies } = getDataFromPool('ng','sinbad-app', 'Chimera-SR_081231111111');
const userId = getDataFromPool('ng','sinbad-app', 'Chimera-SR_081231111111').user.id;

let body;
describe(`${tc.type[1]} ${tc.describe}`, () => {
  afterAll(async () => {
    await deleteByUserId(userId);
  });
  data.positiveCase.forEach(async (element) => {
    test(`${element.title}`, async () => {
      body = data.default();
      body[Object.keys(element.value)] = Object.values(element.value)[0];
      const verifBank = await verifyBank(cookies, body);
      er.expectStatus(verifBank, rs.statusOk);
      er.expectSchema(verifBank, schema);

      const verifOtp = await verifyOTP(cookies, '12345');
      er.expectStatus(verifOtp, rs.statusOk);
      er.expectSchema(verifOtp, schema);
      er.expectSnapshot(verifOtp);

      await pause(3500);
      const arrDB = await selectByUserId(userId);
      const objectDB = (arrDB)[0];
      er.expectEqualDB(verifOtp, body, objectDB, data.compareDB);
    });
  });
});

describe(`${tc.type[0]} ${tc.describe}`, () => {
  data.negativeCase.forEach(async (element) => {
    test(`${element.title}`, async () => {
      body = data.default();
      body[Object.keys(element.value)] = Object.values(element.value)[0];

      resp = await verifyBank(cookies, body);
      er.expectStatus(resp, rs.statusUnprocessableEntity);
      er.expectSchema(resp, schemaError);
    });
  });

  data.nullValue.forEach(async (element) => {
    test(`${element.title}`, async () => {
      body = data.default();
      body[Object.keys(element.value)] = Object.values(element.value)[0];

      resp = await verifyBank(cookies, body);
      er.expectStatus(resp, rs.statusUnprocessableEntity);
      er.expectSchema(resp, schemaError);
    });
  });

  data.deleteParam.forEach(async (element) => {
    test(`${element.title}`, async () => {
      body = data.default();
      Reflect.deleteProperty(body, Object.keys(element.value));

      resp = await verifyBank(cookies, body);
      er.expectStatus(resp, rs.statusUnprocessableEntity);
      er.expectSchema(resp, schemaError);
    });
  });

  test(tc.negative.bankIdNotExist, async () => {
    body = data.default();
    body.bankId = 172;

    resp = await verifyBank(cookies, body);
    er.expectStatus(resp, rs.statusBadRequest);
    er.expectSchema(resp, schemaError);
  });

  test(`${tc.negative.wrongOTP}`, async () => {
    body = data.default();

    const verifBank = await verifyBank(cookies, body);
    er.expectStatus(verifBank, rs.statusOk);
    er.expectSchema(verifBank, schema);

    const verifOtp = await verifyOTP(cookies, '11111');
    er.expectStatus(verifOtp, rs.statusBadRequest);
    er.expectSchema(verifOtp, schemaError);
  });

  test(`${tc.negative.xPlatformInvalid}`, async () => {
    body = data.default();

    resp = await verifyBank(cookies, body).set('x-platform', 'error');
    er.expectStatus(resp, rs.statusUnauthorized);
    er.expectUnauthorized(resp);
  });

  test(`${tc.negative.xPlatformNotSet}`, async () => {
    body = data.default();

    resp = await verifyBank(cookies, body).unset('x-platform');
    er.expectStatus(resp, rs.statusUnauthorized);
    er.expectUnauthorized(resp);
  });

  data.loopingErrorCookies.forEach(async (element) => {
    test(`${element.title}`, async () => {
      const payload = data.default();
      const cookiesNegative = element.value;

      resp = await verifyBank(cookiesNegative, payload);
      er.expectStatus(resp, rs.statusUnauthorized);
      er.expectUnauthorized(resp);
    });
  });
});
