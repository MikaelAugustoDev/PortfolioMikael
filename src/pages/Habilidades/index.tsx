import { HeaderPage } from "../../components/Header"
import styled from "styled-components"
import { ThemeContext } from "../../contexts"
import { useContext } from "react"
import SkillProgressCircle from "../../components/ProgressSkill"
import { Footer } from "../../components/Footer"

const Habilidades = () => {

    const { theme }: any = useContext(ThemeContext)

    return (

        <>

            <HeaderPage />

            <Title style={{ background: theme.fundo, color: theme.texto }}>Habilidades</Title>

            <Main style={{ background: theme.fundo }}>

                <SkillProgressCircle skillName="React" progress={85} />
                <SkillProgressCircle skillName="Styled Components" progress={97} />
                <SkillProgressCircle skillName="Typescript" progress={80} />
                <SkillProgressCircle skillName="Redux" progress={70} />
                <SkillProgressCircle skillName="ContexAPI" progress={95} />
                <SkillProgressCircle skillName="MaterialUI" progress={99} />
                <SkillProgressCircle skillName="Jest" progress={60} />
                <SkillProgressCircle skillName="HTML" progress={99} />
                <SkillProgressCircle skillName="CSS" progress={95} />
                <SkillProgressCircle skillName="Sass" progress={95} />
                <SkillProgressCircle skillName="Javascript" progress={90} />
                <SkillProgressCircle skillName="Regex" progress={95} />
                <SkillProgressCircle skillName="PostgreSQL" progress={50} />
                <SkillProgressCircle skillName="NodeJS" progress={30} />

            </Main>

            <Footer/>

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