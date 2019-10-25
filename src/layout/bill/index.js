import React from 'react';
import { List, Datagrid, TextField,ReferenceField} from 'react-admin';
export const BillList = (props) => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <ReferenceField label="Customer" source="userID" reference="users">
            <TextField source="username" />
            </ReferenceField>
            <TextField source="deliverState" />
            <TextField source="createdAt" />
            <TextField source="voucher" />
        </Datagrid>
    </List>
);