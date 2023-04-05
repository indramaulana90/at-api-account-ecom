# at-api-seller-center
AT API for Account Services

## Getting Started

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

   ```
   npm install
   ```

3. Start your app

   dont forget turn on your vpn.

   ```
   npm run test
   ```


## Run Specific Test
   
   ```
   npm run test -- -t='Test Scenarion'
   ```

## Folder Structure

    .
    ├── ...
    ├── __tests__                                       # Test files
    │   └── version                                     # version number for that API
    │       └── service                                 # service name on that API (e.g. account)
    │           └── method                              # method API (e.g. get, post, patch, delete)
    │               └── feature                         # feature name on that API (e.g. profile_detail)
    │                   ├── __snapshots__               # folder snapshot file for expect with snaphsot
    │                   │   └── test.js.snap            # file snapshot (e.g. test.js.snap)
    │                   ├── data.js                     # file for data, to keep data for testing
    │                   ├── endpoint.js                 # file for save endpoint for testing
    │                   ├── schema.json                 # file for schema, to match schema with response
    │                   ├── testcase.js                 # file for save testcase for testing
    │                   └── test.js                     # file for write test code AT API
    ├── data
    │   ├── model                                       # folder for seeding data by table (model) 
    │   │   └── version                                 # major version for API will be seeded
    │   │       └── domain/service                      # domain or service name for API will be seeded (e.g. account)
    │   │           └── table.js                        # table name from database (e.g. stores.js)
    │   └── seeders                                     # folder for seeding data with more than 1 table (bulk)
    │       └── version                                 # major version for API will be seeded
    │           └── domain/service                      # domain or service name for API will be seeded (e.g. account)
    │               └── method-function-name.js         # method and function name for seeder (e.g. create_store.js)
    └── ...

## Run Auto Generate Template Folder
  
## Auto Generate Template for Test
   ```
   npm run g-template-test
   ```

   and then write and choose version, domain/service, method and feature.

## Auto Generate Template for Seeding Data
   ```
   npm run g-template-seed
   ```

   and then write and choose version, domain/service, model or seeder, name of table database.

## Generate Token

### Run Auto Generate Token
   ```
   npm run g-token
   ```

   this script for auto generate token.


## Query Json for Database

   Documentation for [json-sql](https://github.com/2do2go/json-sql/tree/4be018c0662dacba06ddf033d18e71ebf93ee7c3/docs#select) or this is for summary.

   example for select:

   ```
   const sql = {
       type: 'select',
       table: 'table'
   };

   // select * from "table";   
   ```

   example for select with condition:


   ```
   const sql = {
     type: 'select',
     table: 'public',
     condition: { id: 3 },
   }
   
   // select * from "table" where id = 3;   
   ```


   example for insert:


   ```
   const sql = {
       type: 'insert',
       table: 'table',
       values: {a: 4}
   };

   // insert into "table" ("a") values (4);
   ```


   example for delete:


   ```
   const sql = {
       type: 'remove',
       table: 'table'
   });

   sql.query
   // delete from "table";
   ```

