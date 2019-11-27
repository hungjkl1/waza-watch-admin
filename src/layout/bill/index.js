import React from 'react';
import { List, Datagrid, TextField,ReferenceField,} from 'react-admin';
const BillList = (props) => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <ReferenceField label="Customer" source="user" allowEmpty reference="users">
                <TextField source="username" />
            </ReferenceField>
            <ReferenceField label="Non Customer" source="nonUser" allowEmpty reference="users">
            <TextField source="name" />
            </ReferenceField>
            <TextField source="deliveryState" />
            <TextField source="createAt" />
            <TextField source="voucher" />
        </Datagrid>
    </List>
);
export default BillList;