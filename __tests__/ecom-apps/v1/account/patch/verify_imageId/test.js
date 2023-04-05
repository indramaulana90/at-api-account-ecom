/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This Main File for Testing on API patch_verify_imageid
*/

import getDataFromPool from '@at-api-core/get-data-from-pool';
import * as er from '@at-api-core/expect-response';
import endpoint from './endpoint';
import * as data from './data';
import tc from './tc';
import schema from './schema.json';
import schemaError from '../../../../../../helper/schema/schema_error_default.json';
import rs from '../../../../../../helper/responseStatusLibrary.json';
import { resetAccountChimera as resetAccUsers, selectById as selectUsers } from '../../../../../data/model/v1/account/users';

const { cookies } = getDataFromPool('ng','sinbad-app', 'Chimera-SR_081231111111');
const userId = getDataFromPool('ng','sinbad-app', 'Chimera-SR_081231111111').user.id;

const pause = require('@at-api-core/pause');

afterAll(async () => {
  await resetAccUsers(userId);
});
describe(`${tc.type[1]} ${tc.describe}`, () => {
  test(`${tc.positive.default}`, async () => {
    const payload = data.updateImage('a9d787e4-a1fd-4c3e-9b4c-632cfad4212f', 'ktp');

    resp = await endpoint(cookies, payload);
    er.expectStatus(resp, rs.statusOk);
    er.expectSchema(resp, schema);

    await pause(3000);
    const arrDB = await selectUsers(userId);
    const objectDB = (arrDB)[0];
    er.expectEqualDB(resp, payload, objectDB, data.compareDB);
  });
});

describe(`${tc.type[0]} ${tc.describe}`, () => {
  test(`${tc.negative.defaultNegative}`, async () => {
    const payload = data.updateImage(11, 'ktp');

    resp = await endpoint(cookies, payload);
    er.expectStatus(resp, rs.statusUnprocessableEntity);
    er.expectSchema(resp, schemaError);
    er.expectSnapshot(resp);
  });
});

describe(`${tc.type[0]} ${tc.describe}`, () => {
  test(`${tc.negative.xPlatformInvalid}`, async () => {
    const payload = data.updateImage('error', 'ktp');

    resp = await endpoint(cookies, payload).set('x-platform', 'error');
    er.expectStatus(resp, rs.statusUnauthorized);
    er.expectUnauthorized(resp);
  });

  test(`${tc.negative.xPlatformNotSet}`, async () => {
    const payload = data.updateImage('error', 'ktp');

    resp = await endpoint(cookies, payload).unset('x-platform');
    er.expectStatus(resp, rs.statusUnauthorized);
    er.expectUnauthorized(resp);
  });

  data.loopingErrorCookies.forEach(async (element) => {
    test(`${element.title}`, async () => {
      const payload = data.updateImage('error', 'ktp');
      const cookiesNegative = element.value;

      resp = await endpoint(cookiesNegative, payload);
      er.expectStatus(resp, rs.statusUnauthorized);
      er.expectUnauthorized(resp);
    });
  });
});
