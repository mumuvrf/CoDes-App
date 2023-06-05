document.addEventListener('DOMContentLoaded', function() {
    //aqui é para o range de distancia 
    dis = document.getElementById("distancia")
    distancia = document.getElementById("resultado_des")
    dis.addEventListener("input", function(event) {
        valor = dis.value
        distancia.innerHTML = valor + ' km'
    });
    //aqui é para abrir ou fechar o forms
    x = this.getElementById('filtro')
    lista = this.querySelector('.lista-atividades')
    form = this.querySelector('form')
    clicado = false

    // fazendo o js dos botoes de numero de pessoas

    botoes = this.querySelectorAll('.numero')
    cinco = botoes[0]
    dez = botoes[1]
    quinze = botoes[2]
    vinte = botoes[3]

    cinc = this.getElementById('cinco')
    cinco_click = false
    d = this.getElementById('dez')
    dez_click = false
    quin = this.getElementById('quinze')
    quinze_click = false
    vin = this.getElementById('vinte')
    vinte_click = false
    
    x.addEventListener('click', function (event) {
        if (clicado == false) {
            clicado = true
            lista.style.display = 'none'
            form.style.display = 'flex'
            x.setAttribute('src', 'img/filtro_clicado.png')
        }
        else if (clicado == true) {
            clicado = false
            lista.style.display = 'flex'
            form.style.display = 'none'
            x.setAttribute('src', 'img/filtro.png')
        }
    })
    cinco.addEventListener('click', function (event) {
        if (cinco_click == false) {
            cinco_click = true
            if (dez_click == true | quinze_click == true | vinte_click == true) {
                dez_click = false
                quinze_click = false
                vinte_click = false
                cinco.style.backgroundColor = '#000000'
                cinc.style.color = '#ffffff'
                d.style.color = '#000000'
                quin.style.color = '#000000'
                vin.style.color = '#000000'
                dez.style.backgroundColor = '#ffffff'
                quinze.style.backgroundColor = '#ffffff'
                vinte.style.backgroundColor = '#ffffff'
            }
            else {
                cinco.style.backgroundColor = '#000000'
                cinc.style.color = '#ffffff'
            }
            
        }
        else {
            cinco_click = false
            cinco.style.backgroundColor = '#ffffff'
            cinc.style.color = '#000000'
        }
    
    })
    dez.addEventListener('click', function (event) {
        if (dez_click == false) {
            dez_click = true
            if (cinco_click == true | quinze_click == true | vinte_click == true) {
                cinco_click = false
                quinze_click = false
                vinte_click = false
                dez.style.backgroundColor = '#000000'
                cinc.style.color = '#000000'
                d.style.color = '#ffffff'
                quin.style.color = '#000000'
                vin.style.color = '#000000'
                cinco.style.backgroundColor = '#ffffff'
                quinze.style.backgroundColor = '#ffffff'
                vinte.style.backgroundColor = '#ffffff'
            }
            else {
                dez.style.backgroundColor = '#000000'
                d.style.color = '#ffffff'
            }
        }
        else {
            dez_click = false
            dez.style.backgroundColor = '#ffffff'
            d.style.color = '#000000'

        }
    })
    quinze.addEventListener('click', function (event) {
        if (quinze_click == false) {
            quinze_click = true
            if (cinco_click == true | dez_click == true | vinte_click == true) {
                cinco_click = false
                dez_click = false
                vinte_click = false
                dez.style.backgroundColor = '#ffffff'
                cinc.style.color = '#000000'
                d.style.color = '#000000'
                quin.style.color = '#ffffff'
                vin.style.color = '#000000'
                cinco.style.backgroundColor = '#ffffff'
                quinze.style.backgroundColor = '#000000'
                vinte.style.backgroundColor = '#ffffff'
            }
            else {
                quinze.style.backgroundColor = '#000000'
                quin.style.color = '#ffffff'
            }
        }
        else {
            quinze_click = false
            quinze.style.backgroundColor = '#ffffff'
            quin.style.color = '#000000'

        }
    })
    vinte.addEventListener('click', function (event) {
        if (vinte_click == false) {
            vinte_click = true
            if (cinco_click == true | dez_click == true | quinze_click == true) {
                cinco_click = false
                dez_click = false
                quinze_click = false
                dez.style.backgroundColor = '#ffffff'
                cinc.style.color = '#000000'
                d.style.color = '#000000'
                quin.style.color = '#000000'
                vin.style.color = '#ffffff'
                cinco.style.backgroundColor = '#ffffff'
                quinze.style.backgroundColor = '#ffffff'
                vinte.style.backgroundColor = '#000000'
            }
            else {
                vinte.style.backgroundColor = '#000000'
                vin.style.color = '#ffffff'
            }
        }
        else {
            vinte_click = false
            vinte.style.backgroundColor = '#ffffff'
            vin.style.color = '#000000'

        }
    })
})