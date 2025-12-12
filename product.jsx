import React from 'react'; 
import { AiOutlineCloseCircle, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart} from 'react-icons/ai';
import Productdetails from './productdetails';
import { useAuth0 } from "@auth0/auth0-react";
import './product.css';

const Product = ({product, setProduct, detail, view, close, setClose, addtocart}) => {
   const { loginWithRedirect,  isAuthenticated } = useAuth0();

    const filtterproduct = (product) =>
    {
       const update = Productdetails.filter((x) =>
        {
         return  x.cat === product;   
       } ) 
       setProduct(update);
    }
    const AllProducts = () =>
    {
       setProduct(Productdetails) 
    }
  return (
    <>
    {
      close ?
      <div className='product_detail'>
      <div className='container'>
        <button onClick={() => setClose(false)} className='closebtn'><AiOutlineCloseCircle/></button>
          {
              detail.map((curElm) => 
                  {
                   return(
                      <div className='productbox'>
                          <div className='img_box'>
                              <img src={curElm.Img} alt={curElm.Title}></img>
                          </div>
                          <div className='detail'>
                              <h4>{curElm.cat}</h4>
                              <h2>{curElm.Title}</h2>
                              <p>A Screen Everyone will Love: Whether your family is streaming or video chatting with friends tablet A8... </p>
                              <h3>{curElm.Prize}</h3>
                              <button>Add To Cart</button>
                          </div>
                      </div>
                   )  
              })
          }
       <div className='productbox'></div>
      </div>
  </div> :null
    }
   
      <div className='products'>
      <h2># PRODUCTS</h2>
      <p>Home . Products</p>
        <div className='container'>
          <div className='filter'>
            <div className='categories'>
              <h3>Categories</h3>
              <ul>
              <li onClick={() => AllProducts ()}>All Products</li>
                <li onClick={() => filtterproduct ("Tablet")}>Tablet</li>
                <li onClick={() => filtterproduct ("Smart Watch")}>Smart Watch</li>
                <li onClick={() => filtterproduct ("HeadPhone")}>HeadPhone</li>
                <li onClick={() => filtterproduct ("Camera")}>Camera</li>
                <li onClick={() => filtterproduct ("Gaming")}>Gaming</li>
              </ul>
            </div>
          </div>

          <div className='productbox'>
            <div className='contant'>
              {
              product.map((curElm) => {
                return (
                  <div className='box' key={curElm.id}>
                    <div className='img_box'>
                      <img src={curElm.Img} alt={curElm.Title} />
                      <div className='icon'>
                        {
                           isAuthenticated ?
                           <li onClick={()=> addtocart (curElm)}><AiOutlineShoppingCart /></li>
                           :
                           <li onClick={()=> loginWithRedirect()}><AiOutlineShoppingCart /></li>
                        }
                      
                        <li onClick={() => view(curElm)}><BsEye /></li>
                        <li><AiOutlineHeart /></li>
                      </div>
                    </div>
                    <div className='detail'>
                      <p>{curElm.cat}</p>
                      <h3>{curElm.Title}</h3>
                      <h4>${curElm.Prize}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
