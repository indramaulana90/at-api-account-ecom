/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This Main File for Testing on API patch_data_confirm
*/

import getDataFromPool from '@at-api-core/get-data-from-pool';
import * as er from '@at-api-core/expect-response';
import endpoint from './endpoint';
import * as data from './data';
import tc from './tc';
import schema from './schema.json';
import schemaError from '../../../../../../helper/schema/schema_error_default.json';
import rs from '../../../../../../helper/responseStatusLibrary.json';
import { setEmailById } from '../../../../../../data/model/v1/account/users';
import { resetCompletedData, selectById } from '../../../../../../data/model/v1/account/map_user_buyers';

const { cookies } = getDataFromPool('ng','sinbad-app', 'Chimera-SR_081231111111');
const userId = getDataFromPool('ng','sinbad-app', 'Chimera-SR_081231111111').user.id;
const { buyerId } = getDataFromPool('ng','sinbad-app', 'Chimera-SR_081231111111');

describe(`${tc.type[1]} ${tc.describe}`, () => {
  test(`${tc.positive.default}`, async () => {
    resp = await endpoint(cookies);
    er.expectStatus(resp, rs.statusOk);
    er.expectSchema(resp, schema);

    const objectFiltered = resp.body.data;
    const arrDB = await selectById(objectFiltered.id);
    const objectDB = (arrDB)[0];
    er.expectEqualDB(resp, objectFiltered, objectDB, data.compareDB);
    er.expectEqualDB(resp, data.dataConfirmed(userId, buyerId), objectDB, data.compareDB2);
  });
});

describe(`${tc.type[0]} ${tc.describe}`, () => {
  beforeAll(async () => {
    await setEmailById(userId, null);
    await resetCompletedData(userId);
  });
  afterAll(async () => {
    await setEmailById(userId, 'ChimeraSR@mailinator.com');
  });
  test(`${tc.negative.defaultNegative}`, async () => {
    resp = await endpoint(cookies);
    er.expectStatus(resp, rs.statusBadRequest);
    er.expectSchema(resp, schemaError);
    er.expectSnapshot(resp);
  });
});

describe(`${tc.type[0]} ${tc.describe}`, () => {
  test(`${tc.negative.xPlatformInvalid}`, async () => {
    resp = await endpoint(cookies).set('x-platform', 'error');
    er.expectStatus(resp, rs.statusUnauthorized);
    er.expectUnauthorized(resp);
  });

  test(`${tc.negative.xPlatformNotSet}`, async () => {
    resp = await endpoint(cookies).unset('x-platform');
    er.expectStatus(resp, rs.statusUnauthorized);
    er.expectUnauthorized(resp);
  });

  data.loopingErrorCookies.forEach(async (element) => {
    test(`${element.title}`, async () => {
      const cookiesNegative = element.value;

      resp = await endpoint(cookiesNegative);
      er.expectStatus(resp, rs.statusUnauthorized);
      er.expectUnauthorized(resp);
    });
  });
});
