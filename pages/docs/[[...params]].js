import {useRouter} from 'next/router'
function Docs() {

    const router=useRouter()

    const {params=[]}=router.query
    console.log(params)

    if (params[1]>1){
     
        return <h1>viewing docs of {params[0]} and concepts of {params[1]}</h1>
    }
    else if (params.length === 1) {

        return <h1>viewing docs of {params[0]}</h1>
    }
    else if (params[1]>100) {

        
        return <h1>no docs available</h1>

    }
    return <h1>Docs page</h1>
}

export default Docs;