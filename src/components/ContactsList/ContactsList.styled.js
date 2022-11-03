import styled from 'styled-components';

export const List = styled.ul`
  /* list-style: none; */
  padding: ${props => props.theme.space[0]}px;
  margin: ${props => props.theme.space[0]}px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: ${props => props.theme.space[4]}px;
`;

export const Text = styled.p`
  font-size: ${props => props.theme.fontSizes.l};
  margin-top: ${props => props.theme.space[0]}px;
  margin-bottom: ${props => props.theme.space[0]}px;
`;

export const Link = styled.a`
  text-decoration: none;
  margin-right: 10px;
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: ${props => props.theme.radii.round};
`;
