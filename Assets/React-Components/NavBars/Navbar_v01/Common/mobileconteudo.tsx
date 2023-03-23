import { createContext, ReactNode, SetStateAction, useState} from "react";

export const MobileMenuContext = createContext<{mobilemenuI: {id:string}, setmobilemenu: React.Dispatch<SetStateAction<{id:string}>>}>({
    mobilemenuI: {id: ''},
    setmobilemenu: () => {}
})

export const MobileMenuProvider = ({ children }: { children: React.ReactNode }) => {
    const [mobilemenuI, setmobilemenu] = useState({id: ''});
    return (
        <MobileMenuContext.Provider value={{mobilemenuI, setmobilemenu}}>
            {children}
        </MobileMenuContext.Provider>
    )
}
