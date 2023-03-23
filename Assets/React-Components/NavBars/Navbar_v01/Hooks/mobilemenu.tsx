import { useContext, useEffect } from "react";
import { MobileMenuContext } from "../Common/mobileconteudo";

export function useMobileMenu(styles: Record<string, any>) {

    const {mobilemenuI, setmobilemenu} = useContext(MobileMenuContext);

    function MobileMenu(evento: React.MouseEvent<HTMLElement, MouseEvent>) {
        const $id = (evento.currentTarget as HTMLElement).id;
        setmobilemenu({id: $id})

        
    }

    useEffect(() => {
        Array.from((document.querySelector(`.${styles.mobilecontent}`)?.firstElementChild as HTMLElement).children).forEach(item => {
            Array.from(item.children).forEach(item2 => {
                item2.classList.remove(styles.mobileconteudoativo);
            })
        })
        if (document.getElementById(mobilemenuI.id)) {
            (document.getElementById(mobilemenuI.id)?.firstElementChild?.nextElementSibling as HTMLElement)?.classList.add(styles.mobileconteudoativo);
        }
    }, [mobilemenuI])

    return { MobileMenu }
}