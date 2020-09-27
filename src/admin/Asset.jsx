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
} from 'react-admin';
const validateRequired = required();

export const AssetList = props => (
  <List {...props}>
      <Datagrid rowClick="edit">
          <TextField source="name" />
      </Datagrid>
  </List>
);

export const AssetCreate = props => (
  <Create {...props}>
      <SimpleForm>
          <TextInput source="name" />
      </SimpleForm>
  </Create>
);

export const AssetEdit = props => (
  <Edit {...props}>
      <SimpleForm>
          <TextInput source="name" />
      </SimpleForm>
  </Edit>
);