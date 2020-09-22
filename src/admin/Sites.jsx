import React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  BooleanInput,
  Edit,
  required,
  email,
  List,
  Datagrid,
  TextField,
  ShowButton,
  EditButton,
  ReferenceField,
} from 'react-admin';
const validateRequired = required();

export const SiteCreate = props => (
  <Create {...props}>
    <SimpleForm redirect="show">
      <TextInput source="shortName" validate={validateRequired} />
      <TextInput source="name" validate={validateRequired} />
      <TextInput source="address" />
    </SimpleForm>
  </Create>
);

const SiteEditTitle = ({ record }) => (<span>{`${record.name}`}</span>);

export const SiteEdit = props => (
  <Edit {...props} title={<SiteEditTitle />}>
    <SimpleForm redirect="list">
      <TextInput source="shortName" validate={validateRequired} />
      <TextInput source="name" validate={validateRequired} />
      <TextInput source="address" />
    </SimpleForm>
  </Edit>
);

export const SiteList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="shortName" />
      <TextField source="name" />
      <TextField source="address" />
      <ShowButton />
      <EditButton />
    </Datagrid>
  </List>
);