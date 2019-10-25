import React from 'react';
import { Show, TextField, ReferenceField ,SimpleShowLayout} from 'react-admin';

const ProductView = props => {
    return <Show {...props}>
        <SimpleShowLayout rowClick="show">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="price" />
        <TextField source="quantity"/>
        <ReferenceField label="Brand" source="brand" reference="brand">
        <TextField source="name" />
        </ReferenceField>
        <ReferenceField label="Category" source="category" reference="category">
        <TextField source="name" />
        </ReferenceField>
        </SimpleShowLayout>
    </Show>
};
export default ProductView