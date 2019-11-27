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
  ReferenceArrayField,
  ImageField
} from "react-admin";

const ViewBill = props => (
  <Show title="Bill Detail" {...props}>
    <TabbedShowLayout>
      <Tab label="Summary">
      <TextField source="id" />
      <ReferenceField label="Customer" source="userID" reference="users" allowEmpty>
      <TextField source="username" />
      </ReferenceField>
      <TextField source="deliveryState" />
      <TextField source="createAt" />
      <TextField source="voucher" allowEmpty/>
      <TextField source="address" allowEmpty/>
      <TextField source="totalPay"/>
      </Tab>ReferenceManyField
      <Tab label='Non User Customer'>
      <TextField source="nonUser.name" allowEmpty/>
      <TextField source="nonUser.phone" allowEmpty/>
      <TextField source="nonUser.email" allowEmpty/>
      </Tab>
      <Tab label="BillDetail">
        <ReferenceArrayField source='billDetail' reference="billDetails">
          <Datagrid>
            <TextField source="product._id" />
            <TextField source="product.name" />
            <ImageField source="product.productImage"/>
            <TextField source="price" />
            <TextField source="quantity"/>
            <ShowButton/>
            <DeleteButton/>
          </Datagrid>
        </ReferenceArrayField>
      </Tab>
    </TabbedShowLayout>
  </Show>
);
export default ViewBill;
