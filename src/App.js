import React from 'react';
import authProvider from './provider/authProvider';
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import UserCreate from './layout/user/user'
import ProductCreate from './layout/product/product'
import fakeDataProvider from 'ra-data-fakerest';
import fakeData from './fakeData.json'
import UserList from './layout/user/index';
import ProductList from './layout/product/index';
import { BillList } from './layout/bill';
import ProductView from './layout/product/view';
import ViewBill from './layout/bill/view';
const dataProvider = fakeDataProvider(fakeData)
function App() {
  return (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name='users' list={UserList} edit={EditGuesser} create={UserCreate} show={ShowGuesser}/>
    <Resource name='products' list={ProductList} edit={EditGuesser} create={ProductCreate} show={ProductView}/>
    <Resource name='bills' list={BillList} edit={EditGuesser} create={ProductCreate} show={ViewBill}/>
    <Resource name='brand' list={ListGuesser} edit={EditGuesser} create={ProductCreate}/>
    <Resource name='category' list={ListGuesser} edit={EditGuesser} create={ProductCreate}/>
    <Resource name='billDetails'/>
  </Admin>
  );
}

export default App;
