/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This Main File for Testing on API get_profile_buyer
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

const { cookies } = getDataFromPool('ng','sinbad-app', 'Chimera-SR_081231111111');
const userId = getDataFromPool('ng','sinbad-app', 'Chimera-SR_081231111111').user.id;
const { buyerId } = getDataFromPool('ng','sinbad-app', 'Chimera-SR_081231111111');

describe(`${tc.type[1]} ${tc.describe}`, () => {
  test(`${tc.positive.default}`, async () => {
    resp = await endpoint(cookies);
    er.expectStatus(resp, rs.statusOk);
    er.expectSchema(resp, schema);

    const objectFiltered = resp.body.data.ownerData.profile;
    const arrDBUser = await selectUser(userId);
    er.expectEqualDB(resp, objectFiltered, (arrDBUser)[0], data.compareDBownerData);
    const objectFiltered2 = resp.body.data.buyerData.buyerInformation.buyerAccount;
    const arrDBBuyer = await selectBuyer(buyerId);
    er.expectEqualDB(resp, objectFiltered2, (arrDBBuyer)[0], data.compareDBbuyerData);
  });
});

describe(`${tc.type[0]} ${tc.describe}`, () => {
  data.loopingErrorCookies.forEach(async (element) => {
    test(`${element.title}`, async () => {
      const cookiesNegative = element.value;
      resp = await endpoint(cookiesNegative);
      er.expectStatus(resp, rs.statusUnauthorized);
      er.expectUnauthorized(resp);
    });
  });
});
