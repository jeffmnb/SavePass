import React, { useState } from 'react';

import {
    Container,
    Content,
    AreaIcon,
    TxtEmail,
    TxtTitle,
    TxtPass
} from './styles';


import { Feather } from '@expo/vector-icons';
import theme from '../../styles/theme';

export const CardPass = ({ title, email, password }) => {

    const [showPass, setShowPass] = useState(false);

    return (
        <Container style={{ backgroundColor: showPass ? theme.colors.backgroundBlue : theme.colors.shape }}>

            <AreaIcon onPress={() => setShowPass(oldState => !oldState)}>
                {showPass ? <Feather name="eye" size={24} color={theme.colors.lightBlue} /> : <Feather name="eye-off" size={24} color={theme.colors.lightGray} />}
            </AreaIcon>

            <Content>
                <TxtTitle style={{ color: showPass == true ? theme.colors.lightGray : theme.colors.darkGray }}>{title}</TxtTitle>

                {
                    showPass == false &&

                    <TxtEmail>{email}</TxtEmail>
                }

                {
                    showPass && <TxtPass>{password}</TxtPass>
                }
            </Content>

        </Container >
    );
}