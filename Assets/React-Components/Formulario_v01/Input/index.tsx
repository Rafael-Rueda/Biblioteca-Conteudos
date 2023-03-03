import { InputHTMLAttributes, useEffect } from 'react'
import styles from './input.module.scss'
import { useValidar_formulario_v01 } from '../Hooks/useValidar';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { label?: string; cpf?: boolean; }
type RequiredIdInputProps = InputProps & { id: string | number }

export default function Input_formulario_v01(props: RequiredIdInputProps) {

    const {vazio, validaCPF} = useValidar_formulario_v01();

    useEffect(() => {
        const input = document.getElementById(props.id);

        if (props.cpf) {
            input?.addEventListener('invalid', (e) => {
                e.preventDefault();
                validaCPF(props.id);
            })
            input?.addEventListener('blur', () => {
                validaCPF(props.id);
            })

        } else {
            input?.addEventListener('invalid', (e) => {
                e.preventDefault();
                vazio(props.id);
            })
            input?.addEventListener('blur', () => {vazio(props.id)})
        }
    }, [])


    return (
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <p id={props.id + 'erro'}>aaaaa</p>
            <input {...props} />
        </div>
    )
}