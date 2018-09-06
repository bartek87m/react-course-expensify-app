import {createStore} from 'redux';

// const add = ({a,b}) =>  a + b; //{} - użycie destructuring

// console.log(add({a: 5, b: 6}));


const incrementCount = ({incrementBy = 1} = {}) => ({
          type: 'INCREMENT',  
          incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({//jeżeli obiekt nie jest przekazany przekazujemy pusty obiekt jako domyślny
        type: 'DECREMENT',                           //jeżeli decrementBy nie istnieje domyślnie ustawiamy na 1
        decrementBy
})

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({count} = {}) => ({
    type: 'SET',
    count
})

//Reducers 
//1. Reducers are pure functions - wynik zależy tylko od elementów wejściowych i nie ma żadnego powiązania z elementami nazewnątrz funkcji
//2. Never change state or action

const countReducer = (state = { count: 0}, action) => {
    
    switch (action.type){
        case 'INCREMENT':
            return{
                count:state.count + action.incrementBy
            };
            
        case 'DECREMENT':
            return{
                count: state.count - action.decrementBy
            }
        case 'SET':
            return{
                count: action.count
            }    

        case 'RESET':
            return{
                count: 0
            }
        default:
            return state;
    }
  
};

const store = createStore(countReducer);


//funkcja subscribe wywołuje się za każdym razem kiedy store się zmienia

const unsubscribe = store.subscribe(() =>{
    console.log(store.getState().count);
});



//action - increment the count
// store.dispatch({
//     type:'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount());

// unsubscribe(); //kiedy ją wywołamy wywoła się tylko w tym jednym miejscu a nie przy każdej zmianie store


store.dispatch(resetCount())

store.dispatch(decrementCount({decrementBy: 3}));

store.dispatch(setCount({count: 101}))
//każde wywołanie store.dispatch wysyła wykonuje w store zdefiniowaą akcje
//każde dispatch powoduje ponowne wywołanie state
