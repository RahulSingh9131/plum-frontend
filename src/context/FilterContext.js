import React,{createContext,useContext,useReducer} from "react";

const FilterContext=createContext();

const FilterProvider=({children})=>{

    const filterReducerFunc=(state,action)=>{
        switch(action.type){
            case "SORT":
                return {...state,sortBy:action.payload};
            case "VOTE":
                return {...state,votes:action.payload}; 
            case "CLEAR":
                return {...state,sortBy:"",votes:47795};       
            default :
                return {...state};    
        }
    }

    const [filterState,dispatch]=useReducer(filterReducerFunc,{sortBy:"",votes:47795})
    return <FilterContext.Provider value={{filterState,dispatch}}>
        {children}
    </FilterContext.Provider>
}

const useFilter=()=>useContext(FilterContext);

export {FilterProvider,useFilter};