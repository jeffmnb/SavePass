import React, { useCallback, useEffect, useState } from 'react';

import {
    Text,
    View
} from 'react-native';
import theme from '../../styles/theme';

import { RFValue } from 'react-native-responsive-fontsize';

import LottieView from 'lottie-react-native';
import lottieAuth from '../../assets/lottieAuth.json';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import * as LocalAuthentication from 'expo-local-authentication';

import { useNavigation, useFocusEffect } from '@react-navigation/native';

export const Auth = () => {

    useEffect(() => {
        authenticate();
    }, []);

    useFocusEffect(useCallback(() => {
        authenticate();
    }, []));

    const Navigation = useNavigation();

    const authenticate = async () => {

        const hasPassword = await LocalAuthentication.isEnrolledAsync();

        if (!hasPassword) return;

        const { success } = await LocalAuthentication.authenticateAsync();

        if (success) {
            Navigation.navigate('Dash');
        } else {
            Alert.alert("Ops, tente novamente :(");
            setStatus(false);
        }

    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.background }}>

            <Text style={{ fontFamily: theme.fonts.bold, fontSize: RFValue(15), color: theme.colors.darkGray, textAlign: 'center' }}>Favor se autenticar para acessar o SavePass.</Text>

            <LottieView source={lottieAuth} autoPlay loop style={{ width: wp('20%'), height: hp('20%'), marginTop: hp('4%') }} />

            <Text onPress={() => authenticate()} style={{ marginTop: hp('25%'), fontFamily: theme.fonts.bold, fontSize: RFValue(15), color: theme.colors.blue }}>Autenticar</Text>

        </View >
    );
}