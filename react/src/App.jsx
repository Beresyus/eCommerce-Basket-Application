// JSX
import { useState } from "react";

// Product Images
import firstProduct from "./assets/img/cart/1.jpg";
import secondProduct from "./assets/img/cart/2.jpg";
import thirdProduct from "./assets/img/cart/3.jpg";
// Logo Images
import secondLogo from "./assets/img/logo/2.png";
import eighteenBanner from "./assets/img/banner/18.jpg";
// Background Images
import bgImage from "./assets/img/bg/breadcrumb.jpg";
import bgImage1 from "./assets/img/bg/1.jpg";

function App() {
    const [basket, setBasket] = useState([
        {
            id: 1,
            name: "Blue Coat Dress",
            asset: firstProduct,
            price: 165.00,
            quantity: 1
        }, {
            id: 2,
            name: "Blue Shirt",
            asset: secondProduct,
            price: 150.00,
            quantity: 1
        } , {
            id: 3,
            name: "Green Waistcoat",
            asset: thirdProduct,
            price: 150.00,
            quantity: 1
        }
    ]);

    const handleRemoveItem = (id) => {
        const filteredArray = basket.filter(item => item.id !== id);
        setBasket(filteredArray);
    };
    const handleChangeQuantity = (ev, id) => {
        const updatedBasket = basket.map (
            item => {
                if (item.id === id) return { ...item, quantity: parseInt(ev.target.value) };
                return item;
            }
        );
        setBasket(updatedBasket);
    };

    return (
        <>
            <header>
                <div className="header-top-furniture wrapper-padding-2 res-header-sm">
                    <div className="container-fluid">
                        <div className="header-bottom-wrapper">
                            <div className="logo-2 furniture-logo ptb-30">
                                <a href="index.html">
                                    <img src={secondLogo} alt="" />
                                </a>
                            </div>
                            <div className="menu-style-2 furniture-menu menu-hover">
                                <nav>
                                    <ul>
                                        <li>
                                            <a href="#">home</a>
                                            <ul className="single-dropdown">
                                                <li>
                                                    <a href="index.html">Fashion</a>
                                                </li>
                                                <li>
                                                    <a href="index-fashion-2.html">Fashion style 2</a>
                                                </li>
                                                <li>
                                                    <a href="index-fruits.html">fruits</a>
                                                </li>
                                                <li>
                                                    <a href="index-book.html">book</a>
                                                </li>
                                                <li>
                                                    <a href="index-electronics.html">electronics</a>
                                                </li>
                                                <li>
                                                    <a href="index-electronics-2.html">electronics style 2</a>
                                                </li>
                                                <li>
                                                    <a href="index-food.html">food &amp; drink</a>
                                                </li>
                                                <li>
                                                    <a href="index-furniture.html">furniture</a>
                                                </li>
                                                <li>
                                                    <a href="index-handicraft.html">handicraft</a>
                                                </li>
                                                <li>
                                                    <a target="_blank" href="index-smart-watch.html">
                                                        smart watch
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="index-sports.html">sports</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">pages</a>
                                            <ul className="single-dropdown">
                                                <li>
                                                    <a href="about-us.html">about us</a>
                                                </li>
                                                <li>
                                                    <a href="menu-list.html">menu list</a>
                                                </li>
                                                <li>
                                                    <a href="login.html">login</a>
                                                </li>
                                                <li>
                                                    <a href="register.html">register</a>
                                                </li>
                                                <li>
                                                    <a href="cart.html">cart page</a>
                                                </li>
                                                <li>
                                                    <a href="checkout.html">checkout</a>
                                                </li>
                                                <li>
                                                    <a href="wishlist.html">wishlist</a>
                                                </li>
                                                <li>
                                                    <a href="#footer-contact">contact</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="shop.html">shop</a>
                                            <div className="category-menu-dropdown shop-menu">
                                                <div className="category-dropdown-style category-common2 mb-30">
                                                    <h4 className="categories-subtitle"> shop layout</h4>
                                                    <ul>
                                                        <li>
                                                            <a href="shop-grid-2-col.html"> grid 2 column</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-grid-3-col.html"> grid 3 column</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop.html">grid 4 column</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-grid-box.html">grid box style</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-list-1-col.html"> list 1 column</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-list-2-col.html">list 2 column</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-list-box.html">list box style</a>
                                                        </li>
                                                        <li>
                                                            <a href="cart.html">shopping cart</a>
                                                        </li>
                                                        <li>
                                                            <a href="wishlist.html">wishlist</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="category-dropdown-style category-common2 mb-30">
                                                    <h4 className="categories-subtitle"> product details</h4>
                                                    <ul>
                                                        <li>
                                                            <a href="product-details.html">tab style 1</a>
                                                        </li>
                                                        <li>
                                                            <a href="product-details-2.html">tab style 2</a>
                                                        </li>
                                                        <li>
                                                            <a href="product-details-3.html"> tab style 3</a>
                                                        </li>
                                                        <li>
                                                            <a href="product-details-4.html">sticky style</a>
                                                        </li>
                                                        <li>
                                                            <a href="product-details-5.html">sticky style 2</a>
                                                        </li>
                                                        <li>
                                                            <a href="product-details-6.html">gallery style</a>
                                                        </li>
                                                        <li>
                                                            <a href="product-details-7.html">gallery style 2</a>
                                                        </li>
                                                        <li>
                                                            <a href="product-details-8.html">fixed image style</a>
                                                        </li>
                                                        <li>
                                                            <a href="product-details-9.html">
                                                                fixed image style 2
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="mega-banner-img">
                                                    <a href="single-product.html">
                                                        <img src={eighteenBanner} alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="blog.html">blog</a>
                                            <ul className="single-dropdown">
                                                <li>
                                                    <a href="blog.html">blog 3 colunm</a>
                                                </li>
                                                <li>
                                                    <a href="blog-2-col.html">blog 2 colunm</a>
                                                </li>
                                                <li>
                                                    <a href="blog-sidebar.html">blog sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="blog-details.html">blog details</a>
                                                </li>
                                                <li>
                                                    <a href="blog-details-sidebar.html">blog details 2</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#footer-contact">contact</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="header-cart">
                                <a className="icon-cart-furniture" href="#">
                                    <i className="ti-shopping-cart" />
                                    <span className="shop-count-furniture green">{basket.length}</span>
                                </a>
                                <ul className="cart-dropdown">
                                    {
                                        basket.map (
                                            (product, index) => {
                                                return(
                                                    <li key={index} className="single-product-cart">
                                                        <div className="cart-img">
                                                            <a href="#">
                                                                <img src={product.asset} alt="" />
                                                            </a>
                                                        </div>
                                                        <div className="cart-title">
                                                            <h5>
                                                                <a href="#">{product.name}</a>
                                                            </h5>
                                                            <h6>
                                                                <a href="#">Black</a>
                                                            </h6>
                                                            <span>${product.price.toFixed(2)} x {product.quantity}</span>
                                                        </div>
                                                        <div className="cart-delete">
                                                            <a href="#" onClick={() => handleRemoveItem(product.id)}>
                                                                <i className="ti-trash" />
                                                            </a>
                                                        </div>
                                                    </li>
                                                );
                                            }
                                        )
                                    }
                                    <li className="cart-space">
                                        <div className="cart-sub">
                                            <h4>Subtotal</h4>
                                        </div>
                                        <div className="cart-price">
                                            <h4>$ {basket.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h4>
                                        </div>
                                    </li>
                                    <li className="cart-btn-wrapper">
                                        <a className="cart-btn btn-hover" href="#">
                                            view cart
                                        </a>
                                        <a className="cart-btn btn-hover" href="#">
                                            checkout
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="mobile-menu-area d-md-block col-md-12 col-lg-12 col-12 d-lg-none d-xl-none">
                                <div className="mobile-menu">
                                    <nav id="mobile-menu-active">
                                        <ul className="menu-overflow">
                                            <li>
                                                <a href="#">HOME</a>
                                                <ul>
                                                    <li>
                                                        <a href="index.html">Fashion</a>
                                                    </li>
                                                    <li>
                                                        <a href="index-fashion-2.html">Fashion style 2</a>
                                                    </li>
                                                    <li>
                                                        <a href="index-fruits.html">Fruits</a>
                                                    </li>
                                                    <li>
                                                        <a href="index-book.html">book</a>
                                                    </li>
                                                    <li>
                                                        <a href="index-electronics.html">electronics</a>
                                                    </li>
                                                    <li>
                                                        <a href="index-electronics-2.html">
                                                            electronics style 2
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="index-food.html">food &amp; drink</a>
                                                    </li>
                                                    <li>
                                                        <a href="index-furniture.html">furniture</a>
                                                    </li>
                                                    <li>
                                                        <a href="index-handicraft.html">handicraft</a>
                                                    </li>
                                                    <li>
                                                        <a href="index-smart-watch.html">smart watch</a>
                                                    </li>
                                                    <li>
                                                        <a href="index-sports.html">sports</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">pages</a>
                                                <ul>
                                                    <li>
                                                        <a href="about-us.html">about us</a>
                                                    </li>
                                                    <li>
                                                        <a href="menu-list.html">menu list</a>
                                                    </li>
                                                    <li>
                                                        <a href="login.html">login</a>
                                                    </li>
                                                    <li>
                                                        <a href="register.html">register</a>
                                                    </li>
                                                    <li>
                                                        <a href="cart.html">cart page</a>
                                                    </li>
                                                    <li>
                                                        <a href="checkout.html">checkout</a>
                                                    </li>
                                                    <li>
                                                        <a href="wishlist.html">wishlist</a>
                                                    </li>
                                                    <li>
                                                        <a href="#footer-contact">contact</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">shop</a>
                                                <ul>
                                                    <li>
                                                        <a href="shop-grid-2-col.html"> grid 2 column</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-grid-3-col.html"> grid 3 column</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">grid 4 column</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-grid-box.html">grid box style</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-list-1-col.html"> list 1 column</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-list-2-col.html">list 2 column</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-list-box.html">list box style</a>
                                                    </li>
                                                    <li>
                                                        <a href="product-details.html">tab style 1</a>
                                                    </li>
                                                    <li>
                                                        <a href="product-details-2.html">tab style 2</a>
                                                    </li>
                                                    <li>
                                                        <a href="product-details-3.html"> tab style 3</a>
                                                    </li>
                                                    <li>
                                                        <a href="product-details-4.html">sticky style</a>
                                                    </li>
                                                    <li>
                                                        <a href="product-details-5.html">sticky style 2</a>
                                                    </li>
                                                    <li>
                                                        <a href="product-details-6.html">gallery style</a>
                                                    </li>
                                                    <li>
                                                        <a href="product-details-7.html">gallery style 2</a>
                                                    </li>
                                                    <li>
                                                        <a href="product-details-8.html">fixed image style</a>
                                                    </li>
                                                    <li>
                                                        <a href="product-details-9.html">fixed image style 2</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">BLOG</a>
                                                <ul>
                                                    <li>
                                                        <a href="blog.html">blog 3 colunm</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-2-col.html">blog 2 colunm</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-sidebar.html">blog sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-details.html">blog details</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-details-sidebar.html">blog details 2</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#footer-contact"> Contact</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom-furniture wrapper-padding-2 border-top-3">
                    <div className="container-fluid">
                        <div className="furniture-bottom-wrapper">
                            <div className="furniture-login">
                                <ul>
                                    <li>
                                        Get Access: <a href="login.html">Login as User 1</a>
                                    </li>
                                    <li>
                                        <a href="register.html">Login as User 2</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="furniture-search">
                                <form action="">
                                    <input type="text" name="s" placeholder="I am Searching for . . ." />
                                    <button>
                                        <i className="ti-search" />
                                    </button>
                                </form>
                            </div>
                            <div className="furniture-wishlist">
                                <ul>
                                    <li>
                                        <a
                                            data-bs-toggle="modal"
                                            data-target="#exampleCompare"
                                            href="#"
                                        >
                                            <i className="ti-reload" /> Compare
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="ti-heart" /> Wishlist
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="breadcrumb-area pt-205 pb-210" style={{ backgroundImage: "url("+bgImage+")" }}>
                <div className="container">
                    <div className="breadcrumb-content text-center">
                        <h2>cart page</h2>
                        <ul>
                            <li>
                                <a href="#">home</a>
                            </li>
                            <li> cart page</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="cart-main-area pt-95 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h1 className="cart-heading">Cart</h1>
                            <form action="#">
                                <div className="table-content table-responsive">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>remove</th>
                                                <th>images</th>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                basket.map(
                                                    (item, index) => {
                                                        return (
                                                            <tr id={"basket"} key={index}>
                                                                <td className="product-remove">
                                                                    <button
                                                                        onClick={() => handleRemoveItem(item.id)}
                                                                        style={{background: "none", border: "none"}}
                                                                    >
                                                                        <i className="pe-7s-close" />
                                                                    </button>
                                                                </td>
                                                                <td className="product-thumbnail">
                                                                    <a href="#">
                                                                        <img src={item.asset} alt="" />
                                                                    </a>
                                                                </td>
                                                                <td className="product-name">
                                                                    <a href="#">{item.name}</a>
                                                                </td>
                                                                <td className="product-price-cart">
                                                                    <span className="amount">${item.price}</span>
                                                                </td>
                                                                <td className="product-quantity">
                                                                    <input
                                                                        defaultValue={item.quantity}
                                                                        onChange={() => handleChangeQuantity(event, item.id)}
                                                                        min={1}
                                                                        type={"number"}
                                                                    />
                                                                </td>
                                                                <td className="product-subtotal">
                                                                    ${(item.price * item.quantity).toFixed(2)}
                                                                </td>
                                                            </tr>
                                                        );
                                                    }
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="coupon-all">
                                            <div className="coupon">
                                                <input
                                                    id="coupon_code"
                                                    className="input-text"
                                                    name="coupon_code"
                                                    defaultValue=""
                                                    placeholder="Coupon code"
                                                    type="text"
                                                />
                                                <input
                                                    className="button"
                                                    name="apply_coupon"
                                                    defaultValue="Apply coupon"
                                                    type="submit"
                                                />
                                            </div>
                                            <div className="coupon2">
                                                <input
                                                    className="button"
                                                    name="update_cart"
                                                    defaultValue="Update cart"
                                                    type="submit"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-5 ms-auto">
                                        <div className="cart-page-total">
                                            <h2>Cart totals</h2>
                                            <ul>
                                                <li>
                                                    Subtotal<span>{basket.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
                                                </li>
                                                <li>
                                                    Total<span>{basket.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
                                                </li>
                                            </ul>
                                            <a href="#">Proceed to checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer-area">
                <div
                    className="footer-top-area bg-img pt-105 pb-65"
                    style={{ backgroundImage: "url("+bgImage1+")" }}
                    data-overlay={9}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-md-3">
                                <div className="footer-widget mb-40">
                                    <h3 className="footer-widget-title">Custom Service</h3>
                                    <div className="footer-widget-content">
                                        <ul>
                                            <li>
                                                <a href="cart.html">Cart</a>
                                            </li>
                                            <li>
                                                <a href="register.html">My Account</a>
                                            </li>
                                            <li>
                                                <a href="login.html">Login</a>
                                            </li>
                                            <li>
                                                <a href="register.html">Register</a>
                                            </li>
                                            <li>
                                                <a href="#">Support</a>
                                            </li>
                                            <li>
                                                <a href="#">Track</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-3">
                                <div className="footer-widget mb-40">
                                    <h3 className="footer-widget-title">Categories</h3>
                                    <div className="footer-widget-content">
                                        <ul>
                                            <li>
                                                <a href="shop.html">Dress</a>
                                            </li>
                                            <li>
                                                <a href="shop.html">Shoes</a>
                                            </li>
                                            <li>
                                                <a href="shop.html">Shirt</a>
                                            </li>
                                            <li>
                                                <a href="shop.html">Baby Product</a>
                                            </li>
                                            <li>
                                                <a href="shop.html">Mans Product</a>
                                            </li>
                                            <li>
                                                <a href="shop.html">Leather</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="footer-widget mb-40">
                                    <h3 id="footer-contact" className="footer-widget-title">Contact</h3>
                                    <div className="footer-newsletter">
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum is dummy.
                                        </p>
                                        <div id="mc_embed_signup" className="subscribe-form pr-40">
                                            <form
                                                action="https://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"
                                                method="post"
                                                id="mc-embedded-subscribe-form"
                                                name="mc-embedded-subscribe-form"
                                                className="validate"
                                                target="_blank"
                                                noValidate=""
                                            >
                                                <div id="mc_embed_signup_scroll" className="mc-form">
                                                    <input
                                                        type="email"
                                                        defaultValue=""
                                                        name="EMAIL"
                                                        className="email"
                                                        placeholder="Enter Your E-mail"
                                                        required=""
                                                    />
                                                    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                                                    <div className="mc-news" aria-hidden="true">
                                                        <input
                                                            type="text"
                                                            name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef"
                                                            tabIndex={-1}
                                                            defaultValue=""
                                                        />
                                                    </div>
                                                    <div className="clear">
                                                        <input
                                                            type="submit"
                                                            defaultValue="Subscribe"
                                                            name="subscribe"
                                                            id="mc-embedded-subscribe"
                                                            className="button"
                                                        />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="footer-contact">
                                            <p>
                    <span>
                      <i className="ti-location-pin" />
                    </span>{" "}
                                                77 Seventh avenue USA 12555.{" "}
                                            </p>
                                            <p>
                    <span>
                      <i className=" ti-headphone-alt " />
                    </span>{" "}
                                                +88 (015) 609735 or +88 (012) 112266
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom black-bg ptb-20">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <div className="copyright">
                                    <p>
                                        Copyright ©<a href="hastech.company/">HasTech</a> 2022 . All
                                        Right Reserved.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default App;
