import React from 'react'
//import { useState, useEffect } from "react";
import { useState } from "react";
//import { getAll, getBalance, pay } from "../Services/CardServices";
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
//import {Paper} from '@material-ui/core';



const CardsForm = (props) => {
    
    
    //const [cards, setcards] = useState([]);
    const [amount, setAmount] = useState("");

    const [cardData, setcardData] = useState({
        card_secret: "",
        card_holder_name: "",
        card_number: "",
        card_validity: "",
        ccv_code: "",
        balance: ""
    
    });


    const [message, setMessage] = useState(false);

    //useEffect(()=>{
        //fetch("http://localhost:8070/creditcards/getAll")
        //.then(res=>res.json())
        //.then((result)=>{
         // setcards(result);
        //}
      //)
     // },[])


   
    
    

    const onChangeHandler = (event) =>{
        setcardData({
            ...cardData,
            [event.target.name]: event.target.value
        });
        
        setAmount({
            ...amount,
            [event.target.name]:event.target.value
        });  
    };


    const onSubmitHandler = (event) => {
        event.preventDefault();
        setMessage(true);
        const amounnt=amount
        //const card=cardData
        console.log(amounnt)
        //const found = cards.find(element => (element.card_secret===card.card_secret && element.card_holder_name === card.card_holder_name) &&  (element.card_number===card.card_number && element.card_validity===card.card_validity) && element.ccv_code===card.ccv_code);
        //if(found!==undefined){
             //if(found.balance<amounnt){
                //alert(` insufficient funds`);
            //}else{
                 //console.log(amounnt)
                 //alert(`SUCCES`)
           // }
        //}else{
            //alert(`ERROR`)
        //}
        
    };

   

    console.log('cardData', cardData)
    return(
        <div>
            <form onChange={onChangeHandler} onSubmit = {onSubmitHandler}>
                <label><h1>CARD TRANSACTION</h1></label><br/>
               
            <br/>
            <br/>
            <br/>
            
                    <TextField
                        id="outlined-name"
                        label="Secret Code Of Card"
                        name="card_secret"
                        value={cardData.card_secret}
                    />
                    <TextField
                        id="outlined-name"
                        label="Name of Card Holder"
                        name="card_holder_name"
                        value={cardData.card_holder_name}
                    />
                    <br/>
                    <TextField
                        id="outlined-name"
                        label="Card Number"
                        name="card_number"
                        value={cardData.card_number}
                    />
                    <TextField
                        id="outlined-name"
                        label="Validity of Card"
                        name="card_validity"
                        value={cardData.card_validity}
                    />
                    <br/> 
                    <TextField
                        id="outlined-name"
                        label="CCV code"
                        name="ccv_code"
                        value={cardData.ccv_code}
                    />
                    <TextField
                        id="outlined-name"
                        label="Balance"
                        name="balance"
                        value={cardData.balance}
                    />
                    <br/> 
                    <Button type = "submit" variant="contained" color="primary" onSubmit={onSubmitHandler}>
                        Submit
                    </Button>{message && <p>Good!!! your identification has been a success</p>}

            
                    
                </form>

                <div>

</div>

        </div>
    );
}

export default CardsForm;