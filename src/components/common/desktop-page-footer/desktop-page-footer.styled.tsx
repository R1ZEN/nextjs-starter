import styled from 'styled-components';
import { mixinFont144 } from '../mixins/font.mixins';
import { theme } from '../theme';
import { mixinsDesktopContainer } from '../mixins/container.mixins';

export const FooterSection = styled.footer`
  border-top: 1px solid ${theme.grey};
  background: ${theme.white};
`;

export const FooterTitle = styled.strong`
  ${mixinFont144};
`;

export const FooterWrapper = styled.div`
  ${mixinsDesktopContainer};
  display: flex;
  padding: 30px 0;
  justify-content: space-between;
`;

export const FooterList = styled.ul`
  display: flex;
`;

export const FooterListItem = styled.li`
  &:not(:last-child) {
    padding-right: 40px;
  }
`;

export const ItemLink = styled.a`
  ${mixinFont144};
  color: #6554c0;
`;
