import React from 'react';
import { Admin, CreateGuesser, EditGuesser, ListGuesser, Resource, ShowGuesser } from 'react-admin';
import crudProvider from '@fusionworks/ra-data-nest-crud'
import { SiteList, SiteCreate, SiteEdit } from './admin/Sites'
import { UnitList, UnitEdit } from './admin/Units'

const dataProvider = crudProvider('http://localhost:3000');
//  <Resource name="sites" list={SiteList} create={SiteCreate} edit={SiteEdit} show={ShowGuesser} />
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="sites" list={SiteList} create={SiteCreate} edit={SiteEdit} show={ShowGuesser} />
    <Resource name="units" edit={UnitEdit} list={UnitList} show={ShowGuesser} />
  </Admin>
);

export default App;