import React from 'react';
import { List, Datagrid, TextField,EditButton,TextInput, Filter,ShowButton,DeleteButton,ReferenceField } from 'react-admin';

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
        <TextField source="price" />
        <TextField source="quantity"/>
        <ReferenceField label="Brand" source="brand" reference="brand">
        <TextField source="name" />
        </ReferenceField>
        <ReferenceField label="Category" source="category" reference="category">
        <TextField source="name" />
        </ReferenceField>
        <ShowButton/>
        <EditButton/>
        <DeleteButton/>
        </Datagrid>
    </List>
};
export default ProductList