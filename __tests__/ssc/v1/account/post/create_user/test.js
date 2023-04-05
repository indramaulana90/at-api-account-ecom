/**
* Author      : Farhad (farhad@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This Main File for Testing on API post_create_user
*/

import getDataFromPool from '@at-api-core/get-data-from-pool';
import * as er from '@at-api-core/expect-response';
import endpoint from './endpoint';
import endpointDeleteUser from '../../delete/delete_user/endpoint';
import * as data from './data';
import tc from './tc';
import schema from './schema.json';
import schemaError from '../../../../../../helper/schema/schema_error_default.json';
import rs from '../../../../../../helper/responseStatusLibrary.json';
// import * as models__ from '../../../../../data/model/';
// import * as seeders__ from '../../../../../data/seeders/';

const { cookies } = getDataFromPool('ng','seller-center', 'TRS_admin.trs@sinbad.co.id');

// let idUser;

// describe(`${tc.type[1]} ${tc.describe}`, () => {
//   afterEach(async () => {
//     await endpointDeleteUser(cookies, idUser);
//   });
//   test(`${tc.positive.default}`, async () => {
//     const payload = data.body();

//     resp = await endpoint(cookies, payload);
//     er.expectStatus(resp, rs.statusOk);
//     er.expectSchema(resp, schema);

//     const objectFiltered = resp.body.data[0];
//     const arrDB = await /* insert seeding data select */(objectFiltered.id);
//     const objectDB = (arrDB)[0];
//     er.expectEqualDB(resp, objectFiltered, objectDB, data.compareDB);
//   });
// });

describe(`${tc.type[0]} ${tc.describe}`, () => {
  test(`${tc.negative.nameLessThan3}`, async () => {
    const payload = data.body();
    payload.name = 'fa';

    resp = await endpoint(cookies, payload);
    er.expectStatus(resp, rs.statusUnprocessableEntity);
    er.expectSchema(resp, schemaError);
    er.expectSnapshot(resp);
  });
  test(`${tc.negative.nameMoreThan50}`, async () => {
    const payload = data.body();
    payload.name = 'test test test test test test test test test test t';

    resp = await endpoint(cookies, payload);
    er.expectStatus(resp, rs.statusUnprocessableEntity);
    er.expectSchema(resp, schemaError);
    er.expectSnapshot(resp);
  });
  test(`${tc.negative.nameNull}`, async () => {
    const payload = data.body();
    payload.name = null;

    resp = await endpoint(cookies, payload);
    er.expectStatus(resp, rs.statusUnprocessableEntity);
    er.expectSchema(resp, schemaError);
    er.expectSnapshot(resp);
  });
  test(`${tc.negative.nameEmptyString}`, async () => {
    const payload = data.body();
    payload.name = '';

    resp = await endpoint(cookies, payload);
    er.expectStatus(resp, rs.statusUnprocessableEntity);
    er.expectSchema(resp, schemaError);
    er.expectSnapshot(resp);
  });
  test(`${tc.negative.nameNotSet}`, async () => {
    const payload = data.body();
    Reflect.deleteProperty(payload, 'name');

    resp = await endpoint(cookies, payload);
    er.expectStatus(resp, rs.statusUnprocessableEntity);
    er.expectSchema(resp, schemaError);
    er.expectSnapshot(resp);
  });
  test(`${tc.negative.emailInvalid}`, async () => {
    const payload = data.body();
    payload.email = 'farhad@sinbad';

    resp = await endpoint(cookies, payload);
    er.expectStatus(resp, rs.statusUnprocessableEntity);
    er.expectSchema(resp, schemaError);
    er.expectSnapshot(resp);
  });
  test(`${tc.negative.emailUsed}`, async () => {
    const payload = data.body();
    payload.email = 'admin.trs@sinbad.co.id';

    resp = await endpoint(cookies, payload);
    er.expectStatus(resp, rs.statusBadRequest);
    er.expectSchema(resp, schemaError);
    er.expectSnapshot(resp);
  });
  test(`${tc.negative.emailNull}`, async () => {
    const payload = data.body();
    payload.email = null;

    resp = await endpoint(cookies, payload);
    er.expectStatus(resp, rs.statusUnprocessableEntity);
    er.expectSchema(resp, schemaError);
    er.expectSnapshot(resp);
  });
  test(`${tc.negative.emailEmptyString}`, async () => {
    const payload = data.body();
    payload.email = '';

    resp = await endpoint(cookies, payload);
    er.expectStatus(resp, rs.statusUnprocessableEntity);
    er.expectSchema(resp, schemaError);
    er.expectSnapshot(resp);
  });
  test(`${tc.negative.emailNotSet}`, async () => {
    const payload = data.body();
    Reflect.deleteProperty(payload, 'email');

    resp = await endpoint(cookies, payload);
    er.expectStatus(resp, rs.statusUnprocessableEntity);
    er.expectSchema(resp, schemaError);
    er.expectSnapshot(resp);
  });
  test(`${tc.negative.roleIdInvalid}`, async () => {
    const payload = data.body();
    payload.roleId = 'test';

    resp = await endpoint(cookies, payload);
    er.expectStatus(resp, rs.statusUnprocessableEntity);
    er.expectSchema(resp, schemaError);
    er.expectSnapshot(resp);
  });
  test(`${tc.negative.roleIdNull}`, async () => {
    const payload = data.body();
    payload.roleId = null;

    resp = await endpoint(cookies, payload);
    er.expectStatus(resp, rs.statusUnprocessableEntity);
    er.expectSchema(resp, schemaError);
    er.expectSnapshot(resp);
  });
  test(`${tc.negative.roleIdEmptyString}`, async () => {
    const payload = data.body();
    payload.roleId = '';

    resp = await endpoint(cookies, payload);
    er.expectStatus(resp, rs.statusUnprocessableEntity);
    er.expectSchema(resp, schemaError);
    er.expectSnapshot(resp);
  });
  test(`${tc.negative.roleIdNotSet}`, async () => {
    const payload = data.body();
    Reflect.deleteProperty(payload, 'roleId');

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
