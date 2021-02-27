import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Headline, Button } from 'react-native-paper';
import globalStyles from '../styles/global';

const NuevoCliente = () => {
  const leerNombre = () => {
    console.warn('Escribiendo')
  }

  return (
    <View style={globalStyles.contenedor}>
      <Headline  style={globalStyles.titulo}>Añadir Nuevo Cliente</Headline>

      <TextInput
        style={styles.input}
        label="Nombre"
        placeholder="Peter"
        onChangeText={() => leerNombre()}
      />
       <TextInput
        style={styles.input}
        label="Telefono"
        placeholder="313546789"
        onChangeText={() => leerNombre()}
      />
       <TextInput
        style={styles.input}
        label="Correo"
        placeholder="correo@correo.com"
        onChangeText={() => leerNombre()}
      />
       <TextInput
        style={styles.input}
        label="Empresa"
        placeholder="Nombre Empresa"
        onChangeText={() => leerNombre()}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    backgroundColor: 'transparent',
  }
});

export default NuevoCliente;