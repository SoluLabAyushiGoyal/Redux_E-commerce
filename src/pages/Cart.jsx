import Header from './Header/Header';
import Footer from './Footer/Footer';
import CartProducts from "../cart/CartProducts";
import CartNext from "../cart/CartNext";
//import list from '../SideBar/ProductProductDisplayArray';

const Cart =() => {
    return(
        <>

		<Header/>
        <section id="cart_items">
		<div class="container">
			<div class="breadcrumbs">
				<ol class="breadcrumb">
				  <li><a href="#">Home</a></li>
				  <li class="active">Shopping Cart</li>
				</ol>
			</div>
			<div class="table-responsive cart_info">
				<table class="table table-condensed">
					<thead>
						<tr class="cart_menu">
							<td class="image">Item</td>
							<td class="description"></td>
							<td class="price">Price</td>
							<td class="quantity">Quantity</td>
							<td class="total">Total</td>
							<td></td>
						</tr>
					</thead>
					<tbody>
					<CartProducts/>
                    </tbody>
		</table>
		</div>
		</div>
	</section> 
		<CartNext/>
		<Footer/>
        </>
        
    );
}

export default Cart;