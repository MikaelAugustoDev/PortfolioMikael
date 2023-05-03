import { HeaderPage } from "../../components/Header"
import styled from "styled-components"
import { ThemeContext } from "../../contexts"
import { useContext } from "react"
import { Footer } from "../../components/Footer"
import { CardHabilite } from "../../components/CardHabilidades"
import ReactLogo from "../../assets/react-svgrepo-com.svg"
import ReduxLogo from "../../assets/redux-svgrepo-com (2).svg"
import SCLogo from "../../assets/styled-components-svgrepo-com.svg"
import TSLogo from "../../assets/typescript-icon-svgrepo-com.svg"
import JSLogo from "../../assets/javascript-svgrepo-com (1).svg"
import NodeLogo from "../../assets/nodejs02-svgrepo-com.svg"
import JestLogo from "../../assets/jest-svgrepo-com.svg"
import MUILogo from "../../assets/material-ui-svgrepo-com.svg"
import PSQLLogo from "../../assets/postgresql-svgrepo-com.svg"
import MSQLLogo from "../../assets/mysql-svgrepo-com.svg"
import SassLogo from "../../assets/sass-svgrepo-com.svg"
import CSSLogo from "../../assets/css3-02-svgrepo-com.svg"
import HTMLLogo from "../../assets/html-124-svgrepo-com.svg"
import HanLogo from "../../assets/handlebars-svgrepo-com.svg"


const Habilidades = () => {

    const { theme }: any = useContext(ThemeContext)

    return (

        <>

            <HeaderPage />

            <Title style={{ background: theme.fundo, color: theme.texto }}>Habilidades</Title>

            <Main style={{ background: theme.fundo }}>

                <CardHabilite
                    img={ReactLogo}
                    name="React"
                />

                <CardHabilite
                    img={ReduxLogo}
                    name="Redux"
                />

                <CardHabilite
                    img={MUILogo}
                    name="Material UI"
                />

                <CardHabilite
                    img={SCLogo}
                    name="Styled Component"
                />

                <CardHabilite
                    img={TSLogo}
                    name="Typescript"
                />

                <CardHabilite
                    img={JSLogo}
                    name="Javascript"
                />

                <CardHabilite
                    img={NodeLogo}
                    name="NodeJS"
                />

                <CardHabilite
                    img={JestLogo}
                    name="JEST"
                />

                <CardHabilite
                    img={PSQLLogo}
                    name="PostgreSQL"
                />

                <CardHabilite
                    img={MSQLLogo}
                    name="MySQL"
                />

                <CardHabilite
                    img={SassLogo}
                    name="SASS"
                />

                <CardHabilite
                    img={CSSLogo}
                    name="CSS"
                />

                <CardHabilite
                    img={HTMLLogo}
                    name="HTML"
                />

                <CardHabilite
                    img={HanLogo}
                    name="Handlebars"
                />

            </Main>

            <Footer />

        </>

    )

}

export { Habilidades }

const Title = styled.h2`
    text-align: center;
    padding-top: 20px;
    margin-bottom: -30px;
    font-size: 40px;
    transition: 0.5s ease-in-out;
`

const Main = styled.main`
    width: 100%;
    min-height: 88vh;
    transition: 0.5s ease-in-out;
    display: flex;
    flex-wrap: wrap;
    padding: 35px;
    gap: 5px;
    align-items: center;
    justify-content: center;

    @media (max-width: 375px) {
        padding: 50px 0px
    }
`