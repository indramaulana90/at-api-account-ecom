/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This Main File for Testing on API patch_profile_buyer
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

afterAll(async () => {
  await resetAuthUsers(userId);
  await resetAccUsers(userId);
  await resetAccBuyers(buyerId);
});

describe(`${tc.type[1]} ${tc.describe}`, () => {
  afterAll(async () => {
    const arrDBUser = await selectUsers(userId);
    const objectDBUser = (arrDBUser)[0];
    er.expectEqualDB(resp, data.updateUser, objectDBUser, data.compareDBUser);

    const arrDBBuyer = await selectBuyers(buyerId);
    const objectDBBuyer = (arrDBBuyer)[0];
    er.expectEqualDB(resp, data.updateBuyer, objectDBBuyer, data.compareDBBuyer);
  });
  data.positiveCaseUser.forEach(async (element) => {
    test(element.title, async () => {
      const payload = { user: element.value };
      resp = await endpoint(cookies, payload);
      er.expectStatus(resp, rs.statusOk);
      er.expectSchema(resp, schema);
    });
  });

  data.positiveCaseBuyer.forEach(async (element) => {
    test(element.title, async () => {
      const payload = { buyer: element.value };
      resp = await endpoint(cookies, payload);
      er.expectStatus(resp, rs.statusOk);
      er.expectSchema(resp, schema);
    });
  });

  test(tc.positive.changeStatus, async () => {
    const payload = data.changeStatus;
    resp = await endpoint(cookies, payload);
    er.expectStatus(resp, rs.statusOk);
    er.expectSchema(resp, schema);
  });
});

describe(`${tc.type[0]} ${tc.describe}`, () => {
  data.negativeCaseUser.forEach(async (element) => {
    test(element.title, async () => {
      const payload = { user: element.value };
      resp = await endpoint(cookies, payload);
      er.expectStatus(resp, rs.statusUnprocessableEntity);
      er.expectSchema(resp, schemaError);
    });
  });

  data.negativeCaseUBuyer.forEach(async (element) => {
    test(element.title, async () => {
      const payload = { buyer: element.value };
      resp = await endpoint(cookies, payload);
      er.expectStatus(resp, rs.statusUnprocessableEntity);
      er.expectSchema(resp, schemaError);
    });
  });
});

describe(`${tc.type[0]} ${tc.describe}`, () => {
  test(`${tc.negative.xPlatformInvalid}`, async () => {
    const payload = data.updateBuyer;

    resp = await endpoint(cookies, payload).set('x-platform', 'error');
    er.expectStatus(resp, rs.statusUnauthorized);
    er.expectUnauthorized(resp);
  });

  test(`${tc.negative.xPlatformNotSet}`, async () => {
    const payload = data.updateUser;

    resp = await endpoint(cookies, payload).unset('x-platform');
    er.expectStatus(resp, rs.statusUnauthorized);
    er.expectUnauthorized(resp);
  });

  data.loopingErrorCookies.forEach(async (element) => {
    test(`${element.title}`, async () => {
      const payload = data.updateBuyer;
      const cookiesNegative = element.value;

      resp = await endpoint(cookiesNegative, payload);
      er.expectStatus(resp, rs.statusUnauthorized);
      er.expectUnauthorized(resp);
    });
  });
});
