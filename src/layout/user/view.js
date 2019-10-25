import React from 'react';
import { Show, SimpleShowLayout, TextField} from 'react-admin';
const UserView = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="username" />
            <TextField source="password" type="password" />
            <TextField source="email" type="email" />
            <TextField source="firstname" />
            <TextField source="lastname" />
            <TextField source="phone" />
            <TextField source="gender" />
        </SimpleShowLayout>
    </Show>
);
export default UserView