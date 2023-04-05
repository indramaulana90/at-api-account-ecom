/**
* Author      : Fulki Firosyan (fulki.firosyan@sinbad.co.id)
* Modifier    : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Domain      : product
* Description : This File for Model Seeding Data on products table
*/

import seedingData from '@at-api-core/seeding-data';
import { ObjectId } from 'mongodb';

/**
 * This function for seeding data select by id on products table.
 * @param {String} id products id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'products',
    condition: {
      _id: ObjectId(id),
    },
    limit: 5,
  };

  const result = await seedingData(query, 'mongo', 'ms-ng-ecom-product');

  return result;
};

/**
 * This function for seeding data select by seller id on products table.
 * @param {String} id products seller id.
 * @return {ArrayOfObject} result from db.
 */
export const selectBySellerId = async (id) => {
  const query = {
    type: 'select',
    table: 'products',
    condition: {
      sellerId: String(id),
    },
    limit: 5,
  };

  const result = await seedingData(query, 'mongo', 'ms-ng-ecom-product');

  return result;
};

/**
 * This function for seeding data select by seller id on products table.
 * @param {String} id products seller id.
 * @param {String} name products name.
 * @return {ArrayOfObject} result from db.
 */
export const selectBySellerIdAndName = async (id, nameProduct) => {
  const query = {
    type: 'select',
    table: 'products',
    condition: {
      sellerId: String(id),
      name: nameProduct,
    },
    limit: 5,
  };

  const result = await seedingData(query, 'mongo', 'ms-ng-ecom-product');

  return result;
};

/**
 * This function for seeding data select by seller id on products table.
 * @param {String} id products seller id.
 * @param {String} externalCode product code from db.
 * @return {ArrayOfObject} result from db.
 */
export const selectBySellerIdAndCode = async (id, supplierCode) => {
  const query = {
    type: 'select',
    table: 'products',
    condition: {
      sellerId: String(id),
      externalCode: supplierCode,
    },
    limit: 5,
  };

  const result = await seedingData(query, 'mongo', 'ms-ng-ecom-product');

  return result;
};

/**
 * This function for seeding data delete by id on products table.
 * @param {String} idProduct id from products table.
 */
export const deleteById = async (idProduct) => {
  const query = {
    type: 'remove',
    table: 'products',
    condition: {
      _id: ObjectId(idProduct),
    },
  };

  await seedingData(query, 'mongo', 'ms-ng-ecom-product');
};

/**
 * This function for seeding data set up by id on products table.
 * @param {String} id id from products table.
 */
export const resetById = async (id) => {
  const query = {
    type: 'update',
    table: 'products',
    modifier: {
      pricingType: 'exclude-tax',
      basePrice: 1,
      productTaxId: new ObjectId('130000000000000000000000'),
      bulkPrices: [],
    },
    condition: { _id: new ObjectId(id) },
  };

  await seedingData(query, 'mongo', 'ms-ng-ecom-product');
};

/**
 * This function for seeding data set up by id on products table.
 * @param {String} id id from products table.
 */
export const resetInformation = async (id, params) => {
  const query = {
    type: 'update',
    table: 'products',
    modifier: {
      description: params.description,
      detail: params.detail,
      categoryId: params.categoryId,
      brandId: params.brandId,
      productUnitId: params.productUnitId,
      tags: params.tags,
    },
    condition: { _id: new ObjectId(id) },
  };

  await seedingData(query, 'mongo', 'ms-ng-ecom-product');
};

/**
 * This function for seeding data select by seller id on products table.
 * @param {String} id products seller id.
 * @param {String} status products status.
 * @return {ArrayOfObject} result from db.
 */
export const selectBySellerIdAndStatus = async (id, statusProduct) => {
  const query = {
    type: 'select',
    table: 'products',
    condition: {
      sellerId: String(id),
      status: statusProduct,
    },
    limit: 5,
  };

  const result = await seedingData(query, 'mongo', 'ms-ng-ecom-product');

  return result;
};

/**
 * This function for seeding data set up by id on products table.
 * @param {String} id id from products table.
 * @param {String} status status from products table.
 */
export const resetStatusById = async (id, statusProduct) => {
  const query = {
    type: 'update',
    table: 'products',
    modifier: {
      status: statusProduct,
    },
    condition: { _id: new ObjectId(id) },
  };

  await seedingData(query, 'mongo', 'ms-ng-ecom-product');
};

/**
 * This function for seeding data set up by id on products table.
 * @param {String} id id from products table.
 */
export const resetProductPackaging = async (id, params) => {
  const query = {
    type: 'update',
    table: 'products',
    modifier: {
      packagedQty: params.packagedQty,
      packagedQtyTypeId: params.packagedQtyTypeId,
      minQty: params.minQty,
      minQtyTypeId: params.minQtyTypeId,
      packagedWeight: params.packagedWeight,
      packagedWeightType: params.packagedWeightType,
      packagedDimensionLength: params.packagedDimensionLength,
      packagedDimensionWidth: params.packagedDimensionWidth,
      packagedDimensionHeight: params.packagedDimensionHeight,
    },
    condition: { _id: new ObjectId(id) },
  };

  await seedingData(query, 'mongo', 'ms-ng-ecom-product');
};

/**
 * This function for seeding data select by seller id on products table.
 * @param {String} id products seller id.
 * @param {String} status products status.
 * @return {ArrayOfObject} result from db.
 */
export const selectByProductId = async (id) => {
  const query = {
    type: 'select',
    table: 'products',
    condition: {
      _id: ObjectId(id)
    },
    limit: 5,
  };

  const result = await seedingData(query, 'mongo', 'ms-ng-ecom-product');

  return result;
};