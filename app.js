// Aqui estou criando uma função para imprimir os dados no HTML quando eu clico no botão da tela.
function pesquisar(){
    let section = document.getElementById("resultados-pesquisa")
    
    let resultados = ""
    
    for (dado of dados){
        resultados += ` 
            <div class="item-resultado">
                <h2>${dado.nome}</h2>
                
                <p class="descricao-meta">${dado.descricao}</p>
                <br>
                <p class="descricao-meta"> Nacionalidade: ${dado.nacionalidade}</p>
                <br>
                <p class="descricao-meta"> Equipe: ${dado.equipe}</p>
                <br>
                <a href="${dado.link}" target="_blank">Saiba mais sobre o piloto clicando aqui!</a>
            </div>
        `
    }
    section.innerHTML = resultados
}
