import React, { Component } from 'react';
import Button from '../../../Components/UI/Button/Button';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import classes from './ContactData.module.css';
import axios from '../../../Axios-orders';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }


    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Blerta Panduri',
                email: 'blertabajri@gmail.com',
                address: {
                    street: 'Syle Hasani',
                    postalCode: '30000'
                }
            }
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false });

            })
            .catch(error => {
                this.setState({ loading: false })
            })
    }

    render() {
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder=" Your Name "></input>
                <input className={classes.Input} type="email" name="email" placeholder="Your Mail"></input>
                <input className={classes.Input} type="text" name="street" placeholder="Street" ></input>
                <input className={classes.Input} type="text" name="postal" placeholder="Postal Code"></input>
                <Button btnType="Success" clicked={this.orderHandler}> ORDER </Button>
            </form>
        )
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.contactData}>
                <h4> Enter your Contact Data</h4>
                {form}
            </div>
        )
        }

}

export default ContactData;

