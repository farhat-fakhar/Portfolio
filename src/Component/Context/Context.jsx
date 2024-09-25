import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "./ContextReducer";

export const UserContext = createContext();

export const ContextProvider = ({ children }) => {
 
  const initialState = {
 selectValue:null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const SelectValue=(item )=>{
    dispatch({type:"SelectValue", payload:item})
  }
  
  return (
    <UserContext.Provider
      value={{
        ...state,
        SelectValue,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const DataContext = () => {
  return useContext(UserContext);
};
