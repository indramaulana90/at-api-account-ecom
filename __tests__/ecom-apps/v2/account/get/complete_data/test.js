/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This Main File for Testing on API get_complete_data
*/

import getDataFromPool from '@at-api-core/get-data-from-pool';
import * as er from '@at-api-core/expect-response';
import endpoint from './endpoint';
import * as data from './data';
import tc from './tc';
import schema from './schema.json';
import rs from '../../../../../../helper/responseStatusLibrary.json';
import { selectById as selectUser } from '../../../../../../data/model/v1/account/users';
import { selectById as selectBuyer } from '../../../../../../data/model/v1/account/buyers';
import { selectByUserId as selectUserBuyer } from '../../../../../../data/model/v1/account/map_user_buyers';

const { cookies } = getDataFromPool('ng','sinbad-app', 'Chimera-SR_081231111111');
const userId = getDataFromPool('ng','sinbad-app', 'Chimera-SR_081231111111').user.id;
const { buyerId } = getDataFromPool('ng','sinbad-app', 'Chimera-SR_081231111111');

describe(`${tc.type[1]} ${tc.describe}`, () => {
  test(`${tc.positive.default}`, async () => {
    resp = await endpoint(cookies);

    er.expectStatus(resp, rs.statusOk);
    er.expectSchema(resp, schema);

    const objectFiltered = resp.body.data;
    const { userData, buyerData } = resp.body.data;
    const dbUsers = (await selectUser(userId))[0];
    const dbBuyers = (await selectBuyer(buyerId))[0];
    const dbUserBuyer = (await selectUserBuyer(userId))[0];

    er.expectEqualDB(resp, userData, dbUsers, data.compareDbUsers);
    er.expectEqualDB(resp, buyerData, dbBuyers, data.compareDbBuyers);
    er.expectEqualDB(resp, buyerData.vehicleAccessibility, dbBuyers, data.compareDbBuyers2);
    er.expectEqualDB(resp, objectFiltered, dbUserBuyer, data.compareDbUserBuyer);
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
