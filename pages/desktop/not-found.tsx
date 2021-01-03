import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer``;

const FooterWrapper = styled.div`
  display: flex;
`;

const FooterList = styled.ul`
  display: flex;
`;

const FooterListItem = styled.li``;

export default function NotFound() {
  return (
    <div>
      <div></div>
      <main></main>

      <FooterSection>
        <FooterWrapper>
          <strong>Grinfer e-learning platform. 2020</strong>
          <FooterList>
            <FooterListItem>
              <a href="">Help</a>
            </FooterListItem>
            <FooterListItem>
              <a href="">Blog</a>
            </FooterListItem>
            <FooterListItem>
              <a href="">Terms of Use</a>
            </FooterListItem>
          </FooterList>
        </FooterWrapper>
      </FooterSection>
    </div>
  );
}
