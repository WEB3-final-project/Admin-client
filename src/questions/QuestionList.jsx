import {
  List,
  Datagrid,
  TextField,
  NumberField,
  DateField,
  DeleteButton,
  EditButton
} from "react-admin";

export const QuestionList = () => (

  <List>

      <Datagrid rowClick="show">

          <TextField source="id" />

          <TextField source="author_name" />

          <TextField source="content" />

          <NumberField source="upvotes" />

          <DateField source="created_at" />

          <EditButton />

          <DeleteButton />

      </Datagrid>

  </List>

);
