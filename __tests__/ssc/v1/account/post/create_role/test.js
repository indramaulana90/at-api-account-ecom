/**
* Author      : Farhad (farhad@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This Main File for Testing on API post_create_role
*/

import getDataFromPool from '@at-api-core/get-data-from-pool';
import * as er from '@at-api-core/expect-response';
import endpoint from './endpoint';
import * as data from './data';
import tc from './tc';
import schema from './schema.json';
import schemaError from '../../../../../../helper/schema/schema_error_default.json';
import rs from '../../../../../../helper/responseStatusLibrary.json';
// import * as models__ from '../../../../../data/model/';
// import * as seeders__ from '../../../../../data/seeders/';

const { cookies } = getDataFromPool('ng','seller-center', 'TRS_admin.trs@sinbad.co.id');

// describe(`${tc.type[1]} ${tc.describe}`, () => {
//   test(`${tc.positive.oneCapability}`, async () => {
//     const payload = data.body();

//     resp = await endpoint(cookies, payload);
//     er.expectStatus(resp, rs.statusOk);
//     er.expectSchema(resp, schema);

//     const objectFiltered = resp.body.data[0];
//     const arrDB = await /* insert seeding data select */(objectFiltered.id);
//     const objectDB = (arrDB)[0];
//     er.expectEqualDB(resp, objectFiltered, objectDB, data.compareDB);
//   });
//   test(`${tc.positive.multipleCapabilities}`, async () => {
//     const payload = data.body();

//     resp = await endpoint(cookies, payload);
//     er.expectStatus(resp, rs.statusOk);
//     er.expectSchema(resp, schema);
//   });
// });

describe(`${tc.type[0]} ${tc.describe}`, () => {
  test(`${tc.negative.roleNameAlreadyExists}`, async () => {
    const payload = data.body();
    payload.name = 'Super Admin';

    resp = await endpoint(cookies, payload);
    er.expectStatus(resp, rs.statusBadRequest);
    er.expectSchema(resp, schemaError);
    er.expectSnapshot(resp);
  });
  test(`${tc.negative.roleNameLessThan3}`, async () => {
    const payload = data.body();
    payload.name = 'Su';

    resp = await endpoint(cookies, payload);
    er.expectStatus(resp, rs.statusUnprocessableEntity);
    er.expectSchema(resp, schemaError);
    er.expectSnapshot(resp);
  });
  test(`${tc.negative.roleNameMoreThan50}`, async () => {
    const payload = data.body();
    payload.name = 'Super Admin Super Admin Super Admin Super Admin Super Admin';

    resp = await endpoint(cookies, payload);
    er.expectStatus(resp, rs.statusUnprocessableEntity);
    er.expectSchema(resp, schemaError);
    er.expectSnapshot(resp);
  });
  test(`${tc.negative.roleNameNull}`, async () => {
    const payload = data.body();
    payload.name = null;

    resp = await endpoint(cookies, payload);
    er.expectStatus(resp, rs.statusUnprocessableEntity);
    er.expectSchema(resp, schemaError);
    er.expectSnapshot(resp);
  });
  test(`${tc.negative.roleNameEmptyString}`, async () => {
    const payload = data.body();
    payload.name = '';

    resp = await endpoint(cookies, payload);
    er.expectStatus(resp, rs.statusUnprocessableEntity);
    er.expectSchema(resp, schemaError);
    er.expectSnapshot(resp);
  });
  test(`${tc.negative.roleNameNotSet}`, async () => {
    const payload = data.body();
    Reflect.deleteProperty(payload, 'name');

    resp = await endpoint(cookies, payload);
    er.expectStatus(resp, rs.statusUnprocessableEntity);
    er.expectSchema(resp, schemaError);
    er.expectSnapshot(resp);
  });
  test(`${tc.negative.descLessThan5}`, async () => {
    const payload = data.body();
    payload.description = 'test';

    resp = await endpoint(cookies, payload);
    er.expectStatus(resp, rs.statusUnprocessableEntity);
    er.expectSchema(resp, schemaError);
    er.expectSnapshot(resp);
  });
  test(`${tc.negative.descMoreThan1000}`, async () => {
    const payload = data.body();
    payload.description = 'test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test';

    resp = await endpoint(cookies, payload);
    er.expectStatus(resp, rs.statusUnprocessableEntity);
    er.expectSchema(resp, schemaError);
    er.expectSnapshot(resp);
  });
  test(`${tc.negative.descNull}`, async () => {
    const payload = data.body();
    payload.description = null;

    resp = await endpoint(cookies, payload);
    er.expectStatus(resp, rs.statusUnprocessableEntity);
    er.expectSchema(resp, schemaError);
    er.expectSnapshot(resp);
  });
  test(`${tc.negative.descEmptyString}`, async () => {
    const payload = data.body();
    payload.description = '';

    resp = await endpoint(cookies, payload);
    er.expectStatus(resp, rs.statusUnprocessableEntity);
    er.expectSchema(resp, schemaError);
    er.expectSnapshot(resp);
  });
  test(`${tc.negative.descNotSet}`, async () => {
    const payload = data.body();
    Reflect.deleteProperty(payload, 'description');

    resp = await endpoint(cookies, payload);
    er.expectStatus(resp, rs.statusUnprocessableEntity);
    er.expectSchema(resp, schemaError);
    er.expectSnapshot(resp);
  });

  test(`${tc.negative.capabilitiesNull}`, async () => {
    const payload = data.body();
    payload.capabilities = null;

    resp = await endpoint(cookies, payload);
    er.expectStatus(resp, rs.statusUnprocessableEntity);
    er.expectSchema(resp, schemaError);
    er.expectSnapshot(resp);
  });
  test(`${tc.negative.capabilitiesEmptyString}`, async () => {
    const payload = data.body();
    payload.capabilities = '';

    resp = await endpoint(cookies, payload);
    er.expectStatus(resp, rs.statusUnprocessableEntity);
    er.expectSchema(resp, schemaError);
    er.expectSnapshot(resp);
  });
  test(`${tc.negative.capabilitiesNotSet}`, async () => {
    const payload = data.body();
    Reflect.deleteProperty(payload, 'capabilities');

    resp = await endpoint(cookies, payload);
    er.expectStatus(resp, rs.statusUnprocessableEntity);
    er.expectSchema(resp, schemaError);
    er.expectSnapshot(resp);
  });
});

describe(`${tc.type[0]} ${tc.describe}`, () => {
  test(`${tc.negative.xPlatformInvalid}`, async () => {
    const payload = data.body();

    resp = await endpoint(cookies, payload).set('x-platform', 'error');
    er.expectStatus(resp, rs.statusUnauthorized);
    er.expectUnauthorized(resp);
  });

  test(`${tc.negative.xPlatformNotSet}`, async () => {
    const payload = data.body();

    resp = await endpoint(cookies, payload).unset('x-platform');
    er.expectStatus(resp, rs.statusUnauthorized);
    er.expectUnauthorized(resp);
  });

  data.loopingErrorCookies.forEach(async (element) => {
    test(`${element.title}`, async () => {
      const payload = data.body();
      const cookiesNegative = element.value;

      resp = await endpoint(cookiesNegative, payload);
      er.expectStatus(resp, rs.statusUnauthorized);
      er.expectUnauthorized(resp);
    });
  });
});
