import { GET_LIST,CREATE,UPDATE,GET_ONE,DELETE,GET_MANY,GET_MANY_REFERENCE } from 'react-admin';
import API from '../core';
const service = new API()
const ProductProvider = (type,params) => {
    switch (type) {
        case GET_LIST: {
            return service.post('product/products',params).then((response) => {
                const data = response.data
                const total = response.total
                data.forEach(element => {
                    element.id = element._id
                });
                return Promise.resolve({
                    data,
                    total
                })
              }).catch((err) => {
                throw new Error(err);
              });
        }
        case GET_ONE:{
            return service.post('product/getProduct',params).then((response) => {
                console.log(response)
                const data = response.data.result
                data.id = data._id
                console.log(data)
                if(data.message){
                    throw new Error(data.message)
                }
                // const data = _.get(response.data, 'responses',{});
                return Promise.resolve({data:data})
            }).catch((err) => {
                return Promise.resolve({data:{err,id:-1}})
            });
        }
        case CREATE: {
            console.log(params.data)
            return service.post('product/addProduct',params).then((response) => {
                const data = response.data
                data.id = data._id
                if(data.message){
                    throw new Error(data.message)
                }
                // const data = _.get(response.data, 'responses',{});
                return Promise.resolve({data:data})
            }).catch((err) => {
                return Promise.resolve({data:{err,id:-1}})
            });
        }
        case UPDATE:{
            return service.post('product/updateProduct',params.data).then((response) => {
                const data = response.data
                console.log(data)
                data.id = data._id
                if(data.message){
                    throw new Error(data.message)
                }
                // const data = _.get(response.data, 'responses',{});
                return Promise.resolve({data:data})
            }).catch((err) => {
                return Promise.resolve({data:{err,id:-1}})
            });
        }
        case DELETE:{
            // return service.post('deleteProduct',params).then((response) => {
            //     const data = _.get(response, 'data',{});
            //     data.id = data._id
            //     if(data.message){
            //         throw new Error(data.message)
            //     }
            //     // const data = _.get(response.data, 'responses',{});
            //     return Promise.resolve({data:data})
            // }).catch((err) => {
            //     return Promise.resolve({data:{err,id:-1}})
            // });
        }
        case GET_MANY:{
            // return service.post('getShopFromArray',params).then((response) => {
            //     const data = _.get(response, 'data',{});
            //     data.id = data._id
            //     if(data.message){
            //         throw new Error(data.message)
            //     }
            //     // const data = _.get(response.data, 'responses',{});
            //     return Promise.resolve({data:data})
            // }).catch((err) => {
            //     return Promise.resolve({data:{err,id:-1}})
            // });
        }
        case GET_MANY_REFERENCE: {
            // return service.post('getProducts',params).then((response) => {
            //     const data = _.get(response.data, 'results',{});
            //     const total = _.get(response.data, 'count');

            //     data.forEach(element => {
            //         element.id = element._id
            //     });
            //     return Promise.resolve({
            //         data,
            //         total
            //     })
            //   }).catch((err) => {
            //     throw new Error(err);
            //   });
        }
        default:
            throw new Error(`Unsupported Data Provider request type ${type}`);
    }
}

export default ProductProvider