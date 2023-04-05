/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This Main File for Testing on API post_email_verification
*/

import getDataFromPool from '@at-api-core/get-data-from-pool';
import * as er from '@at-api-core/expect-response';
import { verifyEmail, verifyOTP } from './endpoint';
import * as data from './data';
import tc from './tc';
import schema from './schema.json';
import schemaError from '../../../../../../helper/schema/schema_error_default.json';
import rs from '../../../../../../helper/responseStatusLibrary.json';
import { setEmailById, selectById, unverifiedEmail } from '../../../../../../data/model/v1/account/users.js';

const pause = require('@at-api-core/pause');

const { cookies } = getDataFromPool('ng','sinbad-app', 'Chimera-SR_081231111111');
const userId = getDataFromPool('ng','sinbad-app', 'Chimera-SR_081231111111').user.id;

let body;

describe(`${tc.type[1]} ${tc.describe}`, () => {
  beforeAll(async () => {
    await setEmailById(userId, null);
    await unverifiedEmail(userId);
  });
  afterAll(async () => {
    await setEmailById(userId, 'ChimeraSR@ATAPIqe.com');
  });
  data.positiveCase.forEach(async (element) => {
    test(`${element.title}`, async () => {
      body = element.value;
      const verifEmail = await verifyEmail(cookies, body);
      er.expectStatus(verifEmail, rs.statusOk);
      er.expectSchema(verifEmail, schema);

      const otp = { code: '12345' };
      body = { ...body, ...otp };
      const verifOtp = await verifyOTP(cookies, body);
      er.expectStatus(verifOtp, rs.statusOk);
      er.expectSchema(verifOtp, schema);
      er.expectSnapshot(verifOtp);

      const arrDB = await selectById(userId);
      const objectDB = (arrDB)[0];
      er.expectEqualDB(verifOtp, body, objectDB, data.compareDB);
      await pause(4000);
    });
  });

  test(tc.positive.verifyEmail, async () => {
    await setEmailById(userId, data.default().email);
    await unverifiedEmail(userId);

    body = data.default();
    const verifEmail = await verifyEmail(cookies, body);
    er.expectStatus(verifEmail, rs.statusOk);
    er.expectSchema(verifEmail, schema);

    const otp = { code: '12345' };
    body = { ...body, ...otp };
    const verifOtp = await verifyOTP(cookies, body);
    er.expectStatus(verifOtp, rs.statusOk);
    er.expectSchema(verifOtp, schema);
    er.expectSnapshot(verifOtp);

    const arrDB = await selectById(userId);
    const objectDB = (arrDB)[0];
    er.expectEqualDB(verifOtp, body, objectDB, data.compareDB);
    await pause(3500);
  });
});

describe(`${tc.type[0]} ${tc.describe}`, () => {
  data.negativeCase.forEach(async (element) => {
    test(`${element.title}`, async () => {
      body = data.default();
      body[Object.keys(element.value)] = Object.values(element.value)[0];

      resp = await verifyEmail(cookies, body);
      if (resp.status === 422) {
        er.expectStatus(resp, rs.statusUnprocessableEntity);
        er.expectSchema(resp, schemaError);
      } else {
        er.expectStatus(resp, rs.statusBadRequest);
        er.expectSchema(resp, schemaError);
      }
    });
  });

  test(tc.negative.invalidOTP, async () => {
    body = data.default('testATAPI211@mail.com');
    const verifEmail = await verifyEmail(cookies, body);
    er.expectStatus(verifEmail, rs.statusOk);
    er.expectSchema(verifEmail, schema);

    const otp = { code: '11111' };
    body = { ...body, ...otp };
    const verifOtp = await verifyOTP(cookies, body);
    er.expectStatus(verifOtp, rs.statusBadRequest);
    er.expectSchema(verifOtp, schemaError);
  });

  test(tc.negative.nullOTP, async () => {
    body = data.default('testATAPI211@mail.com');
    const verifEmail = await verifyEmail(cookies, body);
    er.expectStatus(verifEmail, rs.statusOk);
    er.expectSchema(verifEmail, schema);

    const otp = { code: null };
    body = { ...body, ...otp };
    const verifOtp = await verifyOTP(cookies, body);
    er.expectStatus(verifOtp, rs.statusUnprocessableEntity);
    er.expectSchema(verifOtp, schemaError);
    er.expectSnapshot(verifOtp);
  });

  test(tc.negative.invalidEmail, async () => {
    body = data.default('emailInvalid');
    const verifEmail = await verifyEmail(cookies, body);
    er.expectStatus(verifEmail, rs.statusUnprocessableEntity);
  });

  test(`${tc.negative.xPlatformInvalid}`, async () => {
    body = data.default();

    resp = await verifyEmail(cookies, body).set('x-platform', 'error');
    er.expectStatus(resp, rs.statusUnauthorized);
    er.expectUnauthorized(resp);
  });

  test(`${tc.negative.xPlatformNotSet}`, async () => {
    body = data.default();

    resp = await verifyEmail(cookies, body).unset('x-platform');
    er.expectStatus(resp, rs.statusUnauthorized);
    er.expectUnauthorized(resp);
  });

  data.loopingErrorCookies.forEach(async (element) => {
    test(`${element.title}`, async () => {
      const payload = data.default();
      const cookiesNegative = element.value;

      resp = await verifyEmail(cookiesNegative, payload);
      er.expectStatus(resp, rs.statusUnauthorized);
      er.expectUnauthorized(resp);
    });
  });
});
