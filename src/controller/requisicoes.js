class Resquisicoes {
    static base_url = "https://kenzie-news-api.herokuapp.com/api/news"

    static async recuperarDados(){
        const dados = await fetch(this.base_url)
        .then((res) => res.json())
        .then((res) => res)
        .catch((err) => console.log(err.message))

        return dados
    }
}

export default Resquisicoes