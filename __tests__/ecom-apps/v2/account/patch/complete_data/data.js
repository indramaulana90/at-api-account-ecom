/**
* Author      : Immanuel Yohansen (immanuel.yohansen@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Data on API patch_complete_data
*/

import tc from './tc';

export const insertMapBuyerCategoriesData = (id, buyer, buyerCategory) => ({
  id,
  buyer_id: buyer,
  buyer_category_id: buyerCategory,
});

export const insertMapProductCategoriesData = (id, buyer, productCategory) => ({
  id,
  buyer_id: buyer,
  product_category_id: productCategory,
});

export const payloadUpdate = (locationId, buyerCategoryId, productCategoryIds) => ({
  locationId,
  buyerCategoryId,
  productCategoryIds,
});

export const compareDBLocation = [
  {
    responseKey: 'locationId',
    databaseField: 'location_id',
  },
];

export const compareDBBuyer = [
  {
    responseKey: 'buyerCategoryId',
    databaseField: 'buyer_category_id',
  },
];

export const loopingErrorLocation = [
  {
    title: tc.negative.intLocation,
    value: 1,
  },
  {
    title: tc.negative.nullLocation,
    value: null,
  },
  {
    title: tc.negative.emptyLocation,
    value: '',
  },
];

export const loopingErrorBuyer = [
  {
    title: tc.negative.nullBuyer,
    value: null,
  },
  {
    title: tc.negative.emptyBuyer,
    value: '',
  },
];

export const loopingErrorProduct = [
  {
    title: tc.negative.intProduct,
    value: 1,
  },
  {
    title: tc.negative.nullProduct,
    value: null,
  },
  {
    title: tc.negative.emptyProduct,
    value: '',
  },
];

export const loopingErrorProductArray = [
  {
    title: tc.negative.invalidIdArray,
    value: ['1'],
  },
  {
    title: tc.negative.emptyStringArray,
    value: [''],
  },
];

export const loopingErrorCookies = [
  {
    title: tc.negative.invalidCookies,
    value: 'error',
  },
  {
    title: tc.negative.nullCookies,
    value: null,
  },
  {
    title: tc.negative.emptyCookies,
    value: '',
  },
];
