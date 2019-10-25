import React from 'react';
import { Create, SimpleForm, NumberInput, TextInput, LongTextInput } from 'react-admin';
const ProductCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <NumberInput source="price" />
            <LongTextInput source="description"/>
            <NumberInput source="quantity" />
            <TextInput source="brand" />
            <TextInput source="category" />
        </SimpleForm>
    </Create>
);
export default ProductCreate