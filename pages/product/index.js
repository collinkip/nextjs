import Link from "next/link";
function ProductList({productid=100}) {
    return(
        <>
        <Link href='/'><a><h2>Home</h2></a>
        </Link>
        <h1><Link href="/product/1">
        <a >Product 1</a>
        </Link>
        </h1>
        <h1><Link href="/product/2">
        <a >Product 2</a>
        </Link>
        </h1>
        <h1><Link  href="/product/3" replace>
        <a>Product 3</a>
        </Link>
        </h1>
        <h1><Link  href={`/product/${productid}`}>
        <a>Product {productid}</a>
        </Link>
        </h1>
        
        
        </>
    )
}
export default ProductList;