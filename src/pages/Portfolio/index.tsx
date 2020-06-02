import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Project, Text } from './styles';
import berg from '../../assets/berg.png';
import astroMuri from '../../assets/astro_muri.png';

const Portfolio: React.FC = () => {
  return (
    <Container>
      <p>Experiência</p>
      <strong>
        - Graduação:
        <span> Graduando em Engenharia de Redes de Comunicações na UnB</span>
      </strong>
      <strong>
        - Estágio:
        <span>
          {' '}
          6 meses de experiência em desenvolvimento mobile com React Native
        </span>
      </strong>

      <p>Projetos</p>
      <Link to="/portfolio/astromuri">
        <Project>
          <img src={astroMuri} alt="Astro Muri" />
          <Text>
            <strong>
              - Função:
              <span> Desenvolvedor Frontend</span>
            </strong>
            <br />
            <strong>
              - Descrição:
              <span>
                {' '}
                Ricardo Muri é um astrólogo famoso e influencer, e “Astro Muri”
                é um aplicativo mobile híbrido que faz streaming do seu
                conteúdo. Eu desenvolvi tudo relacionado à tela de login, o
                processo de pagamento (usando o pagseguro), e conectei todas as
                páginas ao backend (firebase).
              </span>
            </strong>
          </Text>
        </Project>
      </Link>
      <Link to="/portfolio/bergdaniel">
        <Project>
          <img src={berg} alt="BERG" />
          <Text>
            <strong>
              - Função:
              <span> Desenvolvedor Frontend</span>
            </strong>
            <br />
            <strong>
              - Descrição:
              <span>
                {' '}
                bergdaniel.com.br é o site que você está acessando. Eu o criei
                do completo zero, desde a concepção da arquitetura e navegação
                de páginas no whimsical e o design no Figma até o
                desenvolvimento com React.
              </span>
            </strong>
          </Text>
        </Project>
      </Link>
    </Container>
  );
};

export default Portfolio;
