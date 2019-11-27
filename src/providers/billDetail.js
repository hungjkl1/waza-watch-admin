import { GET_LIST,CREATE,UPDATE,GET_ONE,DELETE,GET_MANY,GET_MANY_REFERENCE } from 'react-admin';
import API from '../core';
const service = new API()
const BillDetailProvider = (type,params) => {
    switch (type) {
        case GET_MANY:{
            return service.post('bill/getBillDetailByArray',params).then((response) => {
                console.log(response)
                const data = response.data
                data.forEach(element => {
                    element.id = element._id
                });
                console.log(data);
                return Promise.resolve({
                    data
                })
              }).catch((err) => {
                throw new Error(err);
              });
        }
    }
}
export default BillDetailProvider