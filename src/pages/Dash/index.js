import React, { useCallback, useEffect, useState } from 'react';
import { Alert, StatusBar, View } from 'react-native';
import theme from '../../styles/theme';

import {
    SafeArea,
    AreaHeader,
    Header,
    Photo,
    TitleGretting,
    SubTitle,
    AreaMore,
    TxtName,
    AreaTxt,
    InputSearchPass,
    AreaInput,
    ButtonSearch,
    AreaTitles,
    Title,
    TxtCount,
    ListCards,
    ButtonTrash,
    TitleNotData
} from './styles';


import { MaterialIcons, Ionicons, Feather } from '@expo/vector-icons';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { CardPass } from '../../components/CardPass';

import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { deletePass, getAllPass } from '../../Storage';

import Swipeable from 'react-native-gesture-handler/Swipeable';
import { RFValue } from 'react-native-responsive-fontsize';


export const Dash = () => {

    const Navigation = useNavigation();

    const [data, setData] = useState([]);

    useFocusEffect(useCallback(() => {
        getAll();
    }, [handleDeletePass]));

    const getAll = async () => {
        const result = await getAllPass();

        setData(result);
    };

    const handleSearchPass = async (text) => {

        let passStoraged = await getAllPass();

        const result = passStoraged.filter(item => item.name.match(text));

        setData(result);

    };

    const handleDeletePass = (item) => {
        Alert.alert('Aviso', 'Deseja remover esta senha?', [
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: async () => {
                    try {
                        await deletePass(item);
                        getAll();
                        Alert.alert('Item removido com sucesso!');
                    } catch (error) {
                        throw new Error();
                    }
                }
            }
        ])
    };

    return (
        <SafeArea>
            <StatusBar barStyle='light-content' backgroundColor={theme.colors.blue} />
            <AreaHeader>
                <Header>
                    <Photo source={{ uri: 'https://github.com/jeffmnb.png' }} />
                    <AreaTxt>
                        <TxtName>Olá, <TitleGretting>Jeferson</TitleGretting></TxtName>
                        <SubTitle>Sinta-se seguro :)</SubTitle>
                    </AreaTxt>
                </Header>

                <AreaMore onPress={() => Navigation.navigate('Create')}>
                    <MaterialIcons name="add" size={widthPercentageToDP('7%')} color={theme.colors.shape} />
                </AreaMore>

            </AreaHeader>

            <AreaInput>
                <InputSearchPass onChangeText={(text) => handleSearchPass(text)} />
                <ButtonSearch>
                    <Ionicons name="ios-search" size={widthPercentageToDP('6.5%')} color={theme.colors.darkGray} />
                </ButtonSearch>
            </AreaInput>


            <AreaTitles>
                <Title>Suas senhas</Title>
                <TxtCount>{data.length} ao total</TxtCount>
            </AreaTitles>

            <ListCards
                keyExtractor={item => String(item.id)}
                data={data}
                renderItem={({ item }) => (

                    <Swipeable overshootRight={false} renderRightActions={() => (
                        <ButtonTrash onPress={() => handleDeletePass(item)}>
                            <Feather name="trash-2" size={RFValue(25)} color={theme.colors.lightGray} />
                        </ButtonTrash>
                    )}>

                        <CardPass title={item.name} email={item.email} password={item.password} />

                    </Swipeable>

                )}
                showsVerticalScrollIndicator={false}
            />


            {
                data.length == 0 &&

                <TitleNotData>Sua lista de contas está vazia :(</TitleNotData>}

        </SafeArea>
    );
}