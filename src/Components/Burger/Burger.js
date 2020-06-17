import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients.js';
import classes from './Burger.module.css';

const Burger=(props) =>{
    let transformedIngredients = Object.keys(props.ingredient).map(igKey=>{
        return [...Array(props.ingredient[igKey])].map((_, i) =>{
            return <BurgerIngredients type={igKey} key={igKey + i} />
          });
    }).reduce( (arr, el) =>{ return arr.concat(el)}, []);

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients.</p>
    }
       
   /** 
   [salad, cheese, meat]

   map i pare t'i kthen vargjet e zbrazeta me gjatesi sa eshte numri i vetise perkatese [ , ]   [ , , ]   [ ]
   
   map i dyte i mbush vargjet e zbrazeta me komponente te tipit perkates  BurgerIngredients
   <BurgerIngredients type={salad}/>
   <BurgerIngredients type={salad}/> 

   <BurgerIngredients type={cheese}/>
   <BurgerIngredients type={cheese}/>
   <BurgerIngredients type={cheese}/>

   <BurgerIngredients type={meat}/>  
   */
    

    return( 


    <div className ={classes.Burger}>
        <BurgerIngredients type="bread-top"/>
           {transformedIngredients}
        <BurgerIngredients type="bread-bottom"/>


    </div>
    )
}
export default Burger;