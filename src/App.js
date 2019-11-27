import React from 'react';
import authProvider from './providers/authProvider';
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser, fetchUtils } from 'react-admin';
// import UserCreate from './layout/user/user'
import ProductCreate from './layout/product/product'
// import fakeDataProvider from 'ra-data-fakerest';
import ProductList from './layout/product/index';
import ProductView from './layout/product/view';
import dataProvider from './providers/dataprovider';
import BrandCreate from './layout/brand/brand';
import BrandList from './layout/brand';
import ViewBill from './layout/bill/view';
import BillList from './layout/bill/index';
import ProductEdit from './layout/product/edit';

function App() {
  return (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
{/*     <Resource name='users' list={UserList} edit={EditGuesser} create={UserCreate} show={ShowGuesser}/> */}
    <Resource name='products' list={ProductList} edit={ProductEdit} create={ProductCreate} show={ProductView}/>
    <Resource name='brands' list={BrandList} edit={EditGuesser} create={BrandCreate}/>
    <Resource name='bills' list={BillList} edit={EditGuesser} show={ViewBill}/>
    <Resource name='categories'/>
    <Resource name='billDetails'/>
  </Admin>
  );
}

export default App;
