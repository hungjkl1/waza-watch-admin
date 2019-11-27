import React from 'react';
import { List, Datagrid, TextField,EditButton,TextInput, Filter,ShowButton,DeleteButton,ReferenceField } from 'react-admin';

const PostFilter = (props) => {
    return <Filter {...props}>
        <TextInput label="username" source="name"/>
    </Filter>
;}

const Category = props => {
    return <List {...props} filters={<PostFilter/>}>
        <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="name" />
        <ShowButton/>
        <EditButton/>
        <DeleteButton/>
        </Datagrid>
    </List>
};
export default Category