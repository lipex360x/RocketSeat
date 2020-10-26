import styled, { css } from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

const font = {
  regular: css`
    font-family: 'RobotoSlab-Regular';
  `,
  medium: css`
    font-family: 'RobotoSlab-Medium';
  `,
};

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 120 : 40}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  ${font.medium};

  margin: 64px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotText = styled.Text`
  color: #f4ede8;
  font-size: 16px;
  ${font.regular};
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;

  background: #312e38;
  border-top-width: 1px;
  border-color: #232129;
  padding: 16px 0 ${10 + getBottomSpace()}px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateAccountText = styled.Text`
  color: #ff9000;
  font-size: 18px;
  ${font.regular}
  margin-left: 8px;
`;
