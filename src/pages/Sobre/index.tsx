import { useContext } from "react"
import { HeaderPage } from "../../components/Header"
import { ThemeContext } from "../../contexts"
import styled from "styled-components"
import { Footer } from "../../components/Footer"
import { Link } from "react-router-dom"
import Curriculo from "../../assets/CurriculoMikael.pdf"

const Sobre = () => {
    
    const { theme }: any = useContext(ThemeContext)

    return (

        <>
        
            <HeaderPage/>

            <Main style={{ background: theme.fundo }}>

                <DivSobre style={{ border: theme.line }}>

                    <Title style={{ color: theme.texto }}>Sobre Mim</Title>
                    
                    <SobreMim style={{ color: theme.texto }}>Prazer, me chamo Mikael e tenho 21 anos de idade, sou apaixonado pela área de TI e atualmente sou Desenvolvedor Web Frontend com algumas noções de Backend, comecei meus estudos na trila da Rocketseat, onde tive noções básicas de como é a carreira de desenvolvimento web e logo após investi a fundo em um curso em alta no mercado de desenvolvedores fullstack chamado DevQuest, e foi então que aprimorei meus conhecimentos na programação frontend e parti para aprender também o backend, pretendo futuramente me tornar um bom desenvolvedor Fullstack, aprender desenvolvimento mobile e após isso aprender então a programação de games, já tenho alguns <A style={{ color: theme.destaque }} to="/projetos">projetos pessoais</A> e alguns trabalhos que fiz como freelancer, segue meu currículo abaixo !</SobreMim>

                    <Baixar download href={Curriculo}><Button style={{ background: theme.destaque }}>Baixar CV</Button></Baixar>

                </DivSobre>

            </Main>

            <Footer/>
        
        </>

    )

} 

export { Sobre }

const Baixar = styled.a`
    text-decoration: none;
`

const A = styled(Link)`
    text-decoration: none;
`

const Button = styled.button`
    width: 200px;
    height: 40px;
    font-size: 16px;
    font-weight: 600;
    border: none;
    border-radius: 5px;
    color: white;
    transition: 0.5s ease-in-out;

    :hover {
        cursor: pointer;
        transform: translate(0px, -10px);
    }
`

const SobreMim = styled.p`
    text-align: center;
    font-size: 18px;
    line-height: 35px;
`

const Title = styled.h2`
    text-align: center;
    font-size: 30px;
    font-weight: 400;
`

const DivSobre = styled.div`
    width: 80%;
    height: 80%;
    padding: 20px 60px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    @media (max-width: 425px) {
        padding: 10px;
        width: 90%;
    }
`

const Main = styled.main`
    width: 100%;
    min-height: 88vh;
    transition: 0.5s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        padding: 20px 0;
    }
`