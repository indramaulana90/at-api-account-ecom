/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This Main File for Testing on API get_buyer_location
*/

import getDataFromPool from '@at-api-core/get-data-from-pool';
import * as er from '@at-api-core/expect-response';
import endpoint from './endpoint';
import * as data from './data';
import tc from './tc';
import schema from './schema.json';
import rs from '../../../../../../helper/responseStatusLibrary.json';
import { selectById as selectBuyer } from '../../../../../../data/model/v1/account/buyers';
import { selectById as selectLocation } from '../../../../../../data/model/v1/locations/locations';

const { cookies } = getDataFromPool('ng','sinbad-app', 'Chimera-SR_081231111111');

describe(`${tc.type[1]} ${tc.describe}`, () => {
  test(`${tc.positive.default}`, async () => {
    resp = await endpoint(cookies);
    er.expectStatus(resp, rs.statusOk);
    er.expectSchema(resp, schema);

    const objectFiltered = resp.body.data;
    const arrDBBuyer = await selectBuyer(objectFiltered.buyerId);
    const objectDBBuyer = (arrDBBuyer)[0];
    const arrDBLocation = await selectLocation(objectFiltered.locationId);
    const objectDBLocation = (arrDBLocation)[0];
    er.expectEqualDB(resp, objectFiltered, objectDBBuyer, data.compareDBBuyer);
    if (objectFiltered.locationId != null) {
      er.expectEqualDB(resp, objectFiltered, objectDBLocation, data.compareDBlocation);
    }
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
