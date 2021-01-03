import styled from 'styled-components';
import { mixinFont144 } from '../common/mixins/font.mixins';

export const NotFoundArticle = styled.article`
  width: 292px;
  margin: auto auto;
`;

export const NotFoundTitle = styled.h1`
  font-size: 10.8rem;
  color: #e2e4eb;
`;

export const NotFoundParagraph = styled.p`
  ${mixinFont144};
  margin-top: 1.6rem;
  color: #637381;
`;

export const NotFoundLink = styled.a`
  color: #6554c0;
  text-decoration: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  transition: color 0.3s;
`;
