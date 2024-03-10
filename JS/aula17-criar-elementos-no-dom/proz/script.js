
let elementoH1 = document.querySelector("h1");
console.log(elementoH1);
console.log(elementoH1.innerText);
elementoH1.innerText="Novo titulo com JS";

let elementoMain = document.querySelector("main");
console.log(elementoMain);
console.log(elementoMain.innerText);
console.log(elementoMain.innerHTML);
elementoMain.innerHTML = `<h2>Novo subtitulo </h2>
<ul>
    <li> Elemento lista JS 01     </li>
    <li> Elemento lista JS 02     </li>
    <li> Elemento lista JS 03   </li>
</ul> `
