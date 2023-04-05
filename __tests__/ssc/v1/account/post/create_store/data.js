/**
* Author      : yosua siagian (yosua@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Data on API post_create_store
*/

import dateCommander from '@at-api-core/date-commander';
import tc from './tc';

export const storeRequiredOnly = () => ({
  warehouseId: 500002,
  topSellingBrand: null,
  urbanId: 25698,
  name: 'Store AT API Create Store Name',
  mostWantedBrand: null,
  vehicleAccessibilityId: 1,
  address: 'Jl. AT API Create Store Name',
  noteAddress: null,
  taxNo: null,
  longitude: null,
  latitude: null,
  largeArea: null,
  phoneNo: null,
  imageUrl: null,
  taxImageUrl: null,
  numberOfEmployee: null,
  vehicleAccessibilityAmount: 2,
  user: {
    name: 'User AT API Create Store Name',
    mobilePhone: `0811${dateCommander('now', 'timestamp')}`,
    email: `ATAPI${dateCommander('now', 'timestamp')}@store.com`,
    idNo: `123${dateCommander('now', 'timestamp')}456`,
    taxNo: `123${dateCommander('now', 'timestamp')}45`,
    imageUrl: null,
    taxImageUrl: null,
    idImageUrl: 'https://foo.com',
    selfieImageUrl: null,
    joinDate: null,
  },
});

export const storeAdditional = () => ({
  warehouseId: 500002,
  topSellingBrand: 'SGM',
  urbanId: 25698,
  name: 'Store AT API Create Store Name',
  mostWantedBrand: 'Wismilak',
  vehicleAccessibilityId: 1,
  address: 'Jl. AT API Create Store Name',
  noteAddress: 'ATAPICreateStoreNoteAddress',
  taxNo: `123${dateCommander('now', 'timestamp')}45`,
  longitude: 106.783,
  latitude: -6.14648,
  largeArea: 100,
  phoneNo: '02197538642',
  imageUrl: 'https://foo.com',
  taxImageUrl: 'https://foo.com',
  numberOfEmployee: '1 - 10',
  vehicleAccessibilityAmount: 2,
  user: {
    name: 'User AT API Create Store Name',
    mobilePhone: `0811${dateCommander('now', 'timestamp')}`,
    email: `ATAPI${dateCommander('now', 'timestamp')}@store.com`,
    idNo: `123${dateCommander('now', 'timestamp')}456`,
    taxNo: `123${dateCommander('now', 'timestamp')}45`,
    imageUrl: 'https://foo.com',
    taxImageUrl: 'https://foo.com',
    idImageUrl: 'https://foo.com',
    selfieImageUrl: 'https://foo.com',
    joinDate: '2021-02-03',
  },
});

export const compareDB = [
  {
    dbTypeData: 'number',
    responseKey: 'id',
    databaseField: 'id',
  },
  {
    dbTypeData: 'date',
    responseKey: 'createdAt',
    databaseField: 'created_at',
  },
];

export const compareDBBodyApi = [
  {
    responseKey: 'warehouseId',
    databaseField: 'warehouse_id',
  },
  {
    responseKey: 'urbanId',
    databaseField: 'urban_id',
  },
  {
    responseKey: 'name',
    databaseField: 'name',
  },
  {
    responseKey: 'vehicleAccessibilityId',
    databaseField: 'vehicle_accessibility_id',
  },
  {
    responseKey: 'address',
    databaseField: 'address',
  },
  {
    responseKey: 'phoneNo',
    databaseField: 'phone_no',
  },
  {
    responseKey: 'vehicleAccessibilityAmount',
    databaseField: 'vehicle_accessibility_amount',
  },
];

export const compareDBBodyApiUser = [
  {
    parentResponseKey: 'user',
    responseKey: 'name',
    databaseField: 'name',
  },
  {
    parentResponseKey: 'user',
    responseKey: 'mobilePhone',
    databaseField: 'mobile_phone',
  },
  {
    parentResponseKey: 'user',
    responseKey: 'email',
    databaseField: 'email',
  },
  {
    parentResponseKey: 'user',
    responseKey: 'idNo',
    databaseField: 'id_no',
  },
  {
    parentResponseKey: 'user',
    responseKey: 'taxNo',
    databaseField: 'tax_no',
  },
  {
    parentResponseKey: 'user',
    responseKey: 'imageUrl',
    databaseField: 'image_url',
  },
  {
    parentResponseKey: 'user',
    responseKey: 'taxImageUrl',
    databaseField: 'tax_image_url',
  },
  {
    parentResponseKey: 'user',
    responseKey: 'idImageUrl',
    databaseField: 'id_image_url',
  },
  {
    parentResponseKey: 'user',
    responseKey: 'selfieImageUrl',
    databaseField: 'selfie_image_url',
  },
  {
    parentResponseKey: 'user',
    responseKey: 'joinDate',
    databaseField: 'join_date',
  },
];

