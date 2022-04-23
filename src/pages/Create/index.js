import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Platform } from 'react-native';

import {
  Container,
  Header,
  Title,
  Content,
  InputName,
  TxtInput,
  Input,
  ButtonSave,
  TxtButton
} from './styles';

import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import theme from '../../styles/theme';
import { savePass } from '../../Storage';
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/core';

export const Create = () => {

  const [showPass, setShowPass] = useState(true);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);


  const Navigation = useNavigation();

  const handleSaveNewPass = async () => {

    const newData = {
      id: String(uuid.v4()),
      name,
      email,
      password
    };

    if (name == '' || name == ' ') {
      return setNameError(true);
    } else if (email == '' || email == ' ') {
      return setEmailError(true);
    } else if (password == '' || password == ' ') {
      return setPasswordError(true);
    }

    await savePass(newData);

    Navigation.navigate('Dash');

  };


  return (
    <Container>

      <Header>
        <Ionicons onPress={() => Navigation.goBack()} style={{ position: 'absolute', left: 0, paddingLeft: widthPercentageToDP('5%'), bottom: heightPercentageToDP('2.2%') }} name="chevron-back-sharp" size={30} color={theme.colors.blue} />
        <Title>Cadastro de senha</Title>
      </Header>

      <Content>

        <TxtInput>Nome do serviço</TxtInput>

        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
          <Input style={{ borderColor: nameError ? 'red' : 'rgba(16, 16, 16, 0.1)' }} onChangeText={text => setName(text)} />
          {nameError ? <MaterialIcons onPress={() => setShowPass(oldState => !oldState)} style={{ position: 'absolute', right: widthPercentageToDP('5%'), bottom: heightPercentageToDP('1.4%') }} name="error" size={24} color='red' /> : <Feather onPress={() => setShowPass(oldState => !oldState)} style={{ position: 'absolute', right: widthPercentageToDP('5%'), bottom: heightPercentageToDP('1.4%') }} name="eye" size={24} color='rgba(16,16,16,0.2)' />}
        </View>


        <TxtInput>E-mail ou usuário</TxtInput>

        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
          <Input style={{ borderColor: emailError ? 'red' : 'rgba(16, 16, 16, 0.1)' }} onChangeText={text => setEmail(text)} />
          {emailError ? <MaterialIcons onPress={() => setShowPass(oldState => !oldState)} style={{ position: 'absolute', right: widthPercentageToDP('5%'), bottom: heightPercentageToDP('1.4%') }} name="error" size={24} color='red' /> : <Feather onPress={() => setShowPass(oldState => !oldState)} style={{ position: 'absolute', right: widthPercentageToDP('5%'), bottom: heightPercentageToDP('1.4%') }} name="eye" size={24} color='rgba(16,16,16,0.2)' />}
        </View>


        <TxtInput>Senha</TxtInput>

        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
          <Input style={{ borderColor: passwordError ? 'red' : 'rgba(16, 16, 16, 0.1)' }} secureTextEntry={showPass ? true : false} onChangeText={text => setPassword(text)} />
          {showPass ? <Feather onPress={() => setShowPass(oldState => !oldState)} style={{ position: 'absolute', right: widthPercentageToDP('5%'), bottom: heightPercentageToDP('1.4%') }} name="eye-off" size={24} color='rgba(16,16,16,0.2)' /> : <Feather onPress={() => setShowPass(oldState => !oldState)} style={{ position: 'absolute', right: widthPercentageToDP('5%'), bottom: heightPercentageToDP('1.4%') }} name="eye" size={24} color='rgba(16,16,16,0.2)' />}
        </View>


        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: heightPercentageToDP('5%') }}>
          <ButtonSave onPress={() => handleSaveNewPass()}>
            <TxtButton>Salvar</TxtButton>
          </ButtonSave>
        </View>

      </Content>

    </Container>
  );
}