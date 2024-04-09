const enlace = document.querySelector('#link');
    enlace.href = 'https://keybr.com';

const buyList = [
    "books",
    "bread",
    "eraser",
    "earphones",
    "collection-cards",
    "hdmi",
    "vga",
    "motherboard",
    "university-books",
];

function shopping(list) {
    const listaCompras = document.getElementById("root");
    const lista = document.createElement("ul");

    list.forEach(function(item) {
        const listaItem = document.createElement("li");
        listaItem.textContent = item;
        lista.appendChild(listaItem);
    });
    listaCompras.appendChild(lista);
}
shopping(buyList);