document.addEventListener('DOMContentLoaded', function() {
    x = document.getElementById("distancia")
    distancia = document.getElementById("resultado_des")
    x.addEventListener("input", function(event) {
        valor = x.value
        distancia.innerHTML = valor + ' pessoas'
    });
})