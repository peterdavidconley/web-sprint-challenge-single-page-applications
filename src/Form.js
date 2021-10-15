import React, { useState } from 'react'

function PizzaForm () {

    return(
        <div className='form-container'>
        <center>
        <form id='pizza-form' >
            <div className='errors'>
                {/* <div>{errors.size}</div>
                <div>{errors['name-input']}</div>
                <div>{errors['special-text']}</div>
                <div>{errors.pepperoni}</div>
                <div>{errors.onions}</div>
                <div>{errors.bacon}</div>
                <div>{errors.olives}</div> */}
            </div>
            <div><h3>Build your own pizza</h3></div>
            <div>
                <h4>Choice of Size</h4>
                <label>
                    <select 
                    name="size" 
                    id="size-dropdown"
                    //onChange={onChange}
                    //value={values.size}
                    >
                        <option value=''>- Select an option -</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </label>
            </div>
            <div>
                <h4>Toppings</h4>
                
                <label className='toppings'>Pepperoni:
                    <input
                    type='checkbox'
                    name="pepperoni"
                    //onChange={onChange}
                    //value={values.pepperoni}
                    />
                </label>
                
                
                <label className='toppings'>Olives:
                    <input
                    type='checkbox'
                    name='olives'
                    //onChange={onChange}
                    //value={values.olives}
                    />
                </label>
                
                
                <label className='toppings'>Bacon:
                    <input
                    type='checkbox'
                    name='bacon'
                    //onChange={onChange}
                    //value={values.bacon}
                    />
                </label>
                
                <label className='toppings'>Onions:
                    <input
                    type='checkbox'
                    name='onions'
                    //onChange={onChange}
                    //value={values.onions}
                    />
                </label>
                
            </div>
            <div>
                <label>Name (required): 
                    <input 
                    id="name-input"
                    name="name-input"
                    type='text'
                    //onChange={onChange}
                    //value={values.['name-input']}
                    />
                </label>
            </div>
            <div>
                <label>Special Instructions: 
                    <input 
                    type='text'
                    id="special-text"
                    name="special-text"
                    //onChange={onChange}
                    //value={values.['special-text']}
                    />
                </label>
            </div>
            <div>
                <button id="order-button" >Add to Order</button>
            </div>

        </form>
        </center>
    </div>
    )

}

export default PizzaForm