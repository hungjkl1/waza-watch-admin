import React from 'react';
import { List, Datagrid, TextField,EditButton,TextInput, Filter,ShowButton,DeleteButton,ReferenceField,ImageField } from 'react-admin';

const PostFilter = (props) => {
    return <Filter {...props}>
        <TextInput label="username" source="username"/>
    </Filter>
;}

const ProductList = props => {
    return <List {...props} filters={<PostFilter/>}>
        <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="name" />
        <ImageField source="productImage"/>
        <TextField source="price" />
        <TextField source="quantity"/>
        <TextField source="brand.name" />
        <TextField source="category.name" />
        <ShowButton/>
        <EditButton/>
        <DeleteButton/>
        </Datagrid>
    </List>
};
export default ProductList