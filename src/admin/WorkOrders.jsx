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
  DateField,
} from 'react-admin';
const validateRequired = required();

export const WorkOrrderList = props => (
  <List {...props}>
      <Datagrid rowClick="edit">
          <TextField source="id" />
          <DateField source="createdDate" />
          <ReferenceField source="creatorId" reference="users"><TextField source="firstName" /></ReferenceField>
          <ReferenceField source="siteId" reference="sites"><TextField source="id" /></ReferenceField>
          <ReferenceField source="unitId" reference="units"><TextField source="id" /></ReferenceField>
          <TextField source="occupant" />
          <TextField source="workRequested" />
          <TextField source="remarks" />
          <TextField source="specialInstructions" />
          <ReferenceField source="assigneeId" reference="users"><TextField source="firstName" /></ReferenceField>
      </Datagrid>
  </List>
);

export const WorkOrderCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="creatorId" reference="users">
        <SelectInput optionText="firstName" />
      </ReferenceInput>
      <ReferenceInput source="siteId" reference="sites">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="unitId" reference="units">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="assigneeId" reference="users">
        <SelectInput optionText="firstName" />
      </ReferenceInput>
      <TextInput source="occupant" />
      <TextInput source="workRequested" validate={validateRequired} />
      <TextInput source="remarks" />
      <TextInput source="specialInstructions" />
    </SimpleForm>
  </Create>
);

export const WorkOrderEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <ReferenceInput source="creatorId" reference="users">
        <SelectInput optionText="firstName" />
      </ReferenceInput>
      <ReferenceInput source="siteId" reference="sites">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="unitId" reference="units">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="assigneeId" reference="users">
        <SelectInput optionText="firstName" />
      </ReferenceInput>
      <TextInput source="occupant" />
      <TextInput source="workRequested" validate={validateRequired} />
      <TextInput source="remarks" />
      <TextInput source="specialInstructions" />
    </SimpleForm>
  </Edit>
);

