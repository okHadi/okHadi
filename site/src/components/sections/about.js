import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '//';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-xs);
        font-weight: 700;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--lightest-navy);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      filter: grayscale(100%) contrast(1.1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'Python',
    'TypeScript/JavaScript',
    'Bash',
    'React',
    'ExpressJS',
    'Flask',
    'AWS',
    'Terraform',
    'Docker',
    'GitHub Actions',
    'Cloudflare',
    'Prompt Engineering',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hey — I'm Hadi. I started in tech by trying to write malware in 2019.
              That didn't work out, but it sparked something. Since then, I've been building
              backends, shipping products, and scaling infrastructure.
            </p>

            <p>
              Right now, I'm wearing a couple of hats: AI Product Manager at{' '}
              <a href="https://vyro.ai/">Vyro.ai</a> where I ship AI-powered products (like{' '}
              <a href="https://chatly.ai/" target="_blank" rel="noopener noreferrer">Chatly.ai</a> and{' '}
              <a href="https://imagine.art/" target="_blank" rel="noopener noreferrer">Imagine.art</a>), and co-founding{' '}
              <a href="https://parhlai.com/">Parhlai</a> (Pakistan's first AI-powered ed-tech
              for university entry tests). Previously, I spent 3+ years building cloud
              infrastructure at{' '}
              <a href="https://syslify.com/">Syslify</a> for clients worldwide.
            </p>

            <p>
              I care about building things that actually work — lean, fast, and cost-effective.
              At Parhlai, our entire serverless infrastructure runs at ~1% of total costs.
              I'm also pursuing my CS degree at{' '}
              <a href="https://nust.edu.pk/">NUST</a>.
            </p>

            <p>Technologies I work with:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
