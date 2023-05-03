import styled from "styled-components"
import { ThemeContext } from "../../contexts"
import { useContext } from "react"

interface Card {
    img:string,
    name:string
}

const CardHabilite = (props:Card) => {

    const { theme }: any = useContext(ThemeContext)

    return (

        <Card style={{ border: theme.linePhoto }}>

            <Imagem src={props.img} alt={props.name}/>

            <Name style={{ color: theme.texto }}>{props.name}</Name>

        </Card>

    )

}

const Card = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: 0.5s ease-in-out;

    :hover {
        Img {
            display: none;
        }

        P {
            display: flex;
        }
    }
`

const Imagem = styled.img`
    width: 60%;
    height: 60%;
`

const Name = styled.p`
    display: none;
    font-size: 20px;
    font-weight: 700;
`

export { CardHabilite }