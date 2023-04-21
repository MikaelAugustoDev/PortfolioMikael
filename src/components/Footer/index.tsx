import { useContext } from "react"
import styled from "styled-components"
import { ThemeContext } from "../../contexts"
import Whats from "../../assets/wpp.svg"
import Linkedin from "../../assets/linkedin.svg"
import GitHub from "../../assets/github.svg"
import Email from "../../assets/email.svg"

const Footer = () => {

    const { theme }: any = useContext(ThemeContext)

    return (

        <Footers style={{ background: theme.fundo, borderTop: theme.line }}>

            <DivUm>

                <H3 style={{ color: theme.texto }}>©2023</H3>
                <P style={{ color: theme.texto }}>Mikael Augusto</P>

            </DivUm>

            <DivDois>

                <H3 style={{ color: theme.texto }}>E-mail</H3>
                <A href="mailto: mikaelaugustodev@gmail.com">
                    <P style={{ color: theme.texto }}>mikaelaugustodev@gmail.com</P>
                </A>

            </DivDois>

            <DivTres>

                <H3 style={{ color: theme.texto }}>Telefone</H3>
                <P style={{ color: theme.texto }}>(35) 9 9856-5922</P>

            </DivTres>

            <DivQuatro>

                <A target="_blank" href="https://api.whatsapp.com/send?phone=5535998565922&text=Ol%C3%A1,%20est%C3%A1%20mensagem%20foi%20enviada%20pelo%20link%20de%20seu%20portfolio%20!">
                    <img src={Whats} />
                </A>

                <A target="_blank" href="mailto: mikaelaugustodev@gmail.com">
                    <img src={Email} />
                </A>

                <A target="_blank" href="https://www.linkedin.com/in/mikaelaugustodev/">
                    <img src={Linkedin} />
                </A>

                <A target="_blank" href="https://github.com/MikaelAugustoDev">
                    <img src={GitHub} />
                </A>

            </DivQuatro>

        </Footers>

    )

}

const A = styled.a`
   text-decoration: none;
`

const H3 = styled.h3`
    font-weight: 400;
`

const P = styled.p`
    font-weight: 300;
`

const DivQuatro = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media (max-width: 425px) {
        width: 100%;
        height: 20%;
    }
`

const DivTres = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 425px) {
        width: 100%;
        height: 20%;
    }
`

const DivDois = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 425px) {
        width: 100%;
        height: 20%;
    }
`

const DivUm = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 425px) {
        width: 100%;
        height: 20%;
    }
`

const Footers = styled.footer`
    width: 100%;
    min-height: 150px;
    transition: 0.5s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        gap: 30px;
    }

    @media (max-width: 425px) {
        flex-direction: column;
        padding: 20px 0px;
    }
`

export { Footer }