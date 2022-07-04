import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useToast } from '../hooks/Toast';

const Home = () => {
  const { addToast } = useToast()

  function handleToastDefault() {
    addToast({
      icon: "alert-circle",
      title: "Padrão!",
      description: "Toast padrão enviado.",
    });
  }

  function handleToastError() {
    addToast({
      type: "error",
      icon: "x-circle",
      title: "Erro!",
      description: "Ocorreu um erro ao exibir o toast, tente novamente.",
    });
  }

  function handleToastSuccess() {
    addToast({
      type: "success",
      icon: "check-circle",
      title: "Sucesso!",
      description: "Toast exibido com sucesso!",
    });
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.buttom, { backgroundColor: "#3172b7" }]}
        onPress={handleToastDefault}>
        <Text style={styles.title}>Exibir toast padrão!</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.buttom, { backgroundColor: "#f53030" }]}
        onPress={handleToastError}>
        <Text style={styles.title}>Exibir toast de erro!</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.buttom, { backgroundColor: "#2e656a" }]}
        onPress={handleToastSuccess}>
        <Text style={styles.title}>Exibir toast de sucesso!</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttom: {
    margin: 20,
    backgroundColor: "#f00",
    width: "80%",
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "#FFF",
    fontSize: 16
  }
});