import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Headline, Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import globalStyles from '../styles/global';

const NuevoCliente = () => {
  const [nombre, guardarNombre] = useState('');
  const [telefono, guardarTelefono] = useState('');
  const [correo, guardarCoreo] = useState('');
  const [empresa, guardarEmpresa] = useState('');
  const [alerta, guardarAlerta] = useState(false);

  const guardarCliente = () => {
    // validar
    if (nombre || '' || telefono === '' || correo === '' || empresa === '') {
      guardarAlerta(true);
      return;
    }
    // generar clinete
    const cliente = { nombre, telefono, correo, empresa };
    // guardar cliente en api

    // redireccionar


    // limpiar form
  }

  return (
    <View style={globalStyles.contenedor}>
      <Headline  style={globalStyles.titulo}>Añadir Nuevo Cliente</Headline>

      <TextInput
        style={styles.input}
        label="Nombre"
        placeholder="Peter"
        onChangeText={(texto) => guardarNombre(texto)}
        value={nombre}
      />
       <TextInput
        style={styles.input}
        label="Telefono"
        placeholder="313546789"
        onChangeText={(texto) => guardarTelefono(texto)}
        value={telefono}
      />
       <TextInput
        style={styles.input}
        label="Correo"
        placeholder="correo@correo.com"
        onChangeText={(texto) => guardarCorreo(texto)}
        value={correo}
      />
       <TextInput
        style={styles.input}
        label="Empresa"
        placeholder="Nombre Empresa"
        onChangeText={(texto) => guardarEmpresa(texto)}
        value={empresa}
      />

      <Button icon="pencil-circle" mode="contained" onPress={() => guardarCliente()}>
        Guardar Cliente
      </Button>

      <Portal>
        <Dialog
          visible={alerta}
          onDismiss={() => guardarAlerta(false)}
        >
          <Dialog.Title>Error</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Todos los campos son obligatorios</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => guardarAlerta(false)}>OK</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      
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