export const loopingError = [
  {
    title: tc.negative.phone9char,
    value: {
      user: {
        name: 'User AT API Create Store Name',
        mobilePhone: '081234567',
        email: `ATAPI${dateCommander('now', 'timestamp')}@store.com`,
        idNo: `123${dateCommander('now', 'timestamp')}456`,
        taxNo: `123${dateCommander('now', 'timestamp')}45`,
        imageUrl: 'https://foo.com',
        taxImageUrl: 'https://foo.com',
        idImageUrl: 'https://foo.com',
        selfieImageUrl: 'https://foo.com',
        joinDate: '2021-02-03',
      },
    },
  },
  {
    title: tc.negative.phone15char,
    value: {
      user: {
        name: 'User AT API Create Store Name',
        mobilePhone: '081234568786794',
        email: `ATAPI${dateCommander('now', 'timestamp')}@store.com`,
        idNo: `123${dateCommander('now', 'timestamp')}456`,
        taxNo: `123${dateCommander('now', 'timestamp')}45`,
        imageUrl: 'https://foo.com',
        taxImageUrl: 'https://foo.com',
        idImageUrl: 'https://foo.com',
        selfieImageUrl: 'https://foo.com',
        joinDate: '2021-02-03',
      },
    },
  },
  {
    title: tc.negative.phoneAlreadyExist,
    value: {
      user: {
        name: 'User AT API Create Store Name',
        mobilePhone: '082300098000',
        email: `ATAPI${dateCommander('now', 'timestamp')}@store.com`,
        idNo: `123${dateCommander('now', 'timestamp')}456`,
        taxNo: `123${dateCommander('now', 'timestamp')}45`,
        imageUrl: 'https://foo.com',
        taxImageUrl: 'https://foo.com',
        idImageUrl: 'https://foo.com',
        selfieImageUrl: 'https://foo.com',
        joinDate: '2021-02-03',
      },
    },
  },
  {
    title: tc.negative.phoneInvalidPrefix,
    value: {
      user: {
        name: 'User AT API Create Store Name',
        mobilePhone: '54897697356958',
        email: `ATAPI${dateCommander('now', 'timestamp')}@store.com`,
        idNo: `123${dateCommander('now', 'timestamp')}456`,
        taxNo: `123${dateCommander('now', 'timestamp')}45`,
        imageUrl: 'https://foo.com',
        taxImageUrl: 'https://foo.com',
        idImageUrl: 'https://foo.com',
        selfieImageUrl: 'https://foo.com',
        joinDate: '2021-02-03',
      },
    },
  },
  {
    title: tc.negative.phoneEmpty,
    value: {
      user: {
        name: 'User AT API Create Store Name',
        mobilePhone: '',
        email: `ATAPI${dateCommander('now', 'timestamp')}@store.com`,
        idNo: `123${dateCommander('now', 'timestamp')}456`,
        taxNo: `123${dateCommander('now', 'timestamp')}45`,
        imageUrl: 'https://foo.com',
        taxImageUrl: 'https://foo.com',
        idImageUrl: 'https://foo.com',
        selfieImageUrl: 'https://foo.com',
        joinDate: '2021-02-03',
      },
    },
  },
  {
    title: tc.negative.phoneNull,
    value: {
      user: {
        name: 'User AT API Create Store Name',
        mobilePhone: null,
        email: `ATAPI${dateCommander('now', 'timestamp')}@store.com`,
        idNo: `123${dateCommander('now', 'timestamp')}456`,
        taxNo: `123${dateCommander('now', 'timestamp')}45`,
        imageUrl: 'https://foo.com',
        taxImageUrl: 'https://foo.com',
        idImageUrl: 'https://foo.com',
        selfieImageUrl: 'https://foo.com',
        joinDate: '2021-02-03',
      },
    },
  },
  {
    title: tc.negative.emailAlreadyExist,
    value: {
      user: {
        name: 'User AT API Create Store Name',
        mobilePhone: `0811${dateCommander('now', 'timestamp')}`,
        email: 'tomh@mail.com',
        idNo: `123${dateCommander('now', 'timestamp')}456`,
        taxNo: `123${dateCommander('now', 'timestamp')}45`,
        imageUrl: 'https://foo.com',
        taxImageUrl: 'https://foo.com',
        idImageUrl: 'https://foo.com',
        selfieImageUrl: 'https://foo.com',
        joinDate: '2021-02-03',
      },
    },
  },
  {
    title: tc.negative.emailInvalidFormat,
    value: {
      user: {
        name: 'User AT API Create Store Name',
        mobilePhone: `0811${dateCommander('now', 'timestamp')}`,
        email: 'yoyo@@gmail.com',
        idNo: `123${dateCommander('now', 'timestamp')}456`,
        taxNo: `123${dateCommander('now', 'timestamp')}45`,
        imageUrl: 'https://foo.com',
        taxImageUrl: 'https://foo.com',
        idImageUrl: 'https://foo.com',
        selfieImageUrl: 'https://foo.com',
        joinDate: '2021-02-03',
      },
    },
  },
  {
    title: tc.negative.emailEmpty,
    value: {
      user: {
        name: 'User AT API Create Store Name',
        mobilePhone: `0811${dateCommander('now', 'timestamp')}`,
        email: '',
        idNo: `123${dateCommander('now', 'timestamp')}456`,
        taxNo: `123${dateCommander('now', 'timestamp')}45`,
        imageUrl: 'https://foo.com',
        taxImageUrl: 'https://foo.com',
        idImageUrl: 'https://foo.com',
        selfieImageUrl: 'https://foo.com',
        joinDate: '2021-02-03',
      },
    },
  },
  {
    title: tc.negative.emailNull,
    value: {
      user: {
        name: 'User AT API Create Store Name',
        mobilePhone: `0811${dateCommander('now', 'timestamp')}`,
        email: null,
        idNo: `123${dateCommander('now', 'timestamp')}456`,
        taxNo: `123${dateCommander('now', 'timestamp')}45`,
        imageUrl: 'https://foo.com',
        taxImageUrl: 'https://foo.com',
        idImageUrl: 'https://foo.com',
        selfieImageUrl: 'https://foo.com',
        joinDate: '2021-02-03',
      },
    },
  },
  {
    title: tc.negative.userNameInteger,
    value: {
      user: {
        name: 123,
        mobilePhone: `0811${dateCommander('now', 'timestamp')}`,
        email: `ATAPI${dateCommander('now', 'timestamp')}@store.com`,
        idNo: `123${dateCommander('now', 'timestamp')}456`,
        taxNo: `123${dateCommander('now', 'timestamp')}45`,
        imageUrl: 'https://foo.com',
        taxImageUrl: 'https://foo.com',
        idImageUrl: 'https://foo.com',
        selfieImageUrl: 'https://foo.com',
        joinDate: '2021-02-03',
      },
    },
  },
  {
    title: tc.negative.userNameEmpty,
    value: {
      user: {
        name: '',
        mobilePhone: `0811${dateCommander('now', 'timestamp')}`,
        email: `ATAPI${dateCommander('now', 'timestamp')}@store.com`,
        idNo: `123${dateCommander('now', 'timestamp')}456`,
        taxNo: `123${dateCommander('now', 'timestamp')}45`,
        imageUrl: 'https://foo.com',
        taxImageUrl: 'https://foo.com',
        idImageUrl: 'https://foo.com',
        selfieImageUrl: 'https://foo.com',
        joinDate: '2021-02-03',
      },
    },
  },
  {
    title: tc.negative.userNameNull,
    value: {
      user: {
        name: null,
        mobilePhone: `0811${dateCommander('now', 'timestamp')}`,
        email: `ATAPI${dateCommander('now', 'timestamp')}@store.com`,
        idNo: `123${dateCommander('now', 'timestamp')}456`,
        taxNo: `123${dateCommander('now', 'timestamp')}45`,
        imageUrl: 'https://foo.com',
        taxImageUrl: 'https://foo.com',
        idImageUrl: 'https://foo.com',
        selfieImageUrl: 'https://foo.com',
        joinDate: '2021-02-03',
      },
    },
  },
  {
    title: tc.negative.ktp15Char,
    value: {
      user: {
        name: 'User AT API Create Store Name',
        mobilePhone: `0811${dateCommander('now', 'timestamp')}`,
        email: `ATAPI${dateCommander('now', 'timestamp')}@store.com`,
        idNo: `123${dateCommander('now', 'timestamp')}45`,
        taxNo: `123${dateCommander('now', 'timestamp')}45`,
        imageUrl: 'https://foo.com',
        taxImageUrl: 'https://foo.com',
        idImageUrl: 'https://foo.com',
        selfieImageUrl: 'https://foo.com',
        joinDate: '2021-02-03',
      },
    },
  },
  {
    title: tc.negative.ktp17Char,
    value: {
      user: {
        name: 'User AT API Create Store Name',
        mobilePhone: `0811${dateCommander('now', 'timestamp')}`,
        email: `ATAPI${dateCommander('now', 'timestamp')}@store.com`,
        idNo: `123${dateCommander('now', 'timestamp')}4567`,
        taxNo: `123${dateCommander('now', 'timestamp')}45`,
        imageUrl: 'https://foo.com',
        taxImageUrl: 'https://foo.com',
        idImageUrl: 'https://foo.com',
        selfieImageUrl: 'https://foo.com',
        joinDate: '2021-02-03',
      },
    },
  },
  {
    title: tc.negative.ktpEmpty,
    value: {
      user: {
        name: 'User AT API Create Store Name',
        mobilePhone: `0811${dateCommander('now', 'timestamp')}`,
        email: `ATAPI${dateCommander('now', 'timestamp')}@store.com`,
        idNo: '',
        taxNo: `123${dateCommander('now', 'timestamp')}45`,
        imageUrl: 'https://foo.com',
        taxImageUrl: 'https://foo.com',
        idImageUrl: 'https://foo.com',
        selfieImageUrl: 'https://foo.com',
        joinDate: '2021-02-03',
      },
    },
  },
  {
    title: tc.negative.ktpNull,
    value: {
      user: {
        name: 'User AT API Create Store Name',
        mobilePhone: `0811${dateCommander('now', 'timestamp')}`,
        email: `ATAPI${dateCommander('now', 'timestamp')}@store.com`,
        idNo: null,
        taxNo: `123${dateCommander('now', 'timestamp')}45`,
        imageUrl: 'https://foo.com',
        taxImageUrl: 'https://foo.com',
        idImageUrl: 'https://foo.com',
        selfieImageUrl: 'https://foo.com',
        joinDate: '2021-02-03',
      },
    },
  },
  {
    title: tc.negative.ktpString,
    value: {
      user: {
        name: 'User AT API Create Store Name',
        mobilePhone: `0811${dateCommander('now', 'timestamp')}`,
        email: `ATAPI${dateCommander('now', 'timestamp')}@store.com`,
        idNo: 'asasda3',
        taxNo: `123${dateCommander('now', 'timestamp')}45`,
        imageUrl: 'https://foo.com',
        taxImageUrl: 'https://foo.com',
        idImageUrl: 'https://foo.com',
        selfieImageUrl: 'https://foo.com',
        joinDate: '2021-02-03',
      },
    },
  },
  {
    title: tc.negative.nameStoreEmpty,
    value: {
      name: '',
    },
  },
  {
    title: tc.negative.nameStoreNull,
    value: {
      name: null,
    },
  },
  {
    title: tc.negative.urbanIdEmpty,
    value: {
      urbanId: '',
    },
  },
  {
    title: tc.negative.urbanIdNull,
    value: {
      urbanId: null,
    },
  },
  {
    title: tc.negative.urbanIdInvalid,
    value: {
      urbanId: '!',
    },
  },
  {
    title: tc.negative.urbanIdString,
    value: {
      urbanId: 'a',
    },
  },
  {
    title: tc.negative.addressEmpty,
    value: {
      address: '',
    },
  },
  {
    title: tc.negative.addressNull,
    value: {
      address: null,
    },
  },
  {
    title: tc.negative.vehicleIdInvalid,
    value: {
      vehicleAccessibilityId: 6,
    },
  },
  {
    title: tc.negative.vehicleIdString,
    value: {
      vehicleAccessibilityId: 'a',
    },
  },
  {
    title: tc.negative.warehouseIdEmpty,
    value: {
      warehouseId: '',
    },
  },
  {
    title: tc.negative.warehouseIdNull,
    value: {
      warehouseId: null,
    },
  },
  {
    title: tc.negative.warehouseIdInvalid,
    value: {
      warehouseId: 70000000,
    },
  },
  // {
  //   title: tc.negative.warehouseIdString,
  //   value: {
  //     warehouseId: 'a',
  //   },
  // },
];

