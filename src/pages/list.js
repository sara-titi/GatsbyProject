import React ,{useEffect , useState ,useCallback} from 'react'
import Layout from '../components/Layout'
import axios from 'axios';
import Product from '../components/card'

const ListItems= () => {
    const  [state, setstate] = useState([])

    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');

      useEffect(() => {
       
          const url ='https://dummyjson.com/products'
            // fetch()
            //   fetch({url})
            //  .then(response => response.json())
            //  .then(response => {
            //      // do something with data
            //      console.log(response)
            //     // setstate(response)

            //  })

           
            // axios
            axios({url})
            .then(response => {
               // do something with JSON response data
               console.log(response)
               setstate(response.data.products)
            })


      }, [])
    //   const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;

    //   const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
      
    //   const currentPosts = this.state.posts.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <Layout>
    <h2>List of Products</h2><br/>
   <div>
        {state.map(item=>{return <Product key ={item.id} id={item.id}    title={item.title} 
                                          description={item.description} price={item.price}  
                                          discountPercentage={item.discountPercentage} />
                        })}
   </div>
  
       
  
            
    </Layout>
  );
}
 
export default ListItems