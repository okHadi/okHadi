import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 20px 2px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;
    letter-spacing: 0.05em;
    text-transform: uppercase;

    @media (max-width: 480px) {
      margin: 0 0 15px 2px;
    }
  }

  h2.big-heading {
    font-size: clamp(50px, 10vw, 100px);
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 0.95;
  }

  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.95;
    font-size: clamp(30px, 6vw, 55px);
    font-weight: 600;
    letter-spacing: -0.02em;
  }

  p {
    margin: 30px 0 0;
    max-width: 560px;
    line-height: 1.6;
    color: var(--slate);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Hadi Khan.</h2>;
  const three = <h3 className="big-heading">I build things that scale.</h3>;
  const four = (
    <>
      <p>
        Software engineer, product builder, and startup co-founder. I work across the full stack
        — from backend systems and cloud infrastructure to shipping AI-powered products.
        Currently building at{' '}
        <a href="https://vyro.ai/" target="_blank" rel="noreferrer">
          Vyro.ai
        </a>{' '}
        and co-founding{' '}
        <a href="https://parhlai.com/" target="_blank" rel="noreferrer">
          Parhlai
        </a>.
      </p>
    </>
  );
  const five = (
    <a
      className="email-link"
      href="mailto:hello@mhadi.dev"
      rel="noreferrer">
      Get In Touch
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
