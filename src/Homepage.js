import { useHistory } from "react-router-dom";


function Homepage () {

    const history = useHistory();

    const pizzaRoute = () => {
        history.push('/pizza')
    }


    return (
        <div>
        <section id="pizza-header">
        <center>
            <h3>YOUR FAVORITE FOOD, DELIVERED WHILE CODING</h3>
            <button id='order-pizza' onClick={pizzaRoute}>Pizza?</button>
        </center>
        </section> 
        <section id="six-images" class="bgimg">
        <div>
            <img src="https://media.istockphoto.com/photos/food-backgrounds-table-filled-with-large-variety-of-food-picture-id1155240408" alt="McDonald's photo"/>
            <h3>McDonald's</h3>
                <p> $ - American - Fast Food - Burgers</p>
                <button>20-30 Min</button>
                <button>$5.99 Delivery Fee</button>
        </div>
        <div>
            <img src="https://media.istockphoto.com/photos/food-backgrounds-table-filled-with-large-variety-of-food-picture-id1155240408" alt="Sweetgreen photo"/>
            <h3>Sweetgreen</h3>
                <p> $ - Healthy - Salads</p>
                <button>30-40 Min</button>
                <button>$4.99 Delivery Fee</button>
        </div>
        <div>
            <img src="https://media.istockphoto.com/photos/food-backgrounds-table-filled-with-large-variety-of-food-picture-id1155240408" alt="Starbuck's photo"/>
            <h3>Starbuck's</h3>
                <p> $ - Cafe - Coffee & Tea - Breakfast</p>
                <button>10-20 Min</button>
                <button>$3.99 Delivery Fee</button>
        </div>
        <div>
            <img src="https://media.istockphoto.com/photos/food-backgrounds-table-filled-with-large-variety-of-food-picture-id1155240408"/>
        </div>
        <div>
            <img src="https://media.istockphoto.com/photos/food-backgrounds-table-filled-with-large-variety-of-food-picture-id1155240408"/>
        </div>
        <div>
            <img src="https://media.istockphoto.com/photos/food-backgrounds-table-filled-with-large-variety-of-food-picture-id1155240408"/>
        </div>
        </section> 
        </div>
    )
}

export default Homepage