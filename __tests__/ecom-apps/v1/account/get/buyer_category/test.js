/**
* Author      : Immanuel Yohansen (immanuel.yohansen@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This Main File for Testing on API get_buyer_category
*/

import getDataFromPool from '@at-api-core/get-data-from-pool';
import * as er from '@at-api-core/expect-response';
import endpoint from './endpoint';
import * as data from './data';
import tc from './tc';
import schema from './schema.json';
import rs from '../../../../../../helper/responseStatusLibrary.json';
import { selectById as sdSelectId } from '../../../../../../data/model/v1/account/buyer_categories';

const { cookies } = getDataFromPool('ng','sinbad-app', 'Chimera-SR_081231111111');
const platform = 'sinbad-app';

describe(`${tc.type[1]} ${tc.describe}`, () => {
  test(`${tc.positive.default}`, async () => {
    let objectId;
    const arrName = ['Toko Grosir', 'Toko Semi Grosir', 'Toko Retail'];
    resp = await endpoint(cookies, platform);
    er.expectStatus(resp, rs.statusOk);
    er.expectSchema(resp, schema);
    for (let i = 0; i < arrName.length; i += 1) {
      objectId = resp.body.data[i].id;
      const objectFiltered = resp.body.data[i];
      // eslint-disable-next-line no-await-in-loop
      const arrDB = await sdSelectId(objectId);
      const objectDB = (arrDB)[0];
      er.expectEqualDB(resp, objectFiltered, objectDB, data.compareDB);
      er.expectEqualDB(resp, objectFiltered, objectDB, data.compareDbDate);
    }
    expect(resp.body.data[0].name).toBe('Toko Grosir');
    expect(resp.body.data[1].name).toBe('Toko Semi Grosir');
    expect(resp.body.data[2].name).toBe('Toko Retail');
  });
});
describe(`${tc.type[0]} ${tc.describe}`, () => {
  data.loopingErrorPlatform.forEach(async (element) => {
    test(`${element.title}`, async () => {
      const platformNegative = element.value;

      resp = await endpoint(cookies, platformNegative);
      er.expectStatus(resp, rs.statusUnauthorized);
      er.expectUnauthorized(resp);
    });
  });
});
describe(`${tc.type[0]} ${tc.describe}`, () => {
  data.loopingErrorCookies.forEach(async (element) => {
    test(`${element.title}`, async () => {
      const cookiesNegative = element.value;

      resp = await endpoint(cookiesNegative, platform);
      er.expectStatus(resp, rs.statusUnauthorized);
      er.expectUnauthorized(resp);
    });
  });
});
