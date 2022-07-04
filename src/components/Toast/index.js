import React, { useCallback, useEffect, useState } from 'react';
import { Animated } from 'react-native';

import {
  Container,
  Icon,
  Info,
  Title,
  Description,
  ButtonAction,
  ButtonActionText
} from './styles';

const Toast = ({ message }) => {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 0 }));
  const [opacity] = useState(new Animated.Value(0));
  
  const RemoveToast = useCallback(() => {
    Animated.timing(opacity, {
      useNativeDriver: true,
      toValue: 0,
      duration: 0,
    }).start()
  },[]);

  const {
    type = "info",
    icon = "alert-circle",
    title = "Olá,",
    description = "Bem-vindo",
    actionText = "Fechar",
    actionPress = RemoveToast,
  } = message;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.spring(offset.y, {
          useNativeDriver: true,
          toValue: 0,
          speed: 4,
          bounciness: 20
        }),
        Animated.timing(opacity, {
          useNativeDriver: true,
          toValue: 1,
          duration: 500,
        }),
      ]),
      Animated.spring(offset.y, {
        useNativeDriver: true,
        toValue: 150,
        speed: 4,
        bounciness: 20
      }),
    ]).start()
  }, [message]);


  return (
    <Animated.View style={[{
      opacity: opacity,
      transform: [{
        translateY: offset.y
      }]
    }]}>
      <Container type={type}>
        <Icon name={icon} size={24} type={type} />
        <Info>
          <Title type={type}>{title}</Title>
          <Description type={type}>{description}</Description>
        </Info>
        <ButtonAction onPress={actionPress} type={type}>
          <ButtonActionText>{actionText}</ButtonActionText>
        </ButtonAction>
      </Container>
    </Animated.View>
  )
}

export default Toast;