import styled from "styled-components/native";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from '../../styles/theme';
import { Platform } from "react-native";

export const SafeArea = styled.View`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    background-color: ${theme.colors.background};
`;

export const AreaHeader = styled.View`
    width: 100%;
    height: ${Platform.OS === 'android' ? wp('39%') : wp('48%')};
    background-color: ${theme.colors.blue};
    position: absolute;
    top: 0;
    justify-content: center;
    padding-left: ${wp('13%')} ;
    padding-right: ${wp('13%')};
    padding-top: ${Platform.OS === 'android' ? hp('3%') : hp('7%')};
    flex-direction: row;
    
`;

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
`;

export const Photo = styled.Image`
    width: ${wp('15%')};
    height: ${wp('15%')};
    background-color: red;
    border-radius: ${wp('2%')};
`;

export const TitleGretting = styled.Text`
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(17)}px;
    color: ${theme.colors.shape};
`;

export const SubTitle = styled.Text`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    color: ${theme.colors.shape};
`;

export const AreaMore = styled.TouchableOpacity`
    width: ${wp('15%')};
    height: ${wp('15%')};
    border-radius: ${wp('2%')};
    border-width: 1px;
    border-color: rgba(255,255,255,0.5);
    justify-content: center;
    align-items: center;
`;

export const TxtName = styled.Text`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(17)}px;
    color: ${theme.colors.shape};
`;

export const AreaTxt = styled.View`
    margin-left: ${wp('4%')};
`;


export const AreaInput = styled.View`
    width: ${wp('89%')};
    position: absolute;
    top: ${Platform.OS === 'android' ? wp('32%') : wp('41%')};
    flex-direction: row;
`;

export const InputSearchPass = styled.TextInput`
    width: ${wp('74%')};
    height: ${wp('13%')};
    background-color: ${theme.colors.shape};
    border-top-left-radius: ${wp('2%')};
    border-bottom-left-radius: ${wp('2%')};
    border-width: 1px;
    border-top-width: 0px;
    border-left-width: 1px;
    border-bottom-width: 1px;
    border-right-width: 0px;
    border-color: rgba(16,16,16,0.1);
    padding-left: ${wp('5%')};
`;

export const ButtonSearch = styled.TouchableOpacity`
    width: ${wp('15%')};
    height: ${wp('13%')};
    background-color: ${theme.colors.yellow};
    border-top-right-radius: ${wp('2%')};
    border-bottom-right-radius: ${wp('2%')};
    justify-content: center;
    align-items: center;
`;


export const AreaTitles = styled.View`
    width: 100%;
    height: ${hp('5%')};
    margin-top: ${hp('30%')};
    margin-bottom: ${hp('4%')};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: ${wp('7%')};
    padding-right: ${wp('6%')};
`;

export const Title = styled.Text`
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(16)}px;
    color: ${theme.colors.darkGray};
`;

export const TxtCount = styled.Text`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(13.5)}px;
    color: ${theme.colors.lightGray};
`;

export const ListCards = styled.FlatList`
`;

export const ButtonTrash = styled.TouchableOpacity`
    width: ${wp('16%')};
    height: ${hp('12%')};
    justify-content: center;
    align-items: center;
`;

export const TitleNotData = styled.Text`
    font-family: ${theme.fonts.medium};
    font-size: ${RFValue(16)}px;
    color: ${theme.colors.lightGray};
    position: absolute;
    margin-top: ${hp('55%')};
`;