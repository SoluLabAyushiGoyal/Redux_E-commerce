import React from 'react';
import { Link } from'react-router-dom';

const HeaderBottom = () => {
    return (
        <div class="header-bottom">
			<div class="container">
				<div class="row">
					<div class="col-sm-9">
						<div class="navbar-header">
							<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
								<span class="sr-only">Toggle navigation</span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</button>
						</div>
						<div class="mainmenu pull-left">
							<ul class="nav navbar-nav collapse navbar-collapse">
								<li><a href="index.html">Home</a></li>
								<li class="dropdown"><a href="#" class="active">Shop<i class="fa fa-angle-down"></i></a>
                                    <ul role="menu" class="sub-menu">
                                        <li><a href="shop.html" class="active"><Link to="/products">Products</Link></a></li>
										<li><a href="product-details.html"><Link to="/productdetail">Product Details</Link></a></li> 
										<li><a href="checkout.html"><Link to="/checkout">Checkout</Link></a></li> 
										<li><a href="cart.html"><Link to="/cart">Cart</Link></a></li> 
										<li><a href="login.html"><Link to="/login">Login</Link></a></li> 
                                    </ul>
                                </li> 
								<li class="dropdown"><a href="#">Blog<i class="fa fa-angle-down"></i></a>
                                    <ul role="menu" class="sub-menu">
                                        <li><a href="blog.html"><Link to="/bloglist">Blog List</Link></a></li>
										<li><a href="blog-single.html"><Link to="/blogsingle">Blog Single</Link></a></li>
                                    </ul>
                                </li> 
								<li><a href="404.html"><Link to="/404">404</Link></a></li>
								<li><a href="contact-us.html"><Link to="/contactus">Contact</Link></a></li>
							</ul>
						</div>
					</div>
					<div class="col-sm-3">
						<div class="search_box pull-right">
							<input type="text" placeholder="Search"/>
						</div>
					</div>
				</div>
				</div>
			</div>
    );
}

export default HeaderBottom;