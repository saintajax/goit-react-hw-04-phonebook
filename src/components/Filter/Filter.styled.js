import styled from 'styled-components';

export const Label = styled.label`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 180px;
  height: 30px;
  border-radius: ${props => props.theme.radii.md};
  background-color: ${props => props.theme.colors.muted};
  font-size: 18px;
  padding-left: 10px;
`;
