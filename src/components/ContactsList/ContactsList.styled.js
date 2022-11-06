import styled, { keyframes } from 'styled-components';
import { TransitionGroup } from 'react-transition-group';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-200px)
  }
  100% {
    opacity: 1;
    transform: translateX(0px)
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0px)
  }
  100% {
    opacity: 0;
    transform: translateX(+200px)
  }
`;

export const List = styled(TransitionGroup)`
  /* list-style: none; */
  padding: ${props => props.theme.space[0]}px;
  margin: ${props => props.theme.space[0]}px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: ${props => props.theme.space[4]}px;

  &.my-active-enter {
    animation: ${fadeIn} 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  &.my-active-exit {
    animation: ${fadeOut} 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }
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
