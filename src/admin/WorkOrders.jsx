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
  ReferenceManyField,
  NumberField,
  Button,
  Link,
} from 'react-admin';
import { WorkAssetCreate, WorkAssetList } from './WorkAssets';
import { withStyles } from "@material-ui/core/styles";
import { Typography, Box, Toolbar } from '@material-ui/core';
import { WorkUserLogList } from './WorkUserLogs';
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";

const validateRequired = required();

const styles = {
  button: {
    marginTop: "1em",
  },
};

const AddNewWorkAsssetButton = withStyles(styles)(({ classes, record }) => (
  <Button
    className={classes.button}
    variant="text"
    component={Link}
    to={{
      pathname: "/work-assets/create",
      state: { workOrderId: record.id },
    }}
    label="Add"
  >
    <ChatBubbleIcon />
  </Button>
));

const AddNewWorkUserLogButton = withStyles(styles)(({ classes, record }) => (
  <Button
    className={classes.button}
    variant="text"
    component={Link}
    to={{
      pathname: "/work-user-logs/create",
      state: { workOrderId: record.id },
    }}
    label="Add"
  >
    <ChatBubbleIcon />
  </Button>
));

export const WorkOrderList = props => (
  <List {...props}>
      <Datagrid rowClick="edit">
          <TextField source="id" />
          <DateField source="createdDate" />
          <ReferenceField source="creatorId" reference="users"><TextField source="firstName" /></ReferenceField>
          <ReferenceField source="siteId" reference="sites"><TextField source="id" /></ReferenceField>
          <ReferenceField source="unitId" reference="units"><TextField source="id" /></ReferenceField>
          <TextField source="occupant" />
          <TextField source="workRequested" />
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
      <TextInput fullWidth multiline source="workRequested" validate={validateRequired} />
      <TextInput fullWidth multiline source="remarks" />
    </SimpleForm>
  </Create>
);



export const WorkOrderEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <Box display="flex">
        <Box flex={1} mr="0.5em">
          <ReferenceInput source="siteId" reference="sites">
            <SelectInput optionText="name" />
        </ReferenceInput>
        </Box>
        <Box flex={1} ml="0.5em">
          <ReferenceInput source="unitId" reference="units">
            <SelectInput optionText="name" />
        </ReferenceInput>
        </Box>
      </Box>
      <ReferenceInput source="creatorId" reference="users">
        <SelectInput optionText="firstName" />
      </ReferenceInput>
      <ReferenceInput source="assigneeId" reference="users">
        <SelectInput optionText="firstName" />
      </ReferenceInput>
      <TextInput source="occupant" />
      <TextInput fullWidth multiline source="workRequested" validate={validateRequired} />
      <TextInput fullWidth multiline source="remarks" />
      <ReferenceManyField reference="work-assets" target="workOrderId" addLabel={false}>
        <WorkAssetList />
      </ReferenceManyField>
      <AddNewWorkAsssetButton record={props.record} />
      <ReferenceManyField reference="work-user-logs" target="workOrderId" addLabel={false}>
        <WorkUserLogList />
      </ReferenceManyField>
      <AddNewWorkUserLogButton record={props.record} />
    </SimpleForm>
  </Edit>
);




