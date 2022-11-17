import axios from "axios";

const URL = "http://localhost:5000";

export const pay = async(credit) => {
    try{
        const dataReceived = await axios.post(
            URL + "/transactions/transaction.pay",
            credit
        );
        return dataReceived;
    }
    catch(err){
        console.log("error in the post request", err)
    }
    
};
export const getAll = async () => {
    try{
        const dataReceived = await axios.get(
            URL + "/creditcards/getAll"
        );
         return dataReceived;
    }
    catch(err) {
        console.log("error in the get request", err);
    }
};
export const getBalance = async () => {
    try{
        const dataReceived = await axios.get(
            URL + "/creditcards/creditcard.balance"
        );
         return dataReceived;
    }
    catch(err) {
        console.log("error in the get request", err);
    }
};

