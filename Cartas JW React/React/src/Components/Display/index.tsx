import { callAPI, CartasAPIContext } from "../../Common/API";
import styles from "./display.module.scss"
import {useContext} from 'react'
import { useParams } from "react-router-dom";


function Display() {

  const $id: {id?: number} = useParams();
  const {cartasAPI} = useContext(CartasAPIContext);
  const cartas = cartasAPI.filter(carta => {
    return carta.id == $id.id
  })

  return (
    <div className={styles.display}>
      {cartas.map(carta => {
        return (<div className={styles.content}>
          <h1>{carta.titulo}</h1>
          <p>{carta.conteudo}</p>
          
        </div>)
      })}
    </div>
  )
}

export default Display;
