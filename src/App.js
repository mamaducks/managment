import React from 'react';
import { Admin, EditGuesser, ListGuesser, Resource, ShowGuesser } from 'react-admin';
import crudProvider from '@fusionworks/ra-data-nest-crud'
import { SiteList, SiteCreate, SiteEdit } from './admin/Sites'
import { UnitList, UnitEdit } from './admin/Units'
import { LedgerCodeEdit, LedgerCodeList } from './admin/LedgerCodes'

const dataProvider = crudProvider('http://localhost:3000');
//  <Resource name="sites" list={SiteList} create={SiteCreate} edit={SiteEdit} show={ShowGuesser} />
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="sites" list={SiteList} create={SiteCreate} edit={SiteEdit} show={ShowGuesser} />
    <Resource name="units" edit={UnitEdit} list={UnitList} show={ShowGuesser} />
    <Resource name="ledger-codes" edit={LedgerCodeEdit} list={LedgerCodeList} show={ShowGuesser} options={{ label: 'GL Codes' }} />
    <Resource name="work-assets" edit={EditGuesser} list={ListGuesser} show={ShowGuesser} options={{ label: 'Work Assets' }} />
    <Resource name="work-user-logs" edit={EditGuesser} list={ListGuesser} show={ShowGuesser} options={{ label: 'Worker Logs' }} />
    <Resource name="users" edit={EditGuesser} list={ListGuesser} show={ShowGuesser} />
  </Admin>
);

export default App;