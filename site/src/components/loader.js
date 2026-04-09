import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';
import styled from 'styled-components';

const StyledLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--dark-navy);
  z-index: 99;

  .progress-bar {
    position: absolute;
    top: 0;
    left: 0;
    height: 2px;
    width: 0;
    background-color: var(--green);
    box-shadow: 0 0 8px var(--green);
  }
`;

const Loader = ({ finishLoading }) => {
  useEffect(() => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      .add({
        targets: '.progress-bar',
        width: '100%',
        duration: 600,
        easing: 'easeInOutQuart',
      })
      .add({
        targets: '.loader',
        opacity: 0,
        duration: 300,
        easing: 'easeInOutQuart',
      });
  }, []);

  return (
    <StyledLoader className="loader">
      <div className="progress-bar" />
    </StyledLoader>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;
