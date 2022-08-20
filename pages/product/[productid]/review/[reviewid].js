import {useRouter} from 'next/router'
function Review(params) {

    const router = useRouter()
    const {reviewid,productid}=router.query
    return <h1>Review {reviewid} of product {productid}</h1>
}

export default Review;

