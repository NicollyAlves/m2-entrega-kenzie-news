class Noticia{
    constructor(imagem, categoria, titulo, resumo, fonte){
        this.imagem = imagem
        this.categoria = categoria
        this.titulo = titulo
        this.resumo = resumo
        this.fonte = fonte
    }
    
    cardNoticia(){
        const noticias = document.querySelector(".noticias")

        const li = document.createElement("li")

        const divImg = document.createElement("div")
        const divTextos = document.createElement("div")
        const imagem = document.createElement("img")
        const categoria = document.createElement("h4")
        const titulo = document.createElement("h3")
        const resumo = document.createElement("p")
        const fonte = document.createElement("p")

        imagem.src = this.imagem
        categoria.innerText = this.categoria
        titulo.innerText = this.titulo
        resumo.innerText = this.resumo
        fonte.innerText = "Fonte: " + this.fonte

        divImg.classList.add("divImg")
        divTextos.classList.add("divTextos")
        li.classList.add("noticia")
        imagem.classList.add("imagem")
        categoria.classList.add("categoria")
        titulo.classList.add("titulo")
        resumo.classList.add("resumo")
        fonte.classList.add("fonte")

        li.append(divImg, divTextos)
        divImg.append(imagem)
        divTextos.append(categoria, titulo, resumo, fonte)

        return li
    }
}

export default Noticia