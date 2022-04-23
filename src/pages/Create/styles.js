import styled from "styled-components/native";

import theme from '../../styles/theme';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    background-color: ${theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    background-color: ${theme.colors.shape};
    height: ${hp('12%')};
    padding-top: ${hp('4%')};
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.darkGray};
`;

export const Content = styled.View`
    width: ${wp('85%')};
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: ${hp('2%')};
`;

export const TxtInput = styled.Text`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(13)}px;
    color: ${theme.colors.lightGray};
    margin-top: ${hp('3.5%')};
`;

export const Input = styled.TextInput`
     width: 100%;
    height: ${wp('13%')};
    background-color: ${theme.colors.shape};
    border-radius: ${wp('2%')};
    border-width: 1px;
    border-color: rgba(16,16,16,0.1);
    padding-left: ${wp('5%')};
    margin-top: ${hp('1,5%')};
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.darkGray};
`;

export const ButtonSave = styled.TouchableOpacity`
    width: ${wp('50%')};
    height: ${hp('7%')};
    background-color: ${theme.colors.yellow};
    justify-content: center;
    align-items: center;
    border-radius: ${wp('2')};
`;

export const TxtButton = styled.Text`
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.darkGray};
    font-size: ${RFValue(14)}px;
`;