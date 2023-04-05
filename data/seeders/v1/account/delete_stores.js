/**
* Author      : yosua siagian (yosua@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Seeders Data for Delete Store
*/
import { deleteById as deleteStores } from '../../../model/v1/account/stores';
import { deleteById as deleteUserRoles } from '../../../model/v1/account/user_roles';
import { deleteById as deleteUsers } from '../../../model/v1/account/users';
import { deleteById as deleteUserStores } from '../../../model/v1/account/user_stores';
import { deleteById as deleteSupplierStores } from '../../../model/v1/account/supplier_stores';

import {
  getConsumers, getCredentials, deleteConsumers, deleteCredential,
} from '../../../../helper/epDelPhoneKong';

/**
 * This function for seeders on delete store.
 * @param {Object} params object will be deleted with:
 * @param {Number} params.idSupplierStores id from supplier stores table.
 * @param {Number} params.idUserStores id from user stores table.
 * @param {Number} params.idUsers id from users table.
 * @param {Number} params.idStores id from stores table.
 */
export default async (params) => {
  await deleteSupplierStores(params);
  await deleteUserStores(params);
  await deleteUsers(params);
  await deleteUserRoles(params);
  await deleteStores(params);
};

/**
 * This function for delete account on kong db use phone number.
 * @param {String} phoneNumber phone number.
 */
export const deletePhoneOnKong = async (phoneNumber) => {
  const consumerId = (await getConsumers(phoneNumber)).body.id;
  const credential = (await getCredentials(phoneNumber)).body.next;
  if (credential == null) {
    await deleteConsumers(consumerId);
  } else {
    const credentialId = (await getCredentials(phoneNumber)).body.data[0].id;
    await deleteCredential(consumerId, credentialId);
    await deleteConsumers(consumerId);
  }
};
