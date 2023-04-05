/**
* Author      : Farhad (farhad@sinbad.co.id)
* Modifier    :
* Domain      : catalogue
* Description : This File for Model Seeding Data on catalogue_taxes table
*/

import seedingData from '@at-api-core/seeding-data';

/**
 * This function for seeding data select by id on catalogue_taxes table.
 * @param {Number} id catalogue_taxes id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'public.catalogue_taxes',
    condition: { id },
    limit: 5,
  };

  const result = await seedingData(query);

  return result;
};

/**
 * This function for seeding data delete by id on catalogue_taxes table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idCatalogueTaxes id from catalogue_taxes table.
 */
export const deleteById = async (params) => {
  const query = {
    type: 'remove',
    table: 'public.catalogue_taxes',
    condition: {
      id: params.idCatalogueTaxes,
    },
  };

  await seedingData(query);
};
