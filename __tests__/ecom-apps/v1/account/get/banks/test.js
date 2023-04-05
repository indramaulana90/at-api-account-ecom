/**
* Author      : Fauzan Novaldi Suteja (fauzan.novaldi@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This Main File for Testing on API get_banks
*/

import getDataFromPool from '@at-api-core/get-data-from-pool';
import * as er from '@at-api-core/expect-response';
import endpoint from './endpoint';
import * as data from './data';
import tc from './tc';
import schema from './schema.json';
import rs from '../../../../../../helper/responseStatusLibrary.json';
import { selectById as sdSelectBanks } from '../../../../../../data/model/v1/account/banks';

const { cookies } = getDataFromPool('ng','sinbad-app', 'Chimera-SR_081231111111');

describe(`${tc.type[1]} ${tc.describe}`, () => {
  test(`${tc.positive.getAll}`, async () => {
    const queryParam = data.payloadEmpty();
    resp = await endpoint(cookies, queryParam);
    er.expectStatus(resp, rs.statusOk);
    er.expectSchema(resp, schema);

    const objectFiltered = resp.body.data[0];
    const objectDB = (await sdSelectBanks(objectFiltered.id))[0];
    er.expectEqualDB(resp, objectFiltered, objectDB, data.compareDB);
  });

  data.loopingParameter.forEach(async (element) => {
    test(`${element.title}`, async () => {
      const payload = data.payloadEmpty();
      payload[Object.keys(element.value)] = Object.values(element.value)[0];
      resp = await endpoint(cookies, payload);
      er.expectStatus(resp, rs.statusOk);
      er.expectSchema(resp, schema);

      const objectFiltered = resp.body.data[0];
      const objectDB = (await sdSelectBanks(objectFiltered.id))[0];
      er.expectEqualDB(resp, objectFiltered, objectDB, data.compareDB);
    });
  });

  data.loopingParameterEmptyNull.forEach(async (element) => {
    test(`${element.title}`, async () => {
      const payload = data.payloadEmpty();
      payload[Object.keys(element.value)] = Object.values(element.value)[0];
      resp = await endpoint(cookies, payload);
      er.expectStatus(resp, rs.statusOk);
      er.expectSchema(resp, schema);
      er.expectSnapshot(resp);
    });
  });

  test(`${tc.positive.getWithXUserId}`, async () => {
    const queryParam = data.payloadEmpty();
    resp = await endpoint(cookies, queryParam).set('x-user-id', 1);
    er.expectStatus(resp, rs.statusOk);
    er.expectSchema(resp, schema);

    const objectFiltered = resp.body.data[0];
    const objectDB = (await sdSelectBanks(objectFiltered.id))[0];
    er.expectEqualDB(resp, objectFiltered, objectDB, data.compareDB);
  });

  test(`${tc.positive.getWithXUserId}`, async () => {
    const queryParam = data.payloadEmpty();
    resp = await endpoint(cookies, queryParam);
    er.expectStatus(resp, rs.statusOk);
    er.expectSchema(resp, schema);

    const objectFiltered = resp.body.data[0];
    const objectDB = (await sdSelectBanks(objectFiltered.id))[0];
    er.expectEqualDB(resp, objectFiltered, objectDB, data.compareDB);
  });
});

describe(`${tc.type[0]} ${tc.describe}`, () => {
  data.loopingParameterInvalid.forEach(async (element) => {
    test(`${element.title}`, async () => {
      const payload = data.payloadEmpty();
      payload[Object.keys(element.value)] = Object.values(element.value)[0];
      resp = await endpoint(cookies, payload);
      er.expectStatus(resp, rs.statusOk);
      er.expectSchema(resp, schema);
      er.expectSnapshot(resp);
    });
  });

  test(`${tc.negative.paramNotSet}`, async () => {
    const queryParam = data.payloadEmpty();
    resp = await endpoint(cookies, queryParam);
    er.expectStatus(resp, rs.statusOk);
    er.expectSchema(resp, schema);

    const objectFiltered = resp.body.data[0];
    const objectDB = (await sdSelectBanks(objectFiltered.id))[0];
    er.expectEqualDB(resp, objectFiltered, objectDB, data.compareDB);
  });
});

describe(`${tc.type[0]} ${tc.describe}`, () => {
  test(`${tc.negative.xPlatformNull}`, async () => {
    const payload = data.payloadEmpty();

    resp = await endpoint(cookies, payload).set('x-platform', null);
    er.expectStatus(resp, rs.statusUnauthorized);
    er.expectUnauthorized(resp);
    er.expectSnapshot(resp);
  });

  test(`${tc.negative.xPlatformEmpty}`, async () => {
    const payload = data.payloadEmpty();

    resp = await endpoint(cookies, payload).set('x-platform', '');
    er.expectStatus(resp, rs.statusUnauthorized);
    er.expectUnauthorized(resp);
    er.expectSnapshot(resp);
  });

  test(`${tc.negative.xPlatformInvalid}`, async () => {
    const payload = data.payloadEmpty();

    resp = await endpoint(cookies, payload).set('x-platform', 'agent-app');
    er.expectStatus(resp, rs.statusUnauthorized);
    er.expectUnauthorized(resp);
    er.expectSnapshot(resp);
  });

  test(`${tc.negative.xPlatformNotSet}`, async () => {
    const payload = data.payloadEmpty();

    resp = await endpoint(cookies, payload).unset('x-platform');
    er.expectStatus(resp, rs.statusUnauthorized);
    er.expectUnauthorized(resp);
    er.expectSnapshot(resp);
  });

  data.loopingErrorCookies.forEach(async (element) => {
    test(`${element.title}`, async () => {
      const payload = data.payloadEmpty();
      const cookiesNegative = element.value;

      resp = await endpoint(cookiesNegative, payload);
      er.expectStatus(resp, rs.statusUnauthorized);
      er.expectUnauthorized(resp);
      er.expectSnapshot(resp);
    });
  });
});
