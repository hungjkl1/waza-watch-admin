import React from "react";
import {
  Show,
  TextField,
  DeleteButton,
  TabbedShowLayout,
  Tab,
  ReferenceManyField,
  ReferenceField,
  Datagrid,
  ShowButton,
} from "react-admin";

const ViewBill = props => (
  <Show title="Bill Detail" {...props}>
    <TabbedShowLayout>
      <Tab label="Summary">
      <TextField source="id" />
      <ReferenceField label="Customer" source="userID" reference="users">
      <TextField source="username" />
      </ReferenceField>
      <TextField source="deliverState" />
      <TextField source="createdAt" />
      <TextField source="voucher" />
      </Tab>
      <Tab label="BillDetail">
        <ReferenceManyField label='Products' target='billId' reference="billDetails">
          <Datagrid>
          <ReferenceField label="name" source="productId" reference="products">
            <TextField source="name" />
          </ReferenceField>
          <TextField source="price" />
          <TextField source="quantity"/>
          <ShowButton/>
          <DeleteButton/>
          </Datagrid>
        </ReferenceManyField>
      </Tab>
    </TabbedShowLayout>
  </Show>
);
export default ViewBill;
