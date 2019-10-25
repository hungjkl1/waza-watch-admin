import React from 'react';
import { Create, SimpleForm, TextInput} from 'react-admin';
const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="username" />
            <TextInput source="password" type="password" />
            <TextInput source="email" type="email" />
            <TextInput source="firstname" />
            <TextInput source="lastname" />
            <TextInput source="phone" />
            <TextInput source="gender" />
        </SimpleForm>
    </Create>
);
export default UserCreate