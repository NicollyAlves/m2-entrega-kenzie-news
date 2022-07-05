import Noticia from "../models.js";
import Requisicoes from "./requisicoes.js";

class Controller{
    static async listarNoticias(){
        const noticias = document.querySelector(".noticias")

        const noticiasDados = await Requisicoes.recuperarDados()

        const ul = document.createElement("ul")
        ul.classList.add("listas")
        noticiasDados.forEach((noticia)=>{
            
            const novaNoticia = new Noticia(noticia.imagem, noticia.categoria, noticia.titulo, noticia.resumo, noticia.fonte)
            
            const cardNoticia = novaNoticia.cardNoticia()

            ul.append(cardNoticia)
        })
        noticias.append(ul)
    }
}

export default Controller