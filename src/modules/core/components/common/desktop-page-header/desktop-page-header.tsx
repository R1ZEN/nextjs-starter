import React from 'react';
import { PageHeaderWrapper } from './desktop-page-header.styled';

export interface IDesktopPageHeaderProps {}

export const DesktopPageHeader: React.FC<IDesktopPageHeaderProps> = (props) => {
  const {} = props;

  return <PageHeaderWrapper>Header</PageHeaderWrapper>;
};
