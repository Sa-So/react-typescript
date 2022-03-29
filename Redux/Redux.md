# 1. Intro

## for js apps
-  can be used with vanilla js too
-  react needs it to prevent prop drilling + sharing state without lifting it up (no more refactoring !)

## state container
- state is ui logic + data

## predictable
- state changes, 
- in redux state transitions are explicit (clear/not hidden), hence can be tracked 

## global state
- state available to all comp

## alternatives
- context (useContext , useReducer)

## React-Redux
- official Redux UI binding lib for react as (joining react with redux is difficult)

## points
- don't learn redux in parallel with react
- patterns u will learn will help you
- 2x , 3x review , a lot of boilerplate code + things to remember

# 2. Getting Started
## setup
- install node , npm
- make folder redux-demo
- npm init --yes 
- npm i redux
- create index.js with a console statement
- node index

# 3. 3 Core concepts




## Cake Shop
### entities
### (Store)
- shop - holds cakes

- shopkeeper
- customer
### activities 

#### (Action)
- customer - buy a cake
- (describes the changes in state)
- 
#### (Reducer) (ties store & actions together)
- shopkeeper - remove cake if present & give it to u , print receipt to keep track
- (carries out the state transition depending on action !)

# 4 three principles
## 1.
- state is stored in an object tree within a single store
- (single object managed by redux store)

> eg. tracking no. of cakes in your shop can be an objecct having count .
## 2.
- only way to change state is to emit an action , an object describing what happened
- (to update , let redux know about that with an action)

> eg. in code we would write action - BUY_CAKE as {type:BUY_CAKE}

## 3.
- "To specify how state tree is transformed by actions , you write pure reducers"
- Reducer - (prevState,action) => newState
- return new state instead of updating ?!
```js
const reducer = (state,action) =>{
switch(action.type){
case BUY_CAKE: return {numOfCakes:state.numOfCakes-1}
}
}
```

# 5. Actions
- action.type is a string const
- action can have other things as well ,but type is necessary for that obj to be an action
```js
const BUY_CAKE = 'BUY_CAKE'
{
  type: BUY_CAKE
  info: 'First Redux ACtion'
}
```
- action creator , function which returns action
```js
function buyCake(){
  return {
    type: BUY_CAKE
    info: 'First Redux ACtion'
  }
}
// any changes to action object will happen only in 1 place ! (if u want to change it in future , & you will be calling this func everywhere)
// but then also we could have passed the variable name !!?
```
# 6. Reducers
- specify how app's state changes in res to actions sent to store
- accepts state & actions as args , returns next state of app
```js
const initialState = {
  numOfCAkes:10
}
const reducer = (state = initialState,action) => {
  switch(action.type){
    case BUY_CAKE: return {
      ..state,
      numOfCakes:state.numOfCakes-1
    }
    default: return state
  }
}
```
# 7 Redux Store
- always one store for an app
- allows access to state via getState()
- allows state to be updated via dispatch(action)
- registers listeners via subscribe(listener) 
  - subscr takes func as param which exec when state changes 
- unregister listeners via function returned by subscribe (listener)

```js
// es6 import can be used in react but not here ..
const redux = require('redux')
const cS = redux.createStore // no () !!!
const store = cS(reducer)
console.log("initial state",store.getState())
const unsub = store.subscribe(()=>console.log('new state',store.getState()));
store.dispatch(buyCake())
unsub() // to any changes
```

- didn't understand last line. (pros of using action creator)

# 8 Cakes & Ice Creams
- hire another shopkeeper for ice cream
- which makes it easier to manage (scalability)
- so
## split state & reducer
- 2 obj for initial state
- here switch case doen't make sense because each function is for diff action but idk it's still used !
- but how do we pass multiple reducers to createS ??

# 10 Combine Reducers
```js
const combineRed = redux.combineReducers

// accepts an obj with key values correspond to reducer 
const rootReducer = combineReducers({
  cake: cakeReducer(),
  iceCream: iceCreamReducer()
})
```
- note : now state has changed to a diff struct 
- state.iceCream.noOfIceCream
- where middle ^ element is the key we specify 

> when we dispatch an action both the reducer receive that action !!!! doubt cleared ? (why switch wala)
> one of them acts on action and other one ignores it !!!

- each reducer is managing it's own part of global state
- state parameter is diff for every reducer & corresponds to the state it is managing
- you can split reducers in diff files !


# 11 Middleware
<!-- > I am getting lazy to type & my fingers hurt so just see the vid lol pls some1 attach ss -->
- extend redux with custom func
- provides 3rd party ext pt. b/w dispatching an action , moment it reaches the reducer
- uses : logging , crash reporting , perform async tasks etc.

## redux-logger
1. npm i 
2. const redLog = require("")
3. const logger = redLog.createLogger()
```js
// get redux applymiddleware func
const applyMiddleWare = redux.applyMiddleWare()
// add it to createStore
cS(rootReducer,applyMiddleWare(logger)) // we can pass as many middleware as we want !
// remove console.log() from subs coz logger does that !
```

# 12. async actions
- fetch from API end pt. & store it in redux store !
## State
{
  loading:true, // display loading spinner
  data: [], // users
  error:'' // might fail
}

## Actions
FETCH_USERS_REQUEST - fetch list of users
FETCH_USERS_SUCCESS 
FETCH_USERS_FAILURE


## Reducer
FETCH_USERS_REQUEST - loading : true
FETCH_USERS_SUCCESS - loading : false , users: data  (from api)
FETCH_USERS_FAILURE - loading : false , error: error (from api)

## code 
```js
const initialState = {
  loading:true, // display loading spinner
  data: [], // users
  error:'' // might fail
}
// const actions
// action creators ?! for passing users [] or error as payload in action !
const fetchUsersReq = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}
// reducers
// 7:30 15 singleseater

```
# 13 Redux thunk middleware
1. npm i axios redux-thunk
```js
const thunkMiddleware = require('redux-thunk').default
// axios also
```
2. async action creator
- thunk allows us to return function instead of an action which then further dispatches actions ?!
- & this func doesn't need to be pure (sideffects as async api calls are allowed !)
- can dispatch 
```js
const fetchUser = () => {
  return function(dispatch) {
    // sets loading to true
    
    dispatch(fetchUsersRequest())
    axios.get('') 
    .then(res=>{
      // res.data
      const users = res.data.map(user => user.id) // to not flood the log
      dispatch(fetchUsersSuccess(users))
    })
    .catch(err=>{
    // err.message is our err descr
      const error = err.message
      dispatch(fetchUsersFailure(error))
    })
  }
}
```
- reducers
```js

```
- use jsonplaceholder api

# 14. using react

## cake shop app
### setup
- npx cra react-redux-demo
- npm i redux react-redux












