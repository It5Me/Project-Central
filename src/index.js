import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from './store//reducer/rootReducer'
import {Provider}  from 'react-redux'
import thunk from 'redux-thunk'   //middleware
import {reduxFirestore,getFirestore} from 'redux-firestore'
import {reactReduxFirebase,getFirebase} from 'react-redux-firebase'
import firebaseConfig from './config/firebaseConfig'
import firebase from 'firebase/app'

// const store= createStore(rootReducer,
// compose(
//   applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
//   reduxFirestore(firebaseConfig),
//   reactReduxFirebase(firebaseConfig)
//   )
// );
const store= createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirestore,getFirebase})),
    reduxFirestore(firebase,firebaseConfig)
    )
);




ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
