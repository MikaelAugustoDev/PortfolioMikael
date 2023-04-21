import styled from "styled-components"
import { HeaderPage } from "../../components/Header"
import { useContext } from "react"
import { ThemeContext } from "../../contexts"
import { TypeAnimation } from "react-type-animation"
import { Footer } from "../../components/Footer"
import ImagePerfil from "../../assets/img-perfil.png"

const Home = () => {

    const { theme }: any = useContext(ThemeContext)

    return (

        <>

            <HeaderPage />

            <Main style={{ background: theme.fundo }}>

                <DivPhoto>

                    <Photo style={{ border: theme.linePhoto, boxShadow: theme.boxShadow}}></Photo>

                </DivPhoto>

                <DivTexts>

                    <Text style={{ color: theme.texto }}>Olá,</Text>

                    <Name style={{ color: theme.texto }}>Sou o Mikael !</Name>

                    <Animacao
                        sequence={[
                            'Desenvolvedor Frontend',
                            1000,
                            'Estudante Backend',
                            1000,
                        ]}
                        speed={1}
                        repeat={Infinity}
                    />

                </DivTexts>

            </Main>

            <Footer />

        </>

    )

}

const Photo = styled.div`
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background-image: url("${ImagePerfil}");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #2C3E50;

    @media (max-width: 768px) {
        margin-top: 50px;
        margin-bottom: 50px;
    }

    @media (max-width: 425px) {
        width: 300px;
        height: 300px;

    }
`

const Animacao = styled(TypeAnimation)`
    font-size: 30px;
    fontWeight: 400;
    color: #007bdd;

    @media (max-width: 768px) {
        margin-left: 32px;
        width: 370px;
    }

    @media (max-width: 375px) {
        width: 230px;
        height: 100px;
        margin-right: 53px;
    }
`

const Name = styled.h1`
    font-size: 45px;
    font-weight: 600;

    @media (max-width: 768px) {
        margin-right: 36px;
    }

    @media (max-width: 425px) {
        margin-right: 45px;
    }

    @media (max-width: 375px) {
        font-size: 35px;
        margin-left: 28px;
    }
`

const Text = styled.h3`
    font-size: 30px;
    font-weight: 400;

    @media (max-width: 768px) {
        margin-right: 280px;
    }

    @media (max-width: 425px) {
        margin-right: 280px;
    }

    @media (max-width: 375px) {
        margin-right: 195px;
    }
`

const DivTexts = styled.div`
    width: 50%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {
        width: 100%;
        height: 50%;
        align-items: center;
        text-align: justify;
        margin-bottom: 50px;
    }
`
const DivPhoto = styled.div`
    width: 50%;
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        width: 100%;
        height: 50%;
    }
`

const Main = styled.main`
    width: 100%;
    min-height: 88vh;
    transition: 0.5s ease-in-out;
    display: flex;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`

export { Home }