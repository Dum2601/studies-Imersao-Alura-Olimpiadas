function pesquisar()
{

    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    
    for(let dado of dados)
    {
        titulo = dado.titulo.toLocaleLowerCase();
        descricao = dado.descricao.toLocaleLowerCase();
        tags = dado.tags.toLocaleLowerCase();
    
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa))
        {

            if (campoPesquisa == "")
            {

                section.innerHTML = `<p>Nada foi encontrado</p>`;
                return

            }

            campoPesquisa = campoPesquisa.toLowerCase();

            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p>${dado.descricao}</p>
                    <a href=${dado.link}target="_blank">Mais informações</a>
                </div>
            
            `;

        } 
        if(!resultados) 
        {

            resultados = "<p>Nada foi encontrado. É necessário digitar algo relacionado ao atleta ou esporte</p>"

        }

                
    }
    
    section.innerHTML = resultados;

}



