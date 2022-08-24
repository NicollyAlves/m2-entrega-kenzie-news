class Noticia {
    constructor(imagem, categoria, titulo, noticia_completa, resumo, fonte){
        this.imagem           = imagem
        this.categoria        = categoria
        this.titulo           = titulo
        this.noticia_completa = noticia_completa
        this.resumo           = resumo
        this.fonte            = fonte
    }

    cardNoticia() {
        const li = document.createElement("li")

        const divImg = document.createElement("div")
        const divTextos = document.createElement("div")
        const imagem = document.createElement("img")
        const categoria = document.createElement("h4")
        const link = document.createElement("a")
        const resumo = document.createElement("p")
        const fonte = document.createElement("p")

        imagem.src = this.imagem
        categoria.innerText = this.categoria
        link.href = this.noticia_completa
        link.innerText = this.titulo
        resumo.innerText = this.resumo
        fonte.innerText = "Fonte: " + this.fonte

        divImg.classList.add("divImg")
        divTextos.classList.add("divTextos")
        li.classList.add("noticia")
        imagem.classList.add("imagem")
        categoria.classList.add("categoria")
        link.classList.add("titulo")
        resumo.classList.add("resumo")
        fonte.classList.add("fonte")

        li.append(divImg, divTextos)
        divImg.appendChild(imagem)
        divTextos.append(categoria, link, resumo, fonte)

        return li
    }
}

export default Noticia