import styled from 'styled-components';
import { Field, Form } from 'formik';

export const ContactsForm = styled(Form)`
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
  border: ${props => props.theme.borders.normal};
  padding: ${props => props.theme.space[3]}px;
`;

export const Label = styled.label`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 8px;
`;

export const Input = styled(Field)`
  width: 180px;
  height: 30px;
  border-radius: ${props => props.theme.radii.md};
  background-color: ${props => props.theme.colors.muted};
  font-size: 18px;
  padding-left: 10px;
`;

export const Btn = styled.button`
  width: 150px;
  height: 30px;
  border: 2px solid ${props => props.theme.colors.black};
  border-radius: ${props => props.theme.radii.sm};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.bold};
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :active {
    background-color: ${props => props.theme.colors.accent};
    scale: 0.95;
  }
`;
