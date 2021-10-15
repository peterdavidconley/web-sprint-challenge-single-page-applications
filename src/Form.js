import React from 'react'

function PizzaForm (props) {

    const { values, change, submit, disabled, errors  } = props

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    const onChange = event => {
        const { name, value, checked, type} = event.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change( name, valueToUse )
    }

    return(
        <div className='form-container'>
        <center>
        <form id='pizza-form' onSubmit={onSubmit}>
            <div className='errors'>
                <div>{errors.size}</div>
                <div>{errors['name-input']}</div>
                <div>{errors['special-text']}</div>
                <div>{errors.pepperoni}</div>
                <div>{errors['chicken-fingers']}</div>
                <div>{errors.peppers}</div>
                <div>{errors.mushrooms}</div>
            </div>
            <div><h3>Build your own pizza</h3></div>
            <div>
                <h4>Choice of Size</h4>
                <label>
                    <select 
                    name="size" 
                    id="size-dropdown"
                    onChange={onChange}
                    value={values.size}
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
                    onChange={onChange}
                    value={values.pepperoni}
                    />
                </label>
                
                
                <label className='toppings'>Chicken Fingers:
                    <input
                    type='checkbox'
                    name='chicken-fingers'
                    onChange={onChange}
                    value={values['chicken-fingers']}
                    />
                </label>
                
                
                <label className='toppings'>Peppers:
                    <input
                    type='checkbox'
                    name='peppers'
                    onChange={onChange}
                    value={values.peppers}
                    />
                </label>
                
                <label className='toppings'>Mushrooms:
                    <input
                    type='checkbox'
                    name='mushrooms'
                    onChange={onChange}
                    value={values.mushrooms}
                    />
                </label>
                
            </div>
            <div>
                <label>Name: 
                    <input 
                    id="name-input"
                    name="name-input"
                    type='text'
                    onChange={onChange}
                    value={values['name-input']}
                    />
                </label>
            </div>
            <div>
                <label>Special Instructions: 
                    <input 
                    type='text'
                    id="special-text"
                    name="special-text"
                    onChange={onChange}
                    value={values['special-text']}
                    />
                </label>
            </div>
            <div>
                <button id="order-button" disabled={disabled}>Add to Order</button>
            </div>

        </form>
        </center>
    </div>
    )

}

export default PizzaForm