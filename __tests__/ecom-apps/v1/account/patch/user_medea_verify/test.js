/**
* Author      : Shaqia Rahmadania Dharmawan (shaqia.rahma@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This Main File for Testing on API patch_user_medea_verify
*/

import getDataFromPool from '@at-api-core/get-data-from-pool';
import * as er from '@at-api-core/expect-response';
import endpoint from './endpoint';
import * as data from './data';
import tc from './tc';
import schema from './schema.json';
import schemaError from '../../../../../../helper/schema/schema_error_default.json';
import rs from '../../../../../../helper/responseStatusLibrary.json';
import * as selectUserMedea from '../../../../../../data/model/v1/auth/user_medea';

const { cookies } = getDataFromPool('ng','sinbad-app', 'Chimera-SR_081231111111');
const userName = getDataFromPool('ng','sinbad-app', 'Chimera-SR_081231111111').user.name;

let arrDB; let ownerName; let buyerName; let address; let idNo; let ownerPhoneNumber; let userId;

beforeAll(async () => {
  arrDB = await selectUserMedea.selectByName(userName);
  ownerName = (arrDB)[0].owner_name;
  buyerName = (arrDB)[0].buyer_name;
  address = (arrDB)[0].address;
  idNo = (arrDB)[0].id_no;
  ownerPhoneNumber = (arrDB)[0].mobile_phone;
  userId = (arrDB)[0].id;
});

describe(`${tc.type[1]} ${tc.describe}`, () => {
  test(`${tc.positive.default}`, async () => {
    const payload = data.verify(ownerName, buyerName, address, idNo, ownerPhoneNumber);

    resp = await endpoint(cookies, payload, userId);
    er.expectEqual(resp, resp.body.message, 'Success');
    er.expectStatus(resp, rs.statusOk);
    er.expectSchema(resp, schema);
  });
});

describe(`${tc.type[0]} ${tc.describe}`, () => {
  data.loopingError.forEach(async (element) => {
    test(`${element.title}`, async () => {
      const payload = element.value;

      resp = await endpoint(cookies, payload, userId);
      er.expectStatus(resp, rs.statusUnprocessableEntity);
      er.expectSchema(resp, schemaError);
      er.expectSnapshot(resp);
    });
  });
  data.loopingErrorNotSet.forEach(async (element) => {
    test(`${element.title}`, async () => {
      const payload = element.value;

      resp = await endpoint(cookies, payload, userId);
      er.expectStatus(resp, rs.statusUnprocessableEntity);
      er.expectSchema(resp, schemaError);
      er.expectSnapshot(resp);
    });
  });
});

describe(`${tc.type[0]} ${tc.describe}`, () => {
  test(`${tc.negative.xPlatformInvalid}`, async () => {
    const payload = data.verify(ownerName, buyerName, address, idNo, ownerPhoneNumber);

    resp = await endpoint(cookies, payload, userId).set('x-platform', 'error');
    er.expectStatus(resp, rs.statusUnauthorized);
    er.expectUnauthorized(resp);
  });

  test(`${tc.negative.xPlatformNotSet}`, async () => {
    const payload = data.verify(ownerName, buyerName, address, idNo, ownerPhoneNumber);

    resp = await endpoint(cookies, payload, userId).unset('x-platform');
    er.expectStatus(resp, rs.statusUnauthorized);
    er.expectUnauthorized(resp);
  });

  data.loopingErrorCookies.forEach(async (element) => {
    test(`${element.title}`, async () => {
      const payload = data.verify(ownerName, buyerName, address, idNo, ownerPhoneNumber);

      const cookiesNegative = element.value;

      resp = await endpoint(cookiesNegative, payload, userId);
      er.expectStatus(resp, rs.statusUnauthorized);
      er.expectUnauthorized(resp);
    });
  });
});
