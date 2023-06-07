document.addEventListener('DOMContentLoaded', function() {
    nome = this.querySelector('.nome')
    nome.innerHTML = localStorage.getItem('nome')
    foto = this.querySelector('.img-match')
    imagem = localStorage.getItem('foto').toString()
    foto.setAttribute('src', imagem)
})