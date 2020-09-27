import React, { useEffect } from "react";
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
  AutocompleteInput,
  useQuery,
  Error,
  Loading,
  useDataProvider,
  useInput,
  useQueryWithStore,
} from "react-admin";
const validateRequired = required();

/* export const WorkAssetCreateOld = (props) => {
  const { data, loading, error } = useQueryWithStore({
    type: "getList",
    resource: "assets",
    payload: {
      filter: {},
      pagination: { page: 1, perPage: 100 },
      sort: { field: "name", order: "ASC" },
    },
  });

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!data) return null;

  console.log(data);

  return (
    <Create {...props}>
      <SimpleForm
        defaultValue={props.location.state}
        redirect={`/work-orders/${props?.location?.state?.workOrderId}`}
      >
        <NumberInput source="quantity" />
        <AutocompleteInput source="assetId" choices={data} optionText="name" />
        <NumberInput source="price" />
        <ReferenceInput source="ledgerCodeId" reference="ledger-codes">
          <SelectInput optionText="name" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
}; */

export const WorkAssetList = (props) => (
  <Datagrid rowClick="edit">
    <NumberField source="quantity" />
    <ReferenceField source="assetId" reference="assets">
      <TextField source="name" />
    </ReferenceField>
    <NumberField source="price" />
    <ReferenceField source="ledgerCodeId" reference="ledger-codes">
      <TextField source="name" />
    </ReferenceField>
  </Datagrid>
);

export const WorkAssetCreate = (props) => (
    <Create {...props}>
      <SimpleForm
        defaultValue={props.location.state}
        redirect={`/work-orders/${props?.location?.state?.workOrderId}`}
      >
        <NumberInput source="quantity" />
        <ReferenceInput source="assetId" reference="assets">
          <AutocompleteInput source="assetId" optionText="name" />
        </ReferenceInput>
        <NumberInput source="price" />
        <ReferenceInput source="ledgerCodeId" reference="ledger-codes">
          <SelectInput optionText="name" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );

const WorkAssetEditForm = (props) => (
  <SimpleForm {...props} redirect={`/work-orders/${props.record.workOrderId}`}>
    <NumberInput source="quantity" />
    <ReferenceInput source="assetId" reference="assets">
      <AutocompleteInput source="assetId" optionText="name" />
    </ReferenceInput>
    <NumberInput source="price" />
    <ReferenceInput source="ledgerCodeId" reference="ledger-codes">
      <SelectInput optionText="name" />
    </ReferenceInput>
  </SimpleForm>
);

export const WorkAssetEdit = (props) => (
  <Edit {...props}>
    <WorkAssetEditForm />
  </Edit>
);
