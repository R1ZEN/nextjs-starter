import React from 'react';
import {
  FooterList,
  FooterListItem,
  FooterSection,
  FooterTitle,
  FooterWrapper,
  ItemLink,
} from './desktop-page-footer.styled';

export interface IDesktopPageFooterProps {}

const linkList = [
  { title: 'Help', url: '' },
  { title: 'Blog', url: '' },
  { title: 'Terms of Use', url: '' },
  { title: 'Privacy Policy', url: '' },
  { title: 'Affiliates', url: '' },
];

export const DesktopPageFooter: React.FC<IDesktopPageFooterProps> = (props) => {
  const {} = props;

  return (
    <FooterSection>
      <FooterWrapper>
        <FooterTitle>
          Grinfer e-learning platform. {new Date().getFullYear()}
        </FooterTitle>

        <FooterList>
          {linkList.map(({ title, url }) => (
            <FooterListItem key={title}>
              <ItemLink href={url}>{title}</ItemLink>
            </FooterListItem>
          ))}
        </FooterList>
      </FooterWrapper>
    </FooterSection>
  );
};
