import { cartas_json, select_carta} from "./main.js";

export async function selectCriar() {
    const cartas = await cartas_json();
    const cartas_id = []
    cartas.forEach(e => {
        cartas_id.push(e.id);
    });

    cartas_id.forEach(e => {
        const h2 = document.createElement('h2');
        h2.setAttribute('data-id', e);
        h2.textContent = `Carta ${e}`;
        select_carta.appendChild(h2);
    })
}