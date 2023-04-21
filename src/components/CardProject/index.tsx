import styled from "styled-components"
import { useContext } from "react"
import { ThemeContext } from "../../contexts"
import { animated, useSpring } from 'react-spring';
import { useInView } from 'react-intersection-observer';

interface CardType {
    NameCard: string,
    ListLanguages: string,
    Description: string,
    ImageProject: string,
    DescriptionImage: string,
    LinkGit?: string,
    Url?: string
}

const CardProject = (props: CardType) => {

    const [ref, inView] = useInView();

    const aparecer = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0px)' : 'translateY(50px)',
        config: { mass: 1, tension: 300, friction: 100 },
    });

    const { theme }: any = useContext(ThemeContext)

    return (

        <Animated ref={ref} style={aparecer}>

            <LinkCard target="_blank" href={props.Url}>

                <Card style={{ border: theme.line }}>

                    <DivInfoCard style={{ background: theme.fundoCardProject }}>

                        <TitleCard style={{ color: theme.textCardProject }}>{props.NameCard}</TitleCard>

                        <TitleInfoHability style={{ color: theme.textCardProject }}>Projeto feito com:</TitleInfoHability>

                        <InfoHability style={{ color: theme.textCardProject }}>{props.ListLanguages}</InfoHability>

                        <DescriptionCard style={{ color: theme.textCardProject }}>{props.Description}</DescriptionCard>

                        <ProjectGit target="_blank" href={props.LinkGit}><Button style={{ background: theme.fundo, color: theme.texto }}>Github</Button></ProjectGit>

                    </DivInfoCard>

                    <DivPhotoCard style={{ backgroundImage: `url(${props.ImageProject})` }}></DivPhotoCard>

                </Card>

            </LinkCard>

        </Animated>

    )

}

const LinkCard = styled.a`
    text-decoration: none;
    width: 100%;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Animated = styled(animated.div)`
    width: 100%;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const DivPhotoCard = styled.div`
    width: 40%;
    min-height: 100%;
    background-size: cover;
    background-position: left;
    border-radius: 0px 14px 14px 0px;

    @media (max-width: 768px) {
        width: 100%;
        min-height: 40%;
        border-radius: 14px 14px 0px 0px;
    }

    @media (max-width: 425px) {
        min-height: 30%;
    }
`

const Button = styled.button`
    border-radius: 100%;
    width: 50px;
    height: 50px;
    border: none;
    font-style: italic;
    font-weight: 600;
    transition: 0.3s ease-in-out;

    :hover {
        background: #007bdd !important;
        cursor: pointer;
        box-shadow: 0 0 30px #007bdd;
    }
`

const ProjectGit = styled.a`
`

const DescriptionCard = styled.p`
    word-spacing: 5px;
    font-weight: 300;
    font-style: italic;

    @media (max-width: 425px) {
        font-size: 14px;
    }
`

const InfoHability = styled.p`
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;

    @media (max-width: 425px) {
        font-size: 10px;
    }
`

const TitleInfoHability = styled.h4`
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: -10px;

    @media (max-width: 425px) {
        font-size: 14px;
    }
`

const TitleCard = styled.h2`
    font-size: 30px;
    font-weight: 600;
    font-style: italic;

    @media (max-width: 425px) {

    }
`

const DivInfoCard = styled.div`
    width: 60%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    border-radius: 14px 0px 0px 14px;
    padding: 10px 30px;
    text-align: center;

    @media (max-width: 768px) {
        width: 100%;
        min-height: 60%;
        border-radius: 0px 0px 14px 14px;
    }

    @media (max-width: 425px) {
        min-height: 70%;
    }
`

const Card = styled.div`
    width: 80%;
    min-height: 400px;
    display: flex;
    border-radius: 15px;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        min-height: 700px;
    }

    @media (max-width: 425px) {
        min-height: 700px;
    }

    @media (max-width: 375px) {
        min-height: 750px;
    }

    @media (max-width: 320px) {
        min-height: 800px;
    }

`

export { CardProject }