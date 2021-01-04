import { css } from 'styled-components';

export const mixinsDesktopContainer = css`
  display: block;
  margin: 0 auto;

  @media (min-width: 1200px) {
    max-width: 1200px;
  }

  @media (min-width: 1020px) {
    max-width: 1020px;
  }

  @media (min-width: 720px) {
    max-width: 720px;
  }

  @media (min-width: 600px) {
    max-width: 600px;
  }
`;