export const notSetErrorUser = [
  {
    title: tc.negative.phoneNotSet,
    value: {
      user: 'mobilePhone',
    },
  },
  {
    title: tc.negative.emailNotSet,
    value: {
      user: 'email',

    },
  },
  {
    title: tc.negative.userNameNotSet,
    value: {
      user: 'name',

    },
  },
  {
    title: tc.negative.ktpNotSet,
    value: {
      user: 'idNo',
    },
  },
];

export const notSetErrorStore = [
  {
    title: tc.negative.nameStoreNotSet,
    value: 'name',
  },
  {
    title: tc.negative.urbanIdNotSet,
    value: 'urbanId',
  },
  {
    title: tc.negative.addressNotSet,
    value: 'address',
  },
  {
    title: tc.negative.warehouseIdNotSet,
    value: 'warehouseId',
  },
];

export const loopingErrorCookies = [
  {
    title: tc.negative.cookiesInvalid,
    value: 'error',
  },
  {
    title: tc.negative.cookiesNull,
    value: null,
  },
  {
    title: tc.negative.cookiesEmpty,
    value: '',
  },
];

export const loopingAdditionalFieldStore = [
  {
    title: tc.positive.createStoreWithTopSellingBrand,
    value: {
      topSellingBrand: 'SGM',
    },
  },
  {
    title: tc.positive.createStoreWithMostWantedBrand,
    value: {
      mostWantedBrand: 'Wismilak',
    },
  },
  {
    title: tc.positive.createStoreWithnoteAddress,
    value: {
      noteAddress: 'ATAPI Note Address',
    },
  },
  {
    title: tc.positive.createStoreWithtaxNo,
    value: {
      taxNo: `123${dateCommander('now', 'timestamp')}67`,
    },
  },
  {
    title: tc.positive.createStoreWithlongitude,
    value: {
      longitude: 106.783,
    },
  },
  {
    title: tc.positive.createStoreWithlatitude,
    value: {
      latitude: -6.14648,
    },
  },
  {
    title: tc.positive.createStoreWithlargeArea,
    value: {
      largeArea: 100,
    },
  },
  {
    title: tc.positive.createStoreWithphoneNo,
    value: {
      phoneNo: '081121111',
    },
  },
  {
    title: tc.positive.createStoreWithimageUrlStore,
    value: {
      imageUrl: 'https://foo.com',
    },
  },
  {
    title: tc.positive.createStoreWithtaxImageUrlStore,
    value: {
      taxImageUrl: 'https://foo.com',
    },
  },
  {
    title: tc.positive.createStoreWithnumberOfEmployee,
    value: {
      numberOfEmployee: '1 - 10',
    },
  },
];

