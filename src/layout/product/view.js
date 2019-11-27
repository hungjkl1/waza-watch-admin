import React from 'react';
import { Show, TextField, ReferenceField ,SimpleShowLayout,ImageField} from 'react-admin';

const ProductView = props => {
    return <Show {...props}>
        <SimpleShowLayout rowClick="show">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="price" />
        <TextField source="quantity"/>
        <TextField source="brand.name" />
        <TextField source="category.name" />
        <TextField source="description" />
        <ImageField source="productImage"/>
        </SimpleShowLayout>
    </Show>
};
export default ProductView