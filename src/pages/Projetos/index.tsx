import { useContext } from "react"
import { HeaderPage } from "../../components/Header"
import { ThemeContext } from "../../contexts"
import styled from "styled-components"
import { CardProject } from "../../components/CardProject"
import ImgGitAPI from "../../assets/gitapiimg.png"
import ImgPortifolio from "../../assets/portfolio.png"
import ImgMario from "../../assets/mario.png"
import ImgAppFrases from "../../assets/apifrases.png"
import ImgCartao from "../../assets/cartao.png"
import ImgNFT from "../../assets/nft.png"
import ImgForm from "../../assets/formulario.png"
import ImgPokeapi from "../../assets/pokeapi.png"
import { Footer } from "../../components/Footer"

const Projetos = () => {

    const { theme }: any = useContext(ThemeContext)

    return (

        <>

            <HeaderPage />

            <Main style={{ background: theme.fundo }}>

                <DivProjects>

                    <CardProject
                        NameCard="Portfólio"
                        ListLanguages="react | styled-component | context-api | typescript | material ui"
                        Description="Site pessoal, Portfólio Mikael feito com React e Typescript, usando styled-components para estilizar os componentes, context api para alternar entre tema light e tema dark, react-router-dom para navegação entre as paginas internas, material ui utilizado para alguns botões de switches."
                        ImageProject={ImgPortifolio}
                        DescriptionImage="Imagem do Site Portfólio"
                    />

                    <CardProject
                        NameCard="GitHub API"
                        ListLanguages="html | sass | javascript | jest"
                        Description="Projeto feito com consumo da API do GitHub, usando Sass para estilização e com validação de input."
                        LinkGit="https://github.com/MikaelAugustoDev/GitAPI"
                        ImageProject={ImgGitAPI}
                        DescriptionImage="Imagem do Site API Github"
                        Url = "https://git-api-mikael.vercel.app/"
                    />

                    <CardProject
                        NameCard="Landing Page NFTs"
                        ListLanguages="react | styled-component "
                        Description="Landing page de NFTs do curso da Rocketseat, Responsivo e estilizado com a biblioteca Styled-components"
                        LinkGit="https://github.com/MikaelAugustoDev/Landing-Page-NFTs"
                        ImageProject={ImgNFT}
                        DescriptionImage="Imagem da Landing Page NFTs"
                        Url = "https://landing-page-nfts.vercel.app/"
                    />

                    <CardProject
                        NameCard="Pokedéx API"
                        ListLanguages="react | styled-component | context-api | javascript | API | jest | material ui "
                        Description="Pagina de Pokemons feita 100% consumindo a API dos Pokemons no site poke.api utilizando React, estilizando com styled-components, alguns botões prontos do mateiral UI, context-api para mudança de thema e react-router-dom para mudança de pagina interna de cada pokemon."
                        LinkGit="https://github.com/MikaelAugustoDev/Pokedex-API"
                        ImageProject={ImgPokeapi}
                        DescriptionImage="Imagem da Landing Page NFTs"
                        Url = "https://pokedex-api-mikael.vercel.app/"
                    />

                    <CardProject
                        NameCard="Formulário de Cadastro"
                        ListLanguages="react | styled-component | typescript | regex"
                        Description="Pagina de Pokemons feita inteira consumindo a API dos Pokemons no site poke.api utilizando React, estilizando com styled-components, alguns botões prontos do mateiral UI, context-api para mudança de thema e react-router-dom para mudança de pagina interna de cada pokemon."
                        LinkGit="https://github.com/MikaelAugustoDev/Formulario-Camp"
                        ImageProject={ImgForm}
                        DescriptionImage="Imagem do Formulário"
                        Url = "https://formulario-camp-mikael.vercel.app/"
                    />

                    <CardProject
                        NameCard="LandingPage Mario"
                        ListLanguages="html | css | javascript"
                        Description="Landing Page Trailer do Mario, feita com o básico da programação frontend: html, css e javascript."
                        LinkGit="https://github.com/MikaelAugustoDev/MarioDevemDobro"
                        ImageProject={ImgMario}
                        DescriptionImage="Imagem da Landing Mario"
                        Url = "https://mario-devem-dobro-mikael-dev.vercel.app/"
                    />

                    <CardProject
                        NameCard="App Gerador de Frases"
                        ListLanguages="html | css | javascript | api"
                        Description="Projeto de um gerador de frases feita com o consumo de uma api de frases."
                        LinkGit="https://github.com/MikaelAugustoDev/GeradordeFrasesMikaelDev"
                        ImageProject={ImgAppFrases}
                        DescriptionImage="Imagem do App gerador de frases"
                        Url = "https://geradorde-frases-mikael-dev.vercel.app/"
                    />

                    <CardProject
                        NameCard="Page Cartão"
                        ListLanguages="html | css | javascript | regex"
                        Description="Pagina feita para simular a adição de um cartão em uma pagina de compras"
                        LinkGit="https://github.com/MikaelAugustoDev/ProjetoCartaoMikael"
                        ImageProject={ImgCartao}
                        DescriptionImage="Imagem da Landing Mario"
                        Url = "https://projeto-cartao-mikael.vercel.app/"
                    />

                </DivProjects>

            </Main>

            <Footer />

        </>

    )

}

const DivProjects = styled.div`
    width: 90%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0px;
    gap: 50px;
`

const Main = styled.main`
    width: 100%;
    min-height: 100vh;
    transition: 0.5s ease-in-out;
    display: flex;
    justify-content: center;
`

export { Projetos }