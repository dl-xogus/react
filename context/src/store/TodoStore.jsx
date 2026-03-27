import React, { createContext, useState } from 'react'
export const MyContext = createContext();

let init = {
    data: ["안녕"],
    save: () => { },
    update: () => { }
};

function TodoStore({ children }) {
    const [store, setStore] = useState(init);

    return (
        /* 
            { store: store, setStore: setStore }를 생략해서
            { store, setStore }로 표현
        */
        <MyContext.Provider value={{ store, setStore }}>
            {children}
        </MyContext.Provider>
    )
}

export default TodoStore;