import React from 'react';
import { List, Datagrid, TextField,EditButton,TextInput, Filter,ShowButton,DeleteButton } from 'react-admin';

const PostFilter = (props) => {
    return <Filter {...props}>
        <TextInput label="username" source="username"/>
    </Filter>
;}

const UserList = props => {
    return <List {...props} filters={<PostFilter/>}>
        <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="username" />
        <TextField source="email" type="email" />
        <TextField source="first_name" />
        <TextField source="last_name" />
        <TextField source="phone" />
        <TextField source="gender" />
        <TextField source="role" />
        <ShowButton/>
        <EditButton/>
        <DeleteButton/>
        </Datagrid>
    </List>
};
export default UserList