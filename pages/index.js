import Link from "next/link";
import {useRouter} from 'next/router'



function Home(){

    const router=useRouter()
    const handleDelete=()=>{
        console.log('order placed');
        router.push('/product')
    }
    return (
     <div>
         <h1>Home page</h1>
        <Link href='/blog'><a><h2>Blog</h2></a>
        </Link>
        <Link href='/product'><a><h2>Product</h2></a>
        </Link>

        <button onClick={handleDelete}>
           place an order
        </button>
    </div>
    )
    

}

export default Home;