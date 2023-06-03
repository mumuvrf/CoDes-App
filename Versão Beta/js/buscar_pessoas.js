document.addEventListener('DOMContentLoaded', function() {
    x = document.getElementById("distancia")
    distancia = document.getElementById("resultado_des")
    y = document.getElementById("idade")
    idade = document.getElementById("resultado_id")
    x.addEventListener("input", function(event) {
        valor = x.value
        distancia.innerHTML = valor + ' km'
    });
    y.addEventListener("input", function(event) {
        valor = y.value
        idade.innerHTML = valor + ' anos'
    })
})