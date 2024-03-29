import React from "react";
import {
  Create,
  SimpleForm,
  NumberInput,
  TextInput,
  LongTextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
const ProductCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <NumberInput source="price" />
      <LongTextInput source="description" />
      <NumberInput source="quantity" />
      <ReferenceInput label="Brand" source="brand" reference="brands">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput label="Category" source="category" reference="categories">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <LongTextInput source="productImage" />
    </SimpleForm>
  </Create>
);
export default ProductCreate;
