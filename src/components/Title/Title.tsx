import React from 'react';

export interface ITitleProps {}

export const Title: React.FC<ITitleProps> = (props) => {
  const { children } = props;

  return <h1>{children}</h1>;
};
