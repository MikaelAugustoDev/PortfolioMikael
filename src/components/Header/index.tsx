import styled from "styled-components"
import ButtonTheme from "../ButtonTheme"
import { useContext } from "react"
import { ThemeContext } from "../../contexts"
import { Link } from "react-router-dom"
import HamburguerMenu from "../MenuHamburguer"

const HeaderPage = () => {

    const { theme }: any = useContext(ThemeContext)

    return (

        <Header style={{ background: theme.fundo, borderBottom: theme.line }}>

            <DivLogo>

                <LinkEdit to="/">

                    <Logo style={{ color: theme.destaque }}>{"<"}Mikael{"/>"}</Logo>

                </LinkEdit>

            </DivLogo>

            <DivInfos>

                <ButtonTheme />

                <LinkEdit to="/sobre">

                    <Item style={{ color: theme.texto }}>Sobre</Item>

                </LinkEdit>

                <LinkEdit to="/habilidades">

                    <Item style={{ color: theme.texto }}>Habilidades</Item>

                </LinkEdit>

                <LinkEdit to="/projetos">

                    <Item style={{ color: theme.texto }}>Projetos</Item>

                </LinkEdit>

            </DivInfos>

            <MenuHamburguer>

                <HamburguerMenu />

            </MenuHamburguer>

        </Header>

    )

}

const MenuHamburguer = styled.div`
    width: 40%;
    height: 100%;
    display: none;

    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
`

const Item = styled.h2`
    font-size: 26px;
    font-weight: light;
    transition: 0.3s ease-in-out;

    :hover {
        transform: translate(0px, -5px);
        color: #007bdd !important;
    }
`

const DivInfos = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;

    @media (max-width: 768px) {
        display: none;
    }
`

const LinkEdit = styled(Link)`
    text-decoration: none;
`

const Logo = styled.h1`
    font-size: 40px;
    font-weight: 400;
    transition: 0.3s ease-in-out;

    :hover {
        transform: translate(0px, -5px);
    }
`

const DivLogo = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
`

const Header = styled.header`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    border-width
    display: flex;
    transition: 0.5s ease-in-out;
    justify-content: space-between;
    padding: 0 30px;
`

export { HeaderPage }