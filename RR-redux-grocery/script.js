const grocerySubmit = document.getElementById('addGrocery')
const list = document.getElementById('list')
const clearBtn = document.getElementById('clear')

//Instantiate 
const initialState = {
    groceries: []
}

const renderList = (state) => {
    while(list.firstChild) {
        list.removeChild(list.firstChild)
    }
    state.forEach(grocery => {
        let li = document.createElement('li')
        list.appendChild(li)
        li.textContent = grocery.text
    })
}

//reducer
const groceryReducer = (state = initialState.groceries, action) => {
    switch(action.type) {
        case 'grocery/add':
            return [
                ...state,
                {
                text: action.text
                }
            ]
        case 'grocery/clear':
            return []
        default:
            return state
    }
}

//store 
let store = Redux.createStore(groceryReducer)

// define render
const render = () => {
    const state = store.getState()
    renderList(state)
}

//dispatch
const clearList = () => {
    document.getElementById('newItem').value = ''
    store.dispatch({
        type: 'grocery/clear'
    })
}

const newGrocery = (e) => {
    e.preventDefault()
    let groceryText = document.getElementById('newItem').value
    store.dispatch({
        type: 'grocery/add',
        text: groceryText
    })
    console.log(store.getState())
    
    document.getElementById('newItem').value = ''
    console.log('OUR GLOBAL STATE REDUX ----->',store.getState())

}

//event listener
grocerySubmit.addEventListener('click', (e) => {newGrocery(e)})
clearBtn.addEventListener('click', clearList)



store.subscribe(render)
