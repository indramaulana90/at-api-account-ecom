/**
* Author      : Farhad (farhad@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This Main File for Testing on API get_role_list
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
//   test(`${tc.positive.completeParams}`, async () => {
//     const payload = data.params();

//     resp = await endpoint(cookies, payload);
//     er.expectStatus(resp, rs.statusOk);
//     er.expectSchema(resp, schema);

//     const objectFiltered = resp.body.data[0];
//     const arrDB = await /* insert seeding data select */(objectFiltered.id);
//     const objectDB = (arrDB)[0];
//     er.expectEqualDB(resp, objectFiltered, objectDB, data.compareDB);
//   });
//   test(`${tc.positive.noParams}`, async () => {
//     resp = await endpoint(cookies);
//     er.expectStatus(resp, rs.statusOk);
//     er.expectSchema(resp, schema);
//   });
//   test(`${tc.positive.specificKeyword}`, async () => {
//     const payload = data.params();
//     payload.keyword = 'test';

//     resp = await endpoint(cookies, payload);
//     er.expectStatus(resp, rs.statusOk);
//     er.expectSchema(resp, schema);
//   });
//   test(`${tc.positive.specificKeywordNotFound}`, async () => {
//     const payload = data.params();
//     payload.keyword = 'abcdefghij';

//     resp = await endpoint(cookies, payload);
//     er.expectStatus(resp, rs.statusOk);
//     er.expectSchema(resp, schema);
//   });
//   test(`${tc.positive.customPage}`, async () => {
//     const payload = data.params2();
//     payload.page = 2;

//     resp = await endpoint(cookies, payload);
//     er.expectStatus(resp, rs.statusOk);
//     er.expectSchema(resp, schema);
//   });
//   test(`${tc.positive.customPerPage}`, async () => {
//     const payload = data.params2();
//     payload.perPage = 2;

//     resp = await endpoint(cookies, payload);
//     er.expectStatus(resp, rs.statusOk);
//     er.expectSchema(resp, schema);
//   });
//   test(`${tc.positive.sortCreatedAtDesc}`, async () => {
//     const payload = data.params2();
//     payload.sortKey = 'createdAt';
//     payload.sortType = 'desc';

//     resp = await endpoint(cookies, payload);
//     er.expectStatus(resp, rs.statusOk);
//     er.expectSchema(resp, schema);
//   });
//   test(`${tc.positive.sortCreatedAtAsc}`, async () => {
//     const payload = data.params2();
//     payload.sortKey = 'createdAt';
//     payload.sortType = 'asc';

//     resp = await endpoint(cookies, payload);
//     er.expectStatus(resp, rs.statusOk);
//     er.expectSchema(resp, schema);
//   });
//   test(`${tc.positive.sortUpdatedAtDesc}`, async () => {
//     const payload = data.params2();
//     payload.perPage = 2;
//     payload.sortKey = 'updatedAt';
//     payload.sortType = 'desc';

//     resp = await endpoint(cookies, payload);
//     er.expectStatus(resp, rs.statusOk);
//     er.expectSchema(resp, schema);
//   });
//   test(`${tc.positive.sortUpdatedAtAsc}`, async () => {
//     const payload = data.params2();
//     payload.sortKey = 'updatedAt';
//     payload.sortType = 'asc';

//     resp = await endpoint(cookies, payload);
//     er.expectStatus(resp, rs.statusOk);
//     er.expectSchema(resp, schema);
//   });
// });

describe(`${tc.type[0]} ${tc.describe}`, () => {
  test(`${tc.negative.keywordLessThan3}`, async () => {
    const payload = data.params();
    payload.keyword = 'te';

    resp = await endpoint(cookies, payload);
    er.expectStatus(resp, rs.statusUnprocessableEntity);
    er.expectSchema(resp, schemaError);
    er.expectSnapshot(resp);
  });
  test(`${tc.negative.sortTypeInvalid}`, async () => {
    const payload = data.params();
    payload.sortType = 'descend';

    resp = await endpoint(cookies, payload);
    er.expectStatus(resp, rs.statusUnprocessableEntity);
    er.expectSchema(resp, schemaError);
    er.expectSnapshot(resp);
  });
  test(`${tc.negative.sortKeyInvalid}`, async () => {
    const payload = data.params();
    payload.sortKey = 'name';

    resp = await endpoint(cookies, payload);
    er.expectStatus(resp, rs.statusUnprocessableEntity);
    er.expectSchema(resp, schemaError);
    er.expectSnapshot(resp);
  });
});

describe(`${tc.type[0]} ${tc.describe}`, () => {
  test(`${tc.negative.xPlatformInvalid}`, async () => {
    const payload = data.params();

    resp = await endpoint(cookies, payload).set('x-platform', 'error');
    er.expectStatus(resp, rs.statusUnauthorized);
    er.expectUnauthorized(resp);
  });

  test(`${tc.negative.xPlatformNotSet}`, async () => {
    const payload = data.params();

    resp = await endpoint(cookies, payload).unset('x-platform');
    er.expectStatus(resp, rs.statusUnauthorized);
    er.expectUnauthorized(resp);
  });

  data.loopingErrorCookies.forEach(async (element) => {
    test(`${element.title}`, async () => {
      const payload = data.params();
      const cookiesNegative = element.value;

      resp = await endpoint(cookiesNegative, payload);
      er.expectStatus(resp, rs.statusUnauthorized);
      er.expectUnauthorized(resp);
    });
  });
});
