/**
* Author      : Farhad (farhad@sinbad.co.id)
* Modifier    :
* Domain      : catalogue
* Description : This File for Model Seeding Data on suppliers table
*/

import seedingData from '@at-api-core/seeding-data';

/**
 * This function for seeding data select by id on suppliers table.
 * @param {Number} id suppliers id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'public.suppliers',
    condition: { id },
    limit: 5,
  };

  const result = await seedingData(query);

  return result;
};

/**
 * This function for seeding data delete by id on suppliers table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idSuppliers id from suppliers table.
 */
export const deleteById = async (params) => {
  const query = {
    type: 'remove',
    table: 'public.suppliers',
    condition: {
      id: params.idSuppliers,
    },
  };

  await seedingData(query);
};
