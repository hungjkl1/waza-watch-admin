import ProductProvider from "./productProvider";
import BrandProvider from "./brandProvider";
import CategoryProvider from "./categoryProvider";
import BillProvider from "./billProvider";
import BillDetailProvider from "./billDetail";


export default (type,resource,params) => {
    console.log(resource)
    console.log(type)
    console.log(params)
    switch (resource) {
        case 'products':
            return ProductProvider(type,params)
        case 'brands':
            return BrandProvider(type,params)
        case 'categories':
            return CategoryProvider(type,params)
        case 'bills':
            return BillProvider(type,params)
        case 'billDetails':
                return BillDetailProvider(type,params);
        default:
            throw new Error('Not support');
    }
}