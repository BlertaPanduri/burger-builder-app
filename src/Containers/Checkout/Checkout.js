import React,{Component} from 'react';
import CheckoutSummary from '../../Components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../../Containers/Checkout/ContactData/ContactData.js';
import  {Route} from 'react-router-dom';

class Checkout extends Component{
    state={
        ingredients:null,
        price: 0
    }

    componentWillMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingredients1 = {};
        let price1 = 0;
        for( let param of query.entries()){
            // ['salad', '1' ]
            // ['price', '7']
            
            if(param[0] === 'price'){
                price1 = param[1]
            } else{
                ingredients1[param[0]] = +param[1]
            }
        }
        this.setState({ingredients: ingredients1, price: price1 })

    }

    checkoutCancelledHandler = () =>{
        this.props.history.goBack();
    }

    checkoutContinueHandler = () =>{
        this.props.history.replace('/checkout/contact-data')
    }
    render(){
        return(
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    checkoutCancelled = {this.checkoutCancelledHandler}
                    checkoutContinued = {this.checkoutContinueHandler}
                 
                />
                <Route path={this.props.match.path + '/contact-data'}
                render = {()=>(<ContactData ingredients = {this.state.ingredients} price={this.state.price}/>)}
                />
                </div>
        )
    }
}

export default Checkout;