// Aqui estou criando uma função para imprimir os dados no HTML quando eu clico no botão da tela.
function pesquisar(){
    let section = document.getElementById("resultados-pesquisa")
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    
    campoPesquisa = campoPesquisa.toUpperCase()

    let resultados = ""

    let equipe = ""

    if (!campoPesquisa || campoPesquisa == " ") {
        return
    }
    
    for (dado of dados){

        equipe = dado.equipe.toUpperCase()
        
        if(dado.nome.includes(campoPesquisa) || equipe.includes(campoPesquisa)){
            resultados += ` 
                <div class="item-resultado">
                    <h2 class="driver-name">${dado.nome}</h2>
                    <img class="driver-photo" src="${dado.foto}" alt="${dado.nome}">
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
}
