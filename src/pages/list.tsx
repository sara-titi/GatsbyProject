import React ,{useEffect , useState ,useCallback} from 'react'
import Layout from '@components/Layout';
import axios from 'axios';
import Product from '@components/Card';
// import Product from '../components/Card/card'

interface Item {
  id: number;
  title: string;
  description:string;
  price:number;
  discountPercentage:number;
}

const ListItems: React.FC = () => {
  
  const [item, setItem] = useState<Item[]>([]);

    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');

      useEffect(() => {
          const url ='https://dummyjson.com/products'
            // axios
            axios({url})
            .then(response => {
               // do something with JSON response data
               console.log(response)
               setItem(response.data.products)
            })
      }, [])
  
  return (
    <Layout>
    <h2>List of Products</h2><br/>
   <div>
        {item.map(item=>{return <Product key ={item.id} id={item.id}    title={item.title} 
                                          description={item.description} price={item.price}  
                                          discountPercentage={item.discountPercentage} 
                                          />
                        })}
   </div>
  
       
  
            
    </Layout>
  );
}
 
export default ListItems