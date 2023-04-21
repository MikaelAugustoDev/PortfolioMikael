import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts';
import styled from 'styled-components';

interface SkillProgressCircleProps {
  skillName: string;
  progress: number;
}

const SkillProgressCircle: React.FC<SkillProgressCircleProps> = ({ skillName, progress }) => {
  const radius = 75; // Raio do círculo
  const circumference = 2 * Math.PI * radius; // Circunferência do círculo
  const offset = circumference - (progress / 100) * circumference; // Cálculo do offset para o progresso

  const { theme }: any = useContext(ThemeContext)

  return (
    <div
      style={{
        width: radius * 2 + 20, // Aumentando 20 para garantir espaço para o círculo completo
        height: radius * 2 + 20,
        position: 'relative',
        overflow: 'visible',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      <svg
        width={radius * 2 + 20} // Aumentando 20 para garantir espaço para o círculo completo
        height={radius * 2 + 20}
        style={{ position: 'absolute', zIndex: 1 }}
      >
        <circle
          r={radius}
          cx={radius + 10} // Ajustando a posição do círculo no centro do SVG
          cy={radius + 10} // Ajustando a posição do círculo no centro do SVG
          fill="transparent"
          stroke="#f0f0f0"
          strokeWidth={10}
        />
        <circle
          r={radius}
          cx={radius + 10} // Ajustando a posição do círculo no centro do SVG
          cy={radius + 10} // Ajustando a posição do círculo no centro do SVG
          fill="transparent"
          stroke={theme.destaque}
          strokeWidth={10}
          strokeDasharray={circumference} // Atualizando para a circunferência completa do círculo
          strokeDashoffset={offset}
          transform={`rotate(-90 ${radius + 10} ${radius + 10})`} // Ajustando a posição do círculo no centro do SVG
        />
      </svg>
      <Name style={{ color: theme.texto }}>
        {skillName}
      </Name>
    </div>
  );
};

export default SkillProgressCircle;

const mediaQuery = '@media (max-width: 425px)';

const Name = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  z-index: 2;

  ${mediaQuery} {
    radius: 40;
  }
`
