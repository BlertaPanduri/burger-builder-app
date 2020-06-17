import React, { Component } from 'react';
import Burger from "../../Components/Burger/Burger.js";
import Auxiliary from "../../Hoc/Auxiliary";
import BuildControls from '../../Components/Burger/BuildControls/BuildControls.js';
import Modal from '../../Components/UI/Modal/Modal.js';
import OrderSummary from  '../../Components/Burger/OrderSummary/OrderSummary';
import axios from '../../Axios-orders.js';
import Spinner from '../../Components/UI/Spinner/Spinner.js';

const  INGREDIENTS_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.2
}


class BurgerBuilder extends Component{
    state ={
        ingredients: null,
        totalPrice: 1,
        purchased: false,
        purchasing: false

    }

    componentDidMount(){
        axios.get('https://burgerbuilder-b1092.firebaseio.com/ingredients.json')
        .then(response => {
            this.setState({ingredients: response.data})

        })
    }

    updatePurchaseState(ingredients1){
        const sum = Object.keys(ingredients1)
               .map(igKey =>{
                   return ingredients1[igKey]
               })
               .reduce((sum1,el) =>{
                   return sum1+el
               }, 0);
        this.setState({purchased: sum>0})
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = { ...this.state.ingredients};
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice})
        this.updatePurchaseState(updatedIngredients);
        

    }
    removeIngredientHandler =(type)=>{
        const oldCount = this.state.ingredients[type];
        if(oldCount <=0 ){
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;
        const price = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - price;
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice})
        this.updatePurchaseState(updatedIngredients);
    }
    purchaseHandler =()=>{
        this.setState({purchasing:true})

    }
    purchaseCancelHandler =()=>{
        this.setState({purchasing:false})

    }

    purchaseContinueHandler =() =>{
     //   alert('You continue!');
    //  const order={
    //      ingredients:this.state.ingredients,
    //      price:this.state.totalPrice,
    //      custumer:{
    //          name: "Blerta",
    //          email: "blertabajri@gmail.com",
    //          addres: "Syle Hasani"
    //      }
    // }
    // axios.post('/orders.json', order)
    // .then(response => console.log(response))
    // .catch(error => console.log(error))
    // this.props.history.push('/checkout')
    const queryParams = [];
    for(let i in this.state.ingredients ){
        queryParams.push(encodeURIComponent(i)+ '=' + encodeURIComponent(this.state.ingredients[i]))
    }
    queryParams.push('price'+this.state.totalPrice)
    const queryString = queryParams.join('&');
    this.props.history.push({
        pathname: '/checkout',
        search: '?' + queryString
    })
    }
       render(){
        const disableInfo = {...this.state.ingredients}
        for(let key in disableInfo){
             disableInfo[key] = disableInfo[key] <=0;
        }


        // {salad: true, meat:false, ..}
        let orderSummary = null;
        let burger = <Spinner/> 
        if(this.state.ingredients){
            burger = (
                <Auxiliary>
                <Burger ingredient= {this.state.ingredients}/>
                <BuildControls
                 ingredientsAdded = {this.addIngredientHandler}
                 ingredientsRemoved = {this.removeIngredientHandler}
                 disable2 ={disableInfo}
                 price ={this.state.totalPrice}
                 purchasable={this.state.purchased}
                 ordered={this.purchaseHandler}

                  />
                  </Auxiliary>
            )
            orderSummary = (
                <OrderSummary
                ingredients = {this.state.ingredients}
                price = {this.state.totalPrice}
                purchaseCancelled ={this.purchaseCancelHandler}
                purchaseContinued ={this.purchaseContinueHandler} />
            )
        }
        return(
            <Auxiliary>
                <Modal  show={this.state.purchasing} modalClosed = {this.purchaseCancelHandler}>
                   {orderSummary}
                </Modal>
                {burger}
        

            </Auxiliary>
        )

    }
}
export default BurgerBuilder;

 /**
  * onClick = added     added = ingredientsAdded        ingredientsAdded = addIngredientsHandler()
             */