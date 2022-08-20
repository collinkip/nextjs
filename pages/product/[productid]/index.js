import {useRouter} from 'next/router'
function ProductDetail(params) {

    const router = useRouter()
    const productid=router.query.productid
    return <h1>Details of product {productid}</h1>
}

export default ProductDetail;

