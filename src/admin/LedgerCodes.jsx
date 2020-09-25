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

export const LedgerCodeList = props => (
  <List {...props}>
      <Datagrid rowClick="edit">
          <TextField source="code" />
          <TextField source="name" />
      </Datagrid>
  </List>
);

export const LedgerCodeEdit = props => (
  <Edit {...props}>
      <SimpleForm>
          <TextInput source="code" />
          <TextInput source="name" />
      </SimpleForm>
  </Edit>
);