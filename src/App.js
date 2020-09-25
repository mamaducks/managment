import React from 'react';
import { Admin, EditGuesser, ListGuesser, Resource, ShowGuesser } from 'react-admin';
import crudProvider from '@fusionworks/ra-data-nest-crud'
import { SiteList, SiteCreate, SiteEdit } from './admin/Sites'
import { UnitCreate, UnitList, UnitEdit } from './admin/Units'
import { UserCreate, UserList, UserEdit } from './admin/Users'
import { LedgerCodeEdit, LedgerCodeList } from './admin/LedgerCodes'
import { WorkOrderCreate, WorkOrrderList } from './admin/WorkOrders'

const dataProvider = crudProvider('http://localhost:3000');
//  <Resource name="sites" list={SiteList} create={SiteCreate} edit={SiteEdit} show={ShowGuesser} />
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="sites" list={SiteList} create={SiteCreate} edit={SiteEdit} show={ShowGuesser} />
    <Resource name="units" create={UnitCreate} edit={UnitEdit} list={UnitList} show={ShowGuesser} />
    <Resource name="ledger-codes" edit={LedgerCodeEdit} list={LedgerCodeList} show={ShowGuesser} options={{ label: 'GL Codes' }} />
    <Resource name="work-assets" edit={EditGuesser} list={ListGuesser} show={ShowGuesser} options={{ label: 'Work Assets' }} />
    <Resource name="work-user-logs" edit={EditGuesser} list={ListGuesser} show={ShowGuesser} options={{ label: 'Worker Logs' }} />
    <Resource name="work-orders" create={WorkOrderCreate} edit={EditGuesser} list={WorkOrrderList} show={ShowGuesser} options={{ label: 'Worker Orders' }} />
    <Resource name="users" create={UserCreate} edit={UserEdit} list={UserList} show={ShowGuesser} />
  </Admin>
);

export default App;