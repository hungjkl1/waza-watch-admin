import React from "react";
import {
  Edit,
  SimpleForm,
  NumberInput,
  TextInput,
  LongTextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
const ProductEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <NumberInput source="price" />
      <LongTextInput source="description" />
      <NumberInput source="quantity" />
      <ReferenceInput label="Brand" source="brand._id" reference="brands">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput label="Category" source="category._id" reference="categories">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <LongTextInput source="productImage" />
    </SimpleForm>
  </Edit>
);
export default ProductEdit;
