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

export const UnitList = props => (
  <List {...props}>
      <Datagrid rowClick="edit">
          <TextField source="name" label="Unit Name"/>
          <ReferenceField source="siteId" reference="sites">
            <TextField source="name" />
          </ReferenceField>
      </Datagrid>
  </List>
);

export const UnitCreate = props => (
  <Create {...props}>
      <SimpleForm>
          <TextInput source="name" />
          <ReferenceInput source="siteId" reference="sites">
            <SelectInput optionText="name" />
          </ReferenceInput>
      </SimpleForm>
  </Create>
);

export const UnitEdit = props => (
  <Edit {...props}>
      <SimpleForm>
          <TextInput source="id" />
          <TextInput source="name" />
          <ReferenceInput source="siteId" reference="sites">
            <SelectInput optionText="name" />
          </ReferenceInput>
      </SimpleForm>
  </Edit>
);