import React from 'react';
import {
  NotFoundArticle,
  NotFoundLink,
  NotFoundParagraph,
  NotFoundTitle,
} from './desktop-not-found.styled';

export interface IDesktopNotFoundProps {}

export const DesktopNotFound: React.FC<IDesktopNotFoundProps> = (props) => {
  const {} = props;

  return (
    <NotFoundArticle>
      <NotFoundTitle>Oops!</NotFoundTitle>
      <NotFoundParagraph>
        We cannot find the page you are looking for. Try searching our
        <NotFoundLink href="">course catalog</NotFoundLink>, or{' '}
        <NotFoundLink href="">go back to home</NotFoundLink>.
      </NotFoundParagraph>
      <NotFoundParagraph>
        Visit our <NotFoundLink href="">help page</NotFoundLink> for any
        questions.
      </NotFoundParagraph>
    </NotFoundArticle>
  );
};
