// People dropping off a form (Action Creators)
// need to create an action for each type of action
// every Action creator has a type property and a payload property
const createPolicy = (name, amount) => {
  return {
    // Action ,a form in our analogy
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount,
    },
  };
};

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name,
    },
  };
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect,
    },
  };
};

// Dispatch
// is part of the redux library itself, so we don't need to write it

//  Reducers
// are like our departments
// need to add `oldListOfClaims = []` in the case we are running this function for the first time.
// if we don't do this, the reducer will be undefined
const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === 'CREATE_CLAIM') {
    // we care about this action (FORM)
    // will update our list of claims with the payload
    return [...oldListOfClaims, action.payload]; // takes an array (oldListOfClaims), creates a new array, and adds the payload to the end of the new array
  }
  // we don't care about this action (FORM)
  return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
  // case of creating a claim
  if (action.type === 'CREATE_CLAIM') {
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  }
  // case of creating a policy, signing up.
  else if (action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amount;
  }
  return bagOfMoney;
};

const policyList = (listOfPolicies = [], action) => {
  if (action.type === 'CREATE_POLICY') {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === 'DELETE_POLICY') {
    return listOfPolicies.filter((name) => name !== action.payload.name);
  }
  return listOfPolicies;
};

// Testing our reducers
const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
  // are the names of our various reducers
  accounting: accounting,
  claimsHistory: claimsHistory,
  policyList: policyList,
});

const store = createStore(ourDepartments);

// store object represents our entire reduxz application. Contains references to all our reducers and their states.
// one function here is the dispatch function.

store.dispatch(createPolicy('Alex', 20));
store.dispatch(createPolicy('Jim', 30));
store.dispatch(createPolicy('Bob', 40));

store.dispatch(createClaim('Alex', 120));
store.dispatch(createClaim('Jim', 50));

store.dispatch(deletePolicy('Bob'));

console.log(store.getState());
