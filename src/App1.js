import logo from './logo.svg';
import React, { useReducer} from 'react'
import './App.css';
import StateClass from './Components/StateClass'
import StateHook from "./Components/StateHook";
import StatePreviousHook from './Components/StatePreviousHook';
import StateObjectHook from "./Components/StateObjectHook";
import StateArrayHook from './Components/StateArrayHook';
import EffectClass from './Components/EffectClass';
import EffectHook from './Components/EffectHook';
import EffectClass2 from './Components/EffectClass2';
import EffectHook2 from './Components/EffectHook2';
import EffectOnlyOnceClass from './Components/EffectOnlyOnceClass';
import EffectOnlyOneHook from './Components/EffectOnlyOneHook';
import EffectCleanUpHookMousecontainer from './Components/EffectCleanUpHookMousecontainer';
import EffectIntervalClass from './Components/EffectIntervalClass';
import Fetching1 from './Components/Fetching1';
import Fetching2 from './Components/Fetching2';
import Fetching3Button from './Components/Fetching3Button';
import ComponentCC from './Context/ComponentCC';
import SimpleStateAction from './ReducerHook/SimpleStateAction';
import StateObjectActionObject from './ReducerHook/StateObjectActionObject';
import StateObjectActionObjectTwoCounter from './ReducerHook/StateOnjectStateActionTwoCounter';
import MultipleUseReducer from './ReducerHook/MultipleUseReducer';
import ComponentA from './useContextUseReducer/ComponentA';
import ComponentB from './useContextUseReducer/ComponentB';
import ComponentC from './useContextUseReducer/ComponentC';
import FetchingUseState from './FetchingUseReducer/FetchingUseState';
import FetchingReducer from './FetchingUseReducer/FetchingReducer';


 export const UserContext = React.createContext()
 export const ChannelContext = React.createContext()


export const CountContext = React.createContext()
const initialState = 0
const reducer =(state,action) => {
  switch(action){
    case 'increment': return state +1 
    case 'decrement': return state -1 
    case 'reset': return initialState
    default: return state
  }
}
function App() {
  const [count, dispatch] =  useReducer(reducer, initialState)
  return (
    <div className="App">
      {/* 
      <StatePreviousHook />
      <StateObjectHook /> 
      <StateArrayHook/>
      <EffectClass/>
      <EffectHook/>
      <EffectClass2/>
      <EffectHook2/>
      <EffectOnlyOnceClass/>
      <EffectOnlyOneHook/>
      <EffectCleanUpHookMousecontainer/>
      <EffectIntervalClass/>
      <Fetching1/>
      <Fetching3Button/>
      */}
{/*   
      <UserContext.Provider value={'toan'}>
        <ChannelContext value ={'channelToan'}>
          <ComponentCC/>
        </ChannelContext>
      </UserContext.Provider> */}

      {/* <SimpleStateAction/> 
         <StateObjectActionObject/>
         <StateObjectActionObjectTwoCounter/>
         <MultipleUseReducer/>
         */}

         {/* <CountContext.Provider value={{countState:count, countDispatch: dispatch}}>
           count: {count}
           <ComponentB/>
           <ComponentA/>
           <ComponentC/>
         </CountContext.Provider> */}
      
      {/* <FetchingUseState/> */}
      <FetchingReducer/>
    </div>
  );
}

export default App;
