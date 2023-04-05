/* eslint-disable no-unused-vars */
/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This Main File for Testing on API patch_complete_data_buyer
*/

import getDataFromPool from '@at-api-core/get-data-from-pool';
import * as er from '@at-api-core/expect-response';
import endpoint from './endpoint';
import * as data from './data';
import tc from './tc';
import schema from './schema.json';
import schemaError from '../../../../../../helper/schema/schema_error_default.json';
import rs from '../../../../../../helper/responseStatusLibrary.json';
import { resetAccountChimera as resetAuthUsers } from '../../../../../../data/model/v1/auth/users';
import { resetAccountChimera as resetAccUsers, selectById as selectUsers } from '../../../../../../data/model/v1/account/users';
import { resetAccountChimera as resetAccBuyers, selectById as selectBuyers } from '../../../../../../data/model/v1/account/buyers';

const { cookies, buyerId } = getDataFromPool('ng','sinbad-app', 'Chimera-SR_081231111111');
const userId = getDataFromPool('ng','sinbad-app', 'Chimera-SR_081231111111').user.id;

const pause = require('@at-api-core/pause');

describe(`${tc.type[1]} ${tc.describe}`, () => {
  afterAll(async () => {
    await resetAuthUsers(userId);
    await resetAccUsers(userId);
    await resetAccBuyers(buyerId);
  });
  test(`${tc.positive.default}`, async () => {
    const payload = data.update();

    resp = await endpoint(cookies, payload);
    er.expectStatus(resp, rs.statusOk);
    er.expectSchema(resp, schema);
    await pause(1000);

    const arrDBUser = await selectUsers(userId);
    const objectDBUser = (arrDBUser)[0];
    console.log("response: ", objectDBUser);
    er.expectEqualDB(resp, payload.user, objectDBUser, data.compareDBUser);
    const arrDBBuyer = await selectBuyers(buyerId);
    const objectDBBuyer = (arrDBBuyer)[0];
    er.expectEqualDB(resp, payload.buyer, objectDBBuyer, data.compareDBBuyer);
  });
});

describe(`${tc.type[0]} ${tc.describe}`, () => {
  afterAll(async () => {
    await resetAuthUsers(userId);
    await resetAccUsers(userId);
    await resetAccBuyers(buyerId);
  });
  data.negativeCaseUser.forEach(async (element) => {
    test(element.title, async () => {
      const payload = data.update();
      (payload.user)[Object.keys(element.value)] = Object.values(element.value)[0];

      resp = await endpoint(cookies, payload);
      er.expectStatus(resp, rs.statusUnprocessableEntity);
      er.expectSchema(resp, schemaError);
    });
  });
  data.negativeCaseBuyer.forEach(async (element) => {
    test(element.title, async () => {
      const payload = data.update();
      (payload.buyer)[Object.keys(element.value)] = Object.values(element.value)[0];

      resp = await endpoint(cookies, payload);
      er.expectStatus(resp, rs.statusUnprocessableEntity);
      er.expectSchema(resp, schemaError);
    });
  });
  test(tc.negative.vehAccIdNotExist, async () => {
    const payload = data.update();
    (payload.buyer).vehicleAccessibilityId = 7;

    resp = await endpoint(cookies, payload);
    er.expectStatus(resp, rs.statusBadRequest);
    er.expectSchema(resp, schemaError);
    er.expectSnapshot(resp);
  });
});

describe(`${tc.type[0]} ${tc.describe}`, () => {
  test(`${tc.negative.xPlatformInvalid}`, async () => {
    const payload = data.update();

    resp = await endpoint(cookies, payload).set('x-platform', 'error');
    er.expectStatus(resp, rs.statusUnauthorized);
    er.expectUnauthorized(resp);
  });

  test(`${tc.negative.xPlatformNotSet}`, async () => {
    const payload = data.update();

    resp = await endpoint(cookies, payload).unset('x-platform');
    er.expectStatus(resp, rs.statusUnauthorized);
    er.expectUnauthorized(resp);
  });

  data.loopingErrorCookies.forEach(async (element) => {
    test(`${element.title}`, async () => {
      const payload = data.update();
      const cookiesNegative = element.value;

      resp = await endpoint(cookiesNegative, payload);
      er.expectStatus(resp, rs.statusUnauthorized);
      er.expectUnauthorized(resp);
    });
  });
});
