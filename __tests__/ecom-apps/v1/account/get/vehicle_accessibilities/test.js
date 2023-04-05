/**
* Author      : Fauzan Novaldi Suteja (fauzan.novaldi@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This Main File for Testing on API get_vehicle_accessibilities
*/

import getDataFromPool from '@at-api-core/get-data-from-pool';
import * as er from '@at-api-core/expect-response';
import endpoint from './endpoint';
import * as data from './data';
import tc from './tc';
import schema from './schema.json';
import rs from '../../../../../../helper/responseStatusLibrary.json';

const { cookies } = getDataFromPool('ng','sinbad-app', 'Chimera-SR_081231111111');

describe(`${tc.type[1]} ${tc.describe}`, () => {
  test(`${tc.positive.getListVehAccess}`, async () => {
    resp = await endpoint(cookies);
    er.expectStatus(resp, rs.statusOk);
    er.expectSchema(resp, schema);
    er.expectSnapshot(resp);
  });

  test(`${tc.positive.paramKeyword}`, async () => {
    const payload = data.params('motor');
    resp = await endpoint(cookies, payload);
    const objectResponse = resp.body.data[0];
    const name = (objectResponse.name).toLowerCase();
    er.expectStatus(resp, rs.statusOk);
    er.expectSchema(resp, schema);
    er.expectContain(resp, name, payload.keyword);
  });
});

describe(`${tc.type[0]} ${tc.describe}`, () => {
  test(`${tc.negative.keywordNotFound}`, async () => {
    const payload = data.params('bus');
    resp = await endpoint(cookies, payload);
    er.expectStatus(resp, rs.statusOk);
    er.expectSchema(resp, schema);
    er.expectSnapshot(resp);
  });
});

describe(`${tc.type[0]} ${tc.describe}`, () => {
  test(`${tc.negative.xPlatformNull}`, async () => {
    resp = await endpoint(cookies).set('x-platform', null);
    er.expectStatus(resp, rs.statusUnauthorized);
    er.expectUnauthorized(resp);
    er.expectSnapshot(resp);
  });

  test(`${tc.negative.xPlatformEmpty}`, async () => {
    resp = await endpoint(cookies).unset('x-platform', '');
    er.expectStatus(resp, rs.statusUnauthorized);
    er.expectUnauthorized(resp);
    er.expectSnapshot(resp);
  });

  test(`${tc.negative.xPlatformInvalid}`, async () => {
    resp = await endpoint(cookies).set('x-platform', 'error');
    er.expectStatus(resp, rs.statusUnauthorized);
    er.expectUnauthorized(resp);
    er.expectSnapshot(resp);
  });

  test(`${tc.negative.xPlatformNotSet}`, async () => {
    resp = await endpoint(cookies).unset('x-platform');
    er.expectStatus(resp, rs.statusUnauthorized);
    er.expectUnauthorized(resp);
    er.expectSnapshot(resp);
  });

  data.loopingErrorCookies.forEach(async (element) => {
    test(`${element.title}`, async () => {
      const cookiesNegative = element.value;

      resp = await endpoint(cookiesNegative);
      er.expectStatus(resp, rs.statusUnauthorized);
      er.expectUnauthorized(resp);
      er.expectSnapshot(resp);
    });
  });
});
