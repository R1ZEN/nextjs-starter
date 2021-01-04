import React from 'react';
import { DesktopPageHeader } from '../desktop-page-header/desktop-page-header';
import { DesktopPageFooter } from '../desktop-page-footer/desktop-page-footer';
import { PageLayoutWrapper } from './desktop-page-layout.styled';

export interface IDesktopPageLayoutProps {}

export const DesktopPageLayout: React.FC<IDesktopPageLayoutProps> = (props) => {
  const { children } = props;

  return (
    <PageLayoutWrapper>
      <DesktopPageHeader />
      {children || <article />}
      <DesktopPageFooter />
    </PageLayoutWrapper>
  );
};
