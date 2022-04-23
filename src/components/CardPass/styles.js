import styled from "styled-components/native";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

import theme from '../../styles/theme';
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    width: ${wp('90%')};
    height: ${hp('12%')};
    background-color: ${theme.colors.shape};
    border-width: 1px;
    border-color: rgba(16,16,16,0.1);
    border-radius: ${wp('2%')};
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    margin-bottom: ${hp('2%')};
`;

export const AreaIcon = styled.TouchableOpacity`
    margin-left: ${wp('5%')};
    margin-right: ${wp('7%')};
`;

export const Content = styled.View`

`;

export const TxtTitle = styled.Text`
    font-family: ${theme.fonts.medium};
    font-size: ${RFValue(16)}px;
    margin-bottom: ${hp('1.5%')};
`;

export const TxtEmail = styled.Text`
    font-family: ${theme.fonts.medium};
    font-size: ${RFValue(12.5)}px;
    color: ${theme.colors.lightGray};
`;

export const TxtPass = styled.Text`
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.blueText};
`;