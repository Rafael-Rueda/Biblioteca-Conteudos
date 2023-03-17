
import styles from './botao.module.scss'
export default function Botao_formulario_v01(props: {className?: string; id: string | number}) {

    

    return (
        <button id={props.id.toString()} className={props.className} type='submit'>
            Enviar
        </button>
    )
}
