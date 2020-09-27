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
  NumberField,
  NumberInput,
  DateTimeInput,
  DateField,
} from 'react-admin';
const validateRequired = required();

export const WorkUserLogList = props => (
  <Datagrid rowClick="edit">
    <ReferenceField source="userId" reference="users">
      <TextField source="firstName" />
    </ReferenceField>
    <DateField source="timeIn" showTime />
    <DateField source="timeOut" showTime />
    <NumberField source="rate" />
    <ReferenceField source="ledgerCodeId" reference="ledger-codes">
      <TextField source="name" />
    </ReferenceField>
  </Datagrid>
);

export const WorkUserLogCreate = props => (
  <Create {...props}>
    <SimpleForm defaultValue={props.location.state} redirect={`/work-orders/${props.location.state.workOrderId}`}>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="firstName" />
      </ReferenceInput>
      <DateTimeInput source="timeIn" />
      <DateTimeInput source="timeOut" />
      <NumberInput source="rate" />
      <ReferenceInput source="ledgerCodeId" reference="ledger-codes">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

const WorkUserLogEditForm = props => (
  <SimpleForm {...props} redirect={`/work-orders/${props.record.workOrderId}`}>
    <ReferenceInput source="userId" reference="users" redirect={`/work-orders/${props.record.workOrderId}`}>
      <SelectInput optionText="firstName" />
    </ReferenceInput>
    <DateTimeInput source="timeIn" />
    <DateTimeInput source="timeOut" />
    <NumberInput source="rate" />
    <ReferenceInput source="ledgerCodeId" reference="ledger-codes">
      <SelectInput optionText="name" />
    </ReferenceInput>
  </SimpleForm>)

export const WorkUserLogEdit = props => (
  <Edit {...props}>
    <WorkUserLogEditForm />
  </Edit>
);
