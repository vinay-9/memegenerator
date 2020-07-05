import {CreateStore} from 'redux';
import React from 'react';
import reducer from './reducer';

var state = { 
    TopText :"",
    bottomText:"",
    randomImg:"http://i.imgflip.com/1bij.jpg",
    allMemeImgs:[]
 }
 const store =CreateStore(
     {
         reducer,
         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
     }
 );

 export default store