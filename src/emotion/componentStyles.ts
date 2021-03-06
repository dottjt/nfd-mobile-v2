import { Platform, Dimensions, StatusBar } from 'react-native';
import styled, { css } from '@emotion/native';

export const LoadingContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  width: ${Dimensions.get('window').width};
  height: ${Dimensions.get('window').height};
  padding: 10px;
  padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight};
  margin: 10px;
`;

export const Container = styled.View`
  flex: 1;
  display: flex;
  background: white;
  width: ${Dimensions.get('window').width};
  height: ${Dimensions.get('window').height};
  padding: 10px;
  padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight};
  margin: 10px;
  border: 4px solid black;
`;

export const ContentContainer = styled.View`
  background: white;
  width: ${Dimensions.get('window').width};
  height: ${Dimensions.get('window').height};
  padding: 10px;
  padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight};
  margin: 10px;
  border: 4px solid black;
`;

export const ModalContainer = styled.View`
  background: white;
  width: ${Dimensions.get('window').width * 0.9};
  height: ${Dimensions.get('window').height * 0.6};
  padding: 10px;
  padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight};
  margin: 10px;
  border: 4px solid black;
`;

export const Item = styled.View`
  display: flex;

  width: ${Dimensions.get('window').width};

  padding: 8px;
  background: white;
  border: 4px solid rgba(255, 46, 182, 1);
  box-shadow: -5px 5px 0px rgba(0, 255, 255, 1);
  elevation: 2;
  color: #212121;
  transition: shadow-offset 0.2s, border-bottom 0.1s;

  margin-bottom: 16px;
`;

export const ItemTitle = styled.Text`
  width: ${Dimensions.get('window').width * 0.7};
  font-size: 20px;
  line-height: 24px;
  color: #212121;
`;

export const ItemDate = styled.Text`
  width: ${Dimensions.get('window').width * 0.3};

  font-size: 14px;
  line-height: 22px;
  color: #212121;
`;

export const TopBar = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  height: 30px;
  width: ${Dimensions.get('window').width};

  border-bottom: 4px solid black;
`;

export const LatestContent = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: ${Dimensions.get('window').width};
`;
