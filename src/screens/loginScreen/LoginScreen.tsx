import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  SafeAreaView,
  Keyboard,
  Platform,
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button, TextInput } from '../../components';
import styles from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useDispatch } from 'react-redux';
import { userActions } from '../../redux/actions';
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';
import { showMessage } from 'react-native-flash-message';
import { userService } from '../../services';

export interface LoginScreenProps {
  navigation: any;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const INSTAGRAM_ICON = require('../../../assets/instagram-icon.png');
  const dispatch = useDispatch();

  const handleOnFinishLoginForm = async (formValues: {
    email: string;
    password: string;
  }) => {
    try {
      const { data } = await userService.login(formValues);
      if (data.token) {
        showMessage({
          message: 'Başarılı şekilde giriş yaptınız',
          type: 'success',
        });
        dispatch(
          userActions.setInformation({
            email: formValues.email,
            password: formValues.password,
          })
        );
        dispatch(userActions.setToken({ token: data.token }));

        //login infos as you want in case study, securely(encrypted) saved on the phone
        await SecureStore.setItemAsync('email', formValues.email);
        await SecureStore.setItemAsync('password', formValues.password);
      }
    } catch (error: any) {
      if (error.response?.status === 400) {
        showMessage({
          message: 'Email adresi veya şifre yanlış',
          type: 'danger',
        });
      } else {
        showMessage({
          message: 'Bilinmeyen Hata',
          type: 'danger',
        });
      }
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <Image source={INSTAGRAM_ICON} style={styles.logo} />
          <Text style={styles.logoTitle}>Instagram</Text>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={handleOnFinishLoginForm}
            validationSchema={Yup.object({
              email: Yup.string()
                .required('Email adresinizi giriniz')
                .email('Geçersiz email adresi'),
              password: Yup.string().required('Şifrenizi giriniz'),
            })}
          >
            {({
              handleChange,
              handleBlur,
              values,
              handleSubmit,
              errors,
              touched,
            }) => (
              <>
                <TextInput
                  textInputStyle={{ width: wp(90), marginTop: hp(3) }}
                  label='Email'
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#FF4D4E',
                      alignSelf: 'flex-start',
                      marginTop: hp(1),
                    }}
                  >
                    {errors.email}
                  </Text>
                )}
                <TextInput
                  textInputStyle={{ width: wp(90), marginTop: hp(3) }}
                  label='Password'
                  isPassword
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
                {errors.password && touched.password && (
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#FF4D4E',
                      alignSelf: 'flex-start',
                      marginTop: hp(1),
                    }}
                  >
                    {errors.password}
                  </Text>
                )}
                <Button
                  onPress={handleSubmit}
                  buttonStyle={{ marginTop: hp(3), width: wp(90) }}
                  title='Login'
                />
              </>
            )}
          </Formik>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
