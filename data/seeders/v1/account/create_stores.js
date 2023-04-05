/**
* Author      : yosua siagian (yosua@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Seeders Data for Create Store
*/

import { insertHalfParams as insertStores } from '../../../model/v1/account/stores';
import { insertHalfParams as insertUserRoles } from '../../../model/v1/account/user_roles';
import { insertHalfParams as insertUsers } from '../../../model/v1/account/users';
import { insertHalfParams as insertUserStores } from '../../../model/v1/account/user_stores';
import { insertHalfParams as insertSupplierStores } from '../../../model/v1/account/supplier_stores';

/**
 * This function for seeders on create store.
 * @param {Object} params object will be inserted with:
 * @param {Number} params.idUsers id from users table.
 * @param {String} params.atName Original name of AT Name without space maximum 11 char (e.g. StoreDtail).
 * @param {Number} params.idPhoneNumber id increment for generate mobile phone number from users table.
 * @param {Number} params.idStores id from stores table.
 * @param {Number} params.idStoreCode id for external id/code from stores table.
 * @param {Number} params.idUserStores id from user stores table.
 * @param {Number} params.idSupplierStores id from supplier stores table.
 * @param {Number} params.idSuppliers id from suppliers table.
 */
export default async (params) => {
  await insertUsers(params);
  await insertUserRoles(params);
  const storeCode = await insertStores(params);
  await insertUserStores(params);
  await insertSupplierStores(params);

  return storeCode;
};