export const loopingAdditionalFieldUser = [
  {
    title: tc.positive.createStoreWithimageUrlUser,
    value: {
      user: {
        name: 'User AT API Create Store Name',
        mobilePhone: `0811${dateCommander('now', 'timestamp')}`,
        email: `atapi${dateCommander('now', 'timestamp')}@store.com`,
        idNo: `123${dateCommander('now', 'timestamp')}456`,
        taxNo: `123${dateCommander('now', 'timestamp')}45`,
        imageUrl: 'https://foo.com',
        taxImageUrl: null,
        idImageUrl: 'https://foo.com',
        selfieImageUrl: null,
        joinDate: null,
      },
    },
  },
  {
    title: tc.positive.createStoreWithtaxImageUrlUser,
    value: {
      user: {
        name: 'User AT API Create Store Name',
        mobilePhone: `0811${dateCommander('now', 'timestamp')}`,
        email: `atapi${dateCommander('now', 'timestamp')}@store.com`,
        idNo: `123${dateCommander('now', 'timestamp')}456`,
        taxNo: `123${dateCommander('now', 'timestamp')}45`,
        imageUrl: null,
        taxImageUrl: 'https://foo.com',
        idImageUrl: 'https://foo.com',
        selfieImageUrl: null,
        joinDate: null,
      },
    },
  },
  {
    title: tc.positive.createStoreWithselfieImageUrl,
    value: {
      user: {
        name: 'User AT API Create Store Name',
        mobilePhone: `0811${dateCommander('now', 'timestamp')}`,
        email: `atapi${dateCommander('now', 'timestamp')}@store.com`,
        idNo: `123${dateCommander('now', 'timestamp')}456`,
        taxNo: `123${dateCommander('now', 'timestamp')}45`,
        imageUrl: null,
        taxImageUrl: null,
        idImageUrl: 'https://foo.com',
        selfieImageUrl: 'https://foo.com',
        joinDate: null,
      },
    },
  },
  {
    title: tc.positive.createStoreWithjoinDate,
    value: {
      user: {
        name: 'User AT API Create Store Name',
        mobilePhone: `0811${dateCommander('now', 'timestamp')}`,
        email: `atapi${dateCommander('now', 'timestamp')}@store.com`,
        idNo: `123${dateCommander('now', 'timestamp')}456`,
        taxNo: `123${dateCommander('now', 'timestamp')}45`,
        imageUrl: null,
        taxImageUrl: null,
        idImageUrl: 'https://foo.com',
        selfieImageUrl: null,
        joinDate: '2021-02-03',
      },
    },
  },
];
