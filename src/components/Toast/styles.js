import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

const typeColorsText = {
  info: '#3172b7',
  success: '#2e656a',
  error: '#f53030',
};

const typeColorsContainer = {
  info: "#ebe8ff",
  success: "#e6fffa",
  error: "#fddede",
};

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  background-color: ${({ type }) => typeColorsContainer[type]};
  border-color: ${({ type }) => typeColorsContainer[type]};
  border-top-width: 1px;
  padding: 16px;
  margin: 20px;
  position: absolute;
  left: 0;
  bottom: 8px;
  right: 0;

  align-items: center;
  flex-direction: row;
`;

export const Icon = styled(Feather).attrs(({type}) => ({
  color: typeColorsText[type]
}))`
`;

export const Info = styled.View`
  margin-left: 10px;
  flex:1;
`;

export const Title = styled.Text.attrs({
  numberOfLines : 2,
})`
  color: ${({ type }) => typeColorsText[type]};
  font-size: 15px;
  font-weight: bold;
`;

export const Description = styled.Text`
  color: ${({ type }) => typeColorsText[type]};
  font-size: 13px;
  font-weight: bold;
`;

export const ButtonAction = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: ${({ type }) => typeColorsText[type]};
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
`;

export const ButtonActionText = styled.Text.attrs({
  numberOfLines : 2,
})`
  color: #FFF;
  font-size: 13px;
  font-weight: 500;
`;