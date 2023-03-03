import {useEffect, createContext, useState, SetStateAction} from 'react'
import {Carta} from '../Types/Carta'

export async function callAPI() {
    const response = await fetch("https://rafael-rueda.github.io/REST-API/cartas.json");
    const jsonAPI = await response.json();
    return jsonAPI
}

export const CartasAPIContext = createContext<{
    cartasAPI: Carta[]; 
    setCartasAPI: React.Dispatch<SetStateAction<Carta[]>>}>
({ 
    cartasAPI: [], setCartasAPI: () => {} 
});


export const CartasAPIProvider = (props: {children: React.ReactNode}) => {

    const [cartasAPI, setCartasAPI] = useState<Carta[]>([]);

    useEffect(() => {
        (async function() {
          const cartas = await callAPI();
          setCartasAPI(cartas.Cartas)
        })()
      }, [])

    return (
        <CartasAPIContext.Provider value={{ cartasAPI, setCartasAPI }}>
            {props.children}
        </CartasAPIContext.Provider>   
    )
}




