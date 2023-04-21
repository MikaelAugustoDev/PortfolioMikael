import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom"
import ButtonTheme from '../ButtonTheme';
import { ThemeContext } from '../../contexts';

const HamburguerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { theme }: any = useContext(ThemeContext)

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
    setIsMenuOpen(!isMenuOpen)
  };

  useEffect(() => {
    if (isMenuOpen) {
      // Desabilitar o scroll da página
      document.body.style.overflow = 'hidden';
    } else {
      // Habilitar o scroll da página
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <>
      <HamburguerIcon onClick={handleMenuClick} isOpen={isOpen}>
        <span style={{ background: theme.texto }}></span>
        <span style={{ background: theme.texto }}></span>
        <span style={{ background: theme.texto }}></span>
      </HamburguerIcon>
      <MenuWrapper  style={{ background: theme.fundo }} isOpen={isOpen}>
        <MenuItems>

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

        </MenuItems>
      </MenuWrapper>
    </>
  );
};

const Item = styled.h2`
    font-size: 26px;
    font-weight: light;
    text-align: center;
    transition: 0.3s ease-in-out;

    :hover {
        transform: translate(0px, -5px)
    }
`

const LinkEdit = styled(Link)`
    text-decoration: none;
`

const HamburguerIcon = styled.div<{ isOpen: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    cursor: pointer;
    z-index: 100;

    span {
      width: 100%;
      height: 3px;
      margin-bottom: 5px;
      transition: transform 0.3s, opacity 0.3s;
    }

    & span:first-child {
      transform: translateY(${props => (props.isOpen ? '8px' : '0')}) rotate(${props => (props.isOpen ? '45deg' : '0')});
    }

    & span:nth-child(2) {
      opacity: ${props => (props.isOpen ? '0' : '1')};
    }

    & span:last-child {
      transform: translateY(${props => (props.isOpen ? '-8px' : '0')}) rotate(${props => (props.isOpen ? '-45deg' : '0')});
    }
  }
`;

const MenuWrapper = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  z-index: 20;
  align-items: center;
  opacity: ${props => (props.isOpen ? '1' : '0')};
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s, visibility 0.3s;
`;

const MenuItems = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export default HamburguerMenu;