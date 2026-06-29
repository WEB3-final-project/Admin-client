import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput
} from "react-admin";

export const QuestionEdit = () => (

  <Edit>

      <SimpleForm>

          <TextInput
              source="author_name"
              fullWidth
          />

          <TextInput
              source="content"
              multiline
              fullWidth
          />

          <NumberInput
              source="upvotes"
          />

      </SimpleForm>

  </Edit>

);
