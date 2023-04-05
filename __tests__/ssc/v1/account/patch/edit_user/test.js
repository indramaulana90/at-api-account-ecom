/**
* Author      : Farhad (farhad@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This Main File for Testing on API patch_edit_user
*/

import getDataFromPool from '@at-api-core/get-data-from-pool';
import * as er from '@at-api-core/expect-response';
import endpoint from './endpoint';
import * as data from './data';
import tc from './tc';
import schema from './schema.json';
import schemaError from '../../../../../../helper/schema/schema_error_default.json';
import schemaError2 from './schema_error.json';
import rs from '../../../../../../helper/responseStatusLibrary.json';
// import * as models__ from '../../../../../data/model/';
// import * as seeders__ from '../../../../../data/seeders/';

const { cookies } = getDataFromPool('ng','seller-center', 'TRS_admin.trs@sinbad.co.id');

// describe(`${tc.type[1]} ${tc.describe}`, () => {
//   test(`${tc.positive.default}`, async () => {
//     const id = data.idUser;
//     const payload = data.body();

//     resp = await endpoint(cookies, payload, id);
//     er.expectStatus(resp, rs.statusOk);
//     er.expectSchema(resp, schema);

//     const objectFiltered = resp.body.data[0];
//     const arrDB = await /* insert seeding data select */(objectFiltered.id);
//     const objectDB = (arrDB)[0];
//     er.expectEqualDB(resp, objectFiltered, objectDB, data.compareDB);
//   });
// });

describe(`${tc.type[0]} ${tc.describe}`, () => {
  test(`${tc.negative.roleIdInvalid}`, async () => {
    const id = data.idUser;
    const payload = data.body();
    payload.roleId = 'Sinbad Admin';

    resp = await endpoint(cookies, payload, id);
    er.expectStatus(resp, rs.statusUnprocessableEntity);
    er.expectSchema(resp, schemaError);
    er.expectSnapshot(resp);
  });
  test(`${tc.negative.roleIdEmptyString}`, async () => {
    const id = data.idUser;
    const payload = data.body();
    payload.roleId = '';

    resp = await endpoint(cookies, payload, id);
    er.expectStatus(resp, rs.statusUnprocessableEntity);
    er.expectSchema(resp, schemaError);
    er.expectSnapshot(resp);
  });
  test(`${tc.negative.roleIdNull}`, async () => {
    const id = data.idUser;
    const payload = data.body();
    payload.roleId = '';

    resp = await endpoint(cookies, payload, id);
    er.expectStatus(resp, rs.statusUnprocessableEntity);
    er.expectSchema(resp, schemaError);
    er.expectSnapshot(resp);
  });
  test(`${tc.negative.roleIdNotSet}`, async () => {
    const id = data.idUser;
    const payload = data.body();
    Reflect.deleteProperty(payload, 'roleId');

    resp = await endpoint(cookies, payload, id);
    er.expectStatus(resp, rs.statusUnprocessableEntity);
    er.expectSchema(resp, schemaError);
    er.expectSnapshot(resp);
  });
  test(`${tc.negative.idUserInvalid}`, async () => {
    let id = data.idUser;
    const payload = data.body();
    id = 'SN-1234';

    resp = await endpoint(cookies, payload, id);
    er.expectStatus(resp, rs.statusBadRequest);
    er.expectSchema(resp, schemaError);
    er.expectSnapshot(resp);
  });
  test(`${tc.negative.idUserNotFound}`, async () => {
    let id = data.idUser;
    const payload = data.body();
    id = 123456;

    resp = await endpoint(cookies, payload, id);
    er.expectStatus(resp, rs.statusNotFound);
    er.expectSchema(resp, schemaError);
    er.expectSnapshot(resp);
  });
  test(`${tc.negative.idUserEmptyString}`, async () => {
    let id = data.idUser;
    const payload = data.body();
    id = '';

    resp = await endpoint(cookies, payload, id);
    er.expectStatus(resp, rs.statusNotFound);
    er.expectSchema(resp, schemaError2);
    er.expectSnapshot(resp);
  });
  test(`${tc.negative.idUserNull}`, async () => {
    let id = data.idUser;
    const payload = data.body();
    id = null;

    resp = await endpoint(cookies, payload, id);
    er.expectStatus(resp, rs.statusBadRequest);
    er.expectSchema(resp, schemaError);
    er.expectSnapshot(resp);
  });
});

describe(`${tc.type[0]} ${tc.describe}`, () => {
  test(`${tc.negative.xPlatformInvalid}`, async () => {
    const id = data.idUser;
    const payload = data.body();

    resp = await endpoint(cookies, payload, id).set('x-platform', 'error');
    er.expectStatus(resp, rs.statusUnauthorized);
    er.expectUnauthorized(resp);
  });

  test(`${tc.negative.xPlatformNotSet}`, async () => {
    const id = data.idUser;
    const payload = data.body();

    resp = await endpoint(cookies, payload, id).unset('x-platform');
    er.expectStatus(resp, rs.statusUnauthorized);
    er.expectUnauthorized(resp);
  });

  data.loopingErrorCookies.forEach(async (element) => {
    test(`${element.title}`, async () => {
      const id = data.idUser;
      const payload = data.body();
      const cookiesNegative = element.value;

      resp = await endpoint(cookiesNegative, payload, id);
      er.expectStatus(resp, rs.statusUnauthorized);
      er.expectUnauthorized(resp);
    });
  });
});
