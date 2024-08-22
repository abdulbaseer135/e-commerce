import React, { useEffect, useState,useContext} from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { AppContext } from '../../AppContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(AppContext);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true); 
    }, []);

    return (
        <div className={`productdisplay ${animate ? 'animate' : ''}`}>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.title}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        ${product.price}
                    </div>
                    <div className="productdisplay-right-price-new">
                        ${product.price}
                    </div>
                </div>
                <div className="productdisplay-right-description">
                    A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div><button>S</button> </div>
                        <div><button>M</button> </div>
                        <div><button>L</button> </div>
                        <div><button>XL</button> </div>
                        <div><button>XXL</button></div>
                    </div>
                </div>
                <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
                <p className="productdisplay-right-category"><span>Category: T-Shirt, Crop Top</span></p>
                <p className="productdisplay-right-category"><span>Tag: Modern, Latest</span></p>
            </div>
        </div>
    )
}

export default ProductDisplay;
