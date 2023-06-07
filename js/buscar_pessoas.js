document.addEventListener('DOMContentLoaded', function() {
    x = document.getElementById("distancia")
    distancia = document.getElementById("resultado_des")
    y = document.getElementById("idade")
    idade = document.getElementById("resultado_id")
    gen_masc = this.querySelector('.gen-masc')
    gen_masc_click = false
    gen_fem = this.querySelector('.gen-fem')
    gen_fem_click = false
    x.addEventListener("input", function(event) {
        valor = x.value
        distancia.innerHTML = valor + ' km'
    });
    y.addEventListener("input", function(event) {
        valor = y.value
        idade.innerHTML = valor + ' anos'
    })
    gen_masc.addEventListener('click', function (event) {
        if (gen_masc_click == false) {
            gen_masc_click = true
            if (gen_fem_click == true) {
                gen_fem_click = false
                gen_fem.style.backgroundColor = '#ffffff'
                gen_fem.style.color = '#8c8070'
                gen_masc.style.backgroundColor = '#0388a6'
                gen_masc.style.color = '#ffffff'
            }
            else {
                gen_masc.style.backgroundColor = '#0388a6'
                gen_masc.style.color = '#ffffff'
            }
        }
        else {
            gen_masc_click = false
            gen_masc.style.backgroundColor = '#ffffff'
            gen_masc.style.color = '#8c8070'
        }
    })
    gen_fem.addEventListener('click', function (event) {
        if (gen_fem_click == false) {
            gen_fem_click = true
            if (gen_masc_click == true) {
                gen_masc_click = false
                gen_masc.style.backgroundColor = '#ffffff'
                gen_masc.style.color = '#8c8070'
                gen_fem.style.backgroundColor = '#0388a6'
                gen_fem.style.color = '#ffffff'
            }
            else {
                gen_fem.style.backgroundColor = '#0388a6'
                gen_fem.style.color = '#ffffff'
            }
        }
        else {
            gen_fem_click = false
            gen_fem.style.backgroundColor = '#ffffff'
            gen_fem.style.color = '#8c8070'
        }
    })
})