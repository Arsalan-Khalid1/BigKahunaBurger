import React, {useState} from 'react';
import Auxil from '../../hoc/Auxil';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';


function BurgerBuilder(props) {

    const INGREDIENT_PRICES = {
        salad: 0.5,
        cheese: 0.8,
        bacon: 0.7,
        meat: 1.5
    };

    const [purchase, setPurchase] = useState(false);
    const [loading, setLoading] = useState(false);
    const [price, setPrice] = useState(0);

    const [ingredients, setIngredients] = useState({
        salad: 0,
        cheese: 0,
        bacon: 0,
        meat: 0
    });

    const [purchaseable, setPurchaseable] = useState(false);

    const purchaseHandler = () => {
        setPurchase(true);
    };

    const updatePurchaseable = (ingredient) => {
        const sum = Object.keys(ingredient).map(igKey => {
            return ingredient[igKey];
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);
        setPurchaseable(sum > 0);
    };

    const addIngredientsHandler = (type) => {
        const oldCount = ingredients[type];
        const updatedCount = oldCount + 1;
        ingredients[type] = updatedCount;
        const addedPrice = INGREDIENT_PRICES[type];
        setPrice(price + addedPrice);
        setIngredients ({...ingredients});
        updatePurchaseable(ingredients);
    };

    const removedIngredientsHandler = (type) => {
        const oldCount = ingredients[type];
        if(oldCount <= 0){
            return;
        }
        const updatedCount = oldCount - 1;
        ingredients[type] = updatedCount;
        const addedPrice = INGREDIENT_PRICES[type];
        setPrice(price - addedPrice);
        setIngredients ({...ingredients});
        updatePurchaseable(ingredients);
    };

    const purchaseClose = () => {
        setPurchase(false);
    };

     const purchaseContinueHandler = async () => {
        setLoading(true);
        const order = {
            Ingredients : ingredients,
            Price : price,
            Customer : {
                Name : "Arsalan Khalid",
                Address : {
                    Street : "Grove St.",
                    ZipCode : "54000",
                    Country : "USA"
                },
                email : "arslankhalid889@gmail.com"
            },
            DeliveryMethod : "Uber Bike"
        };

        try {
            const response = await axios.post('/orders.json', order);
            console.log(response);
            setLoading(false);
            setPurchase(false);
        }
        catch(error) {
            console.log(error);
            setLoading(false);
            setPurchase(false)
        }
    };

    
    const disabledInfo = {...ingredients};
    for(let key in disabledInfo){
        disabledInfo[key] = disabledInfo[key] <= 0;
    };

    let orderSummary = <OrderSummary ingredients={ingredients} 
                    purchaseCancel = {purchaseClose}
                    purchaseContinue = {purchaseContinueHandler}
                    price = {price}
                />;
    if(loading){
        orderSummary = <Spinner/>;
    }

    return (
        <Auxil>
            <Modal show={purchase} modalClosed={purchaseClose}>
                {orderSummary}
            </Modal>
            <Burger ingredients = {ingredients}/>
            <BuildControls 
            ingredientAdded = {addIngredientsHandler}
            ingredientRemoved = {removedIngredientsHandler}
            price = {price}
            disabled = {disabledInfo}
            pdisabled = {purchaseable}
            ordered = {purchaseHandler}
            /> 
        </Auxil>
    );
};

export default BurgerBuilder;
