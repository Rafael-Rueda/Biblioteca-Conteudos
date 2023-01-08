import { imprimir, cartas_json, imprimir_carta} from "./main.js";

async function criarImpresso() {
    const cartas = await cartas_json()
    const carta_id = cartas.findIndex(e => {
        return e.id == imprimir_carta.v
    })
    return carta_id;
}

export function _imprimir() {
    imprimir.addEventListener('click', async () => {
    const cartas = await cartas_json()
    const print_window = window.open('', '', 'height=400, width=800');
    print_window.document.write(
    `<html><head><title>Print Window</title></head>
    <body>
    <main>
    <div class="carta">
        <h1>${cartas[await criarImpresso()].titulo}</h1>
        <p>${cartas[await criarImpresso()].conteudo}</p>
    </div>
    </main>    
    </body>
    </html>`)
    print_window.document.close();
    print_window.focus();
    print_window.print();
    
});
};