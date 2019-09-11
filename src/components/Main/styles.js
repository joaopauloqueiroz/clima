import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 10px;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #069;
  /* align-self: stretch; */
`;

export const ImageView = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const Text = styled.Text`
  color: #fff;
  font-weight: 500;
  font-family: 'Roboto, sans-serif';
  font-size: ${props => (props.size ? props.size : 18)};
`;
