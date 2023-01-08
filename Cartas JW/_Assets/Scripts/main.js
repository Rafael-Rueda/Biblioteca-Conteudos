import { navI } from "./styles.js";
import { criarCarta } from "./criarCarta.js";
import { selectCriar } from "./selectCriar.js";
import { _imprimir } from "./imprimirCarta.js";

const menu = document.getElementById('menu');
const apagar = document.getElementById('apagar');
export const imprimir = document.getElementById('imprimir')
export const main = document.querySelector('main');
export const select_carta = document.getElementById('select_carta');
export let imprimir_carta = {v: 0}

export async function cartas_json() {
    const cartas = await (await (await fetch('https://rafael-rueda.github.io/REST-API/cartas.json', { method: "GET" })).json());
    return cartas.Cartas;
}

selectCriar();

menu.addEventListener('click', navI);
window.addEventListener('load', _criar);
apagar.addEventListener('click', () => {main.innerHTML = ''; imprimir_carta.v = 0;});
_imprimir();

function _criar() {
    select_carta.childNodes.forEach(e => {
        e.addEventListener('click', function () {
            criarCarta(e);
        });
    });
};
