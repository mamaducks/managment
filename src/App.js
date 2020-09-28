import React from 'react';
import { Admin, EditGuesser, ListGuesser, Resource, ShowGuesser } from 'react-admin';
import crudProvider from '@fusionworks/ra-data-nest-crud'
import { SiteList, SiteCreate, SiteEdit } from './admin/Sites'
import { UnitCreate, UnitList, UnitEdit } from './admin/Units'
import { UserCreate, UserList, UserEdit } from './admin/Users'
import { LedgerCodeEdit, LedgerCodeList } from './admin/LedgerCodes'
import { WorkOrderCreate, WorkOrderEdit, WorkOrderList } from './admin/WorkOrders'
import { AssetCreate, AssetEdit, AssetList } from './admin/Asset';
import { WorkAssetCreate, WorkAssetEdit } from './admin/WorkAssets';
import { WorkUserLogCreate, WorkUserLogEdit } from './admin/WorkUserLogs';
import { RoleCreate, RoleEdit, RoleList } from './admin/Roles';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PaymentIcon from '@material-ui/icons/Payment';
import HomeIcon from '@material-ui/icons/Home';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';


const dataProvider = crudProvider('http://localhost:3000');

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="sites" icon={HomeWorkIcon} list={SiteList} create={SiteCreate} edit={SiteEdit} show={ShowGuesser} />
    <Resource name="units" icon={HomeIcon} create={UnitCreate} edit={UnitEdit} list={UnitList} show={ShowGuesser} />
    <Resource name="ledger-codes" icon={PaymentIcon} edit={LedgerCodeEdit} list={LedgerCodeList} show={ShowGuesser} options={{ label: 'GL Codes' }} />
    <Resource name="work-orders" icon={AssignmentIcon} create={WorkOrderCreate} edit={WorkOrderEdit} list={WorkOrderList} show={ShowGuesser} options={{ label: 'Worker Orders' }} />
    <Resource name="users" icon={PeopleAltIcon} create={UserCreate} edit={UserEdit} list={UserList} show={ShowGuesser} />
    <Resource name="assets" icon={BusinessCenterIcon} create={AssetCreate} edit={AssetEdit} list={AssetList} show={ShowGuesser} />
    <Resource name="work-assets" create={WorkAssetCreate} edit={WorkAssetEdit} />
    <Resource name="work-user-logs"  create={WorkUserLogCreate} edit={WorkUserLogEdit} />
    <Resource name="roles" icon={VerifiedUserIcon} create={RoleCreate} edit={RoleEdit} list={RoleList} />
  </Admin>
);

export default App;