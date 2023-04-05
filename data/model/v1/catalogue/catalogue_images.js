/**
* Author      : Farhad (farhad@sinbad.co.id)
* Modifier    :
* Domain      : catalogue
* Description : This File for Model Seeding Data on catalogue_images table
*/

import seedingData from '@at-api-core/seeding-data';

/**
 * This function for seeding data select by id on catalogue_images table.
 * @param {Number} id catalogue_images id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'public.catalogue_images',
    condition: { id },
    limit: 5,
  };

  const result = await seedingData(query);

  return result;
};

/**
 * This function for seeding data delete by id on catalogue_images table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idCatalogueImages id from catalogue_images table.
 */
export const deleteById = async (params) => {
  const query = {
    type: 'remove',
    table: 'public.catalogue_images',
    condition: {
      id: params.idCatalogueImages,
    },
  };

  await seedingData(query);
};
