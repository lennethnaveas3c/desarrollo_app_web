function mostrarMeGusta() {
    const contador = document.getElementById("likes");
    let texto = contador.textContent;
    let numero = parseInt(texto);
    numero++;
    contador.textContent = `${numero} like(s)`;
}
