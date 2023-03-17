import Botao_formulario_v01 from "./Botao";
import styles from "./formulario.module.scss"
import { useValidar_formulario_v01 } from "./Hooks/useValidar";
import Input_formulario_v01 from "./Input";

function Formulario_v01() {

    const { validaCPF } = useValidar_formulario_v01();

    function enviarForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const inputs = document.querySelectorAll<HTMLInputElement>(`.${styles.form} input`)

        let Valido = true;
        inputs.forEach((input: HTMLInputElement) => {
            if (input.getAttribute('name') === 'cpf' && !validaCPF(input.id)) {
                Valido = false;
            }
            if (!input.checkValidity()) {
                Valido = false;
            }
        })

        if (Valido) {
            e.currentTarget.submit();
        }
    }

    return (
        <form onSubmit={e => {enviarForm(e)}} className={styles.form}>
            <fieldset>
                <legend>Contato</legend>

                <Input_formulario_v01 id="formulario_v01_input01" type="text" name="nome" label="Nome" placeholder="Digite seu nome completo" required />

                <Input_formulario_v01 id="formulario_v01_input02" type="email" name="email" label="Email" placeholder="Digite seu email" required />

                <Input_formulario_v01 id="formulario_v01_input03" type="text" name="cpf" label="CPF" required cpf min={11} />

                <Input_formulario_v01 id="formulario_v01_input04" type="tel" name="phone" label="Celular" required />
                
                <Botao_formulario_v01 className={styles.botao} id="formulario_v01_button"/>
            </fieldset>
            <div className={styles.part2}></div>


        </form>
    )
}

export default Formulario_v01;