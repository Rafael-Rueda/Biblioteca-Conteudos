import { cartas_json, main, imprimir_carta} from "./main.js";

export async function criarCarta(select) {
    main.innerHTML = '';
    
    const cartas = await cartas_json()
    const carta_id = cartas.findIndex(e => {
        return e.id == select.getAttribute("data-id")
    })

    main.innerHTML = 
    `<div class="carta">
    <h1>${cartas[carta_id].titulo}</h1>
    <p>${cartas[carta_id].conteudo}</p>
    </div>`;

    imprimir_carta.v = select.getAttribute("data-id")
}