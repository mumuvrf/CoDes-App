document.addEventListener('DOMContentLoaded', function() {
    perfis = this.querySelectorAll('.profile')
    nomes = this.querySelectorAll('h3')
    fotos = this.querySelectorAll('.foto')
    perfis[0].addEventListener('click', function (event) {
        nome_perfil = nomes[0].innerHTML
        foto = fotos[0].getAttribute('src')
        localStorage.setItem('nome', nome_perfil)
        localStorage.querySelectorAll('foto', foto)
    })
    perfis[1].addEventListener('click', function (event) {
        nome_perfil = nomes[1].innerHTML
        foto = fotos[1].getAttribute('src')
        localStorage.setItem('nome', nome_perfil)
        localStorage.setItem('foto', foto)
    })
    perfis[2].addEventListener('click', function (event) {
        nome_perfil = nomes[2].innerHTML
        foto = fotos[2].getAttribute('src')
        localStorage.setItem('nome', nome_perfil)
        localStorage.setItem('foto', foto)
    })
    perfis[3].addEventListener('click', function (event) {
        nome_perfil = nomes[3].innerHTML
        foto = fotos[3].getAttribute('src')
        localStorage.setItem('nome', nome_perfil)
        localStorage.setItem('foto', foto)
    })
})