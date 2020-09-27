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
  ReferenceInput,
  SelectInput,
  BooleanField
} from 'react-admin';
const validateRequired = required();

export const UserCreate = props => (
  <Create {...props}>
      <SimpleForm>
          <TextInput source="firstName" />
          <TextInput source="lastName" />
          <TextInput source="username" />
          <TextInput source="tag" />
          <BooleanInput source="isActive" />
      </SimpleForm>
  </Create>
);

export const UserEdit = props => (
  <Edit {...props}>
      <SimpleForm>
          <TextInput source="id" />
          <TextInput source="firstName" />
          <TextInput source="lastName" />
          <TextInput source="username" />
          <TextInput source="tag" />
          <TextInput source="password" />
          <BooleanInput source="isActive" />
      </SimpleForm>
  </Edit>
);

export const UserList = props => (
  <List {...props}>
      <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="firstName" />
          <TextField source="lastName" />
          <TextField source="username" />
          <TextField source="tag" />
          <TextField source="password" />
          <BooleanField source="isActive" />
      </Datagrid>
  </List>
);