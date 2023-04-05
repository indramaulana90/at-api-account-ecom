/**
* Author      : Immanuel Yohansen (immanuel.yohansen@sinbad.co.id)
* Modifier    : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Domain      : account
* Description : This Main File for Testing on API patch_complete_data
*/

import getDataFromPool from '@at-api-core/get-data-from-pool';
import * as er from '@at-api-core/expect-response';
import endpoint from './endpoint';
import * as data from './data';
import tc from './tc';
import schema from './schema.json';
import schemaError from '../../../../../../helper/schema/schema_error_default.json';
import rs from '../../../../../../helper/responseStatusLibrary.json';
import { selectById as selectBuyers, updateLocationId as updateLocation } from '../../../../../../data/model/v2/account/buyers';
import { selectByBuyerId as selectMapBuyerCategories, deleteById as deleteMapBuyerCategories } from '../../../../../../data/model/v2/account/map_buyer_categories';
import { selectByBuyerId as selectMapBuyerProductCategories, deleteById as deleteMapBuyerProduct } from '../../../../../../data/model/v2/account/map_buyer_product_categories';

const { cookies, buyerId } = getDataFromPool('ng','sinbad-app', 'Chimera-SR_081231111111');

describe(`${tc.type[1]} ${tc.describe}`, () => {
  test(`${tc.positive.default}`, async () => {
    const payload = data.payloadUpdate('213000000000000000000000', 1, ['313600000000000000000000', '310f00000000000000000000']);

    resp = await endpoint(cookies, payload);
    er.expectStatus(resp, rs.statusOk);
    er.expectSchema(resp, schema);
    const objectFiltered = resp.body.data;
    const arrDBLocation = await selectBuyers(objectFiltered.id);
    const arrDBMapBuyerCategories = await selectMapBuyerCategories(objectFiltered.id);
    const arrDBMapBuyerProductCategories = await selectMapBuyerProductCategories(objectFiltered.id);
    const objectDBLocation = (arrDBLocation)[0];
    const objectDBMapBuyerCategories = (arrDBMapBuyerCategories)[0];
    const objectDBMapBuyerProductCategories = (arrDBMapBuyerProductCategories)[0];
    const objectDBMapBuyerProductCategories1 = (arrDBMapBuyerProductCategories)[1];
    er.expectEqualDB(resp, { ...objectFiltered, ...payload }, objectDBLocation, data.compareDBLocation);
    er.expectEqualDB(resp, { ...objectFiltered, ...payload }, objectDBMapBuyerCategories, data.compareDBBuyer);
    er.expectEqual(resp, payload.productCategoryIds[0], objectDBMapBuyerProductCategories.product_category_id);
    er.expectEqual(resp, payload.productCategoryIds[1], objectDBMapBuyerProductCategories1.product_category_id);
  });
});

describe(`${tc.type[0]} ${tc.describe}`, () => {
  afterAll(async () => {
    await updateLocation(buyerId, null);
    await deleteMapBuyerCategories(buyerId);
    await deleteMapBuyerProduct(buyerId);
  });
  test(`${tc.negative.invalidBuyer}`, async () => {
    const payload = data.payloadUpdate('210000000000000000000000', 100, ['313600000000000000000000']);
    resp = await endpoint(cookies, payload);
    er.expectStatus(resp, rs.statusBadRequest);
    er.expectSchema(resp, schemaError);
    er.expectSnapshot(resp);
  });

  data.loopingErrorLocation.forEach(async (element) => {
    test(`${element.title}`, async () => {
      const negativeLocation = element.value;
      const payload = data.payloadUpdate(negativeLocation, 1, ['313600000000000000000000']);
      resp = await endpoint(cookies, payload);
      er.expectStatus(resp, rs.statusUnprocessableEntity);
    });
  });

  data.loopingErrorBuyer.forEach(async (element) => {
    test(`${element.title}`, async () => {
      const negativeBuyer = element.value;
      const payload = data.payloadUpdate('210000000000000000000000', negativeBuyer, ['313600000000000000000000']);
      resp = await endpoint(cookies, payload);
      er.expectStatus(resp, rs.statusUnprocessableEntity);
    });
  });

  data.loopingErrorProduct.forEach(async (element) => {
    test(`${element.title}`, async () => {
      const negativeProduct = element.value;
      const payload = data.payloadUpdate('210000000000000000000000', 3, negativeProduct);
      resp = await endpoint(cookies, payload);
      er.expectStatus(resp, rs.statusUnprocessableEntity);
    });
  });

  test(`${tc.negative.invalidPlatform}`, async () => {
    const payload = data.payloadUpdate('210000000000000000000000', 2, ['313800000000000000000000']);

    resp = await endpoint(cookies, payload).set('x-platform', 'agent-app');
    er.expectStatus(resp, rs.statusUnauthorized);
    er.expectUnauthorized(resp);
  });

  test(`${tc.negative.unsetPlatform}`, async () => {
    const payload = data.payloadUpdate('210000000000000000000000', 2, ['313800000000000000000000']);

    resp = await endpoint(cookies, payload).unset('x-platform');
    er.expectStatus(resp, rs.statusUnauthorized);
    er.expectUnauthorized(resp);
  });

  data.loopingErrorCookies.forEach(async (element) => {
    test(`${element.title}`, async () => {
      const payload = data.payloadUpdate('210000000000000000000000', 2, ['313800000000000000000000']);
      const cookiesNegative = element.value;

      resp = await endpoint(cookiesNegative, payload);
      er.expectStatus(resp, rs.statusUnauthorized);
      er.expectUnauthorized(resp);
    });
  });

  data.loopingErrorProductArray.forEach(async (element) => {
    test(`${element.title}`, async () => {
      const negativeProduct = element.value;
      const payload = data.payloadUpdate('210000000000000000000000', 3, negativeProduct);
      resp = await endpoint(cookies, payload);
      er.expectStatus(resp, rs.statusBadRequest);
      er.expectSnapshot(resp);
    });
  });
});
