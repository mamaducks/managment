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
import Autocomplete from "@material-ui/lab/Autocomplete";

const validateRequired = required();

 const SexInput = (props) => {
  const {
    input,
    meta: { touched, error },
  } = useInput(props);

  return (
    <Autocomplete
      freeSolo
      options={props.options}
      renderInput={(params) => (
        <TextField
          {...params}
          {...props}
          source="name"
          label="Name"
          margin="normal"
          variant="outlined"
        />
      )}
    />
  );
}; 

const payload = {
  filter: {},
  pagination: { page: 1, perPage: 10 },
  sort: { field: "name", order: "ASC" },
};

const UserList = React.forwardRef(() => {
  return <AutocompleteInput
          source="name"
          options={[{id: 'ID', name: 'NAME'}]}
        />
});

export const WorkAssetList = (props) => (
  <Datagrid rowClick="edit">
    <NumberField source="quantity" />
    <TextField source="name" />

    <NumberField source="price" />
    <ReferenceField source="ledgerCodeId" reference="ledger-codes">
      <TextField source="name" />
    </ReferenceField>
  </Datagrid>
);

/*

 <AutocompleteInput
          source="name"
          inputText={() => "Input"}
          options={data}
          optionText={() => "Test"}
          inputValueMatcher={(input, suggestion, getOptionText) =>
            input.toUpperCase().trim() === suggestion.descricao ||
            input.toLowerCase().trim() ===
              getOptionText(suggestion).toLowerCase().trim()
          }
        />

*/

const  TTT = (props)=> {
  console.log(props)

  return ( <AutocompleteInput {...props} optionText="name" optionValue="name" />)
};

export const WorkAssetCreate = (props) => {
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
        <Autocomplete
          freeSolo
          options={props.options}
          renderInput={(params) => (
            <TextField
              {...params}
              
              source="name"
              label="Name"
              margin="normal"
              variant="outlined"
            />
          )}
        />
        <SexInput options={data.map(({ name }) => name)} />
        <NumberInput source="price" />
        <ReferenceInput source="ledgerCodeId" reference="ledger-codes">
          <SelectInput optionText="name" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

const WorkAssetEditForm = (props) => (
  <SimpleForm {...props} redirect={`/work-orders/${props.record.workOrderId}`}>
    <NumberInput source="quantity" />
    <TextInput source="name" />
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
