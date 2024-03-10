let elementoH1 = document.querySelector("h1");
elementoH1.innerText = "treinando innertext";
let elementoUl = document.querySelector("ul");
let elementoA = document.querySelector("a");
elementoA.innerText = "treinando";
let elementoOl = document.querySelector("ol");

elementoUl.innerHTML= `<ul>
    <li> Elemento lista JS 01     </li>
    <li> Elemento lista JS 02     </li>
    <li> Elemento lista JS 03   </li>
</ul> `
elementoOl.innerHTML= `<ol>
<li> <a href="https://prozeducacao.com.br"> link 01</a>     </li>
<li> <a href="https://prozeducacao.com.br">link 02</a>     </li>
<li> <a href="https://prozeducacao.com.br">link 03</a>     </li>
</ol> `
