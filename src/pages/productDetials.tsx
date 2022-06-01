import React,{useState, useEffect} from 'react';
import { getProducts } from "../services/getProduct";
import {useParams} from 'react-router-dom';
import ProductDetialsCard from "./productDetialsCard";
import Layout from "@components/Layout";


const  productDetials = ({ location }) =>{
  const [items, setItems] = useState([]);

 useEffect(() => {
        getProducts().then((response) => {
        setItems(response.data.products);
      });
  }, []);

  var path= location.pathname;
  var productId=path.split('/')[path.split('/').length-1].split('?')[0].split('#')[0];
  var productw = items.find((ele) =>  ele.id == productId);
      console.log(productw)
  const product =items.map(function(element){
    if(element.id == productId){
        return  <ProductDetialsCard product ={element}  key={element.id}/>
              }});


  return (
    <Layout>
      {product}      
    </Layout>
  )
}
export default productDetials