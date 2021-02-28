import React, { useEffect, useState } from 'react';
import {  FlatList, View } from 'react-native';
import axios from 'axios';
import { List, Headline, Button, FAB } from 'react-native-paper';
import globalStyles from '../styles/global';

const Incio = ({ navigation }) => {
  const [clientes, guardarClientes] = useState([]);
  const [consultarAPI, guardarConsultartAPI] = useState(true);

  useEffect(() => {
    const obtenerClientesApi = async () => {
      try {
        let resultado;
        if (Platform.OS === 'ios') {
          resultado = await axios.get('http://localhost:3000/clientes');
        } else {
          resultado = await axios.get('http://10.0.2.2:3000/clientes');
        }
        guardarClientes(resultado.data);
        guardarConsultartAPI(false);
      } catch (error) {
        console.log(error)
      }
    }

    if (consultarAPI) {
      obtenerClientesApi();     

    }    
  }, [consultarAPI]);

  return (
    <View style={globalStyles.contenedor}>
      
      <Button icon="plus-circle" onPress={() => navigation.navigate('NuevoCliente', { guardarConsultartAPI })}>
        Nuevo Cliente
      </Button>

      <Headline style={globalStyles.titulo}>{clientes.length > 0 ? "Clientes" : "No hay clientes"}</Headline>
      <FlatList
        data={clientes}
        keyExtractor={cliente => (cliente.id).toString()}
        renderItem={({ item }) => (
          <List.Item
            title={item.nombre}
            description={item.empresa}
            onPress={() => navigation.navigate("DetallesCliente", {item, guardarConsultartAPI })}
          />
        )}
      />

      <FAB 
        icon="plus"
        style={globalStyles.fab}
        onPress={() => navigation.navigate('NuevoCliente', { guardarConsultartAPI })}
      />
    </View>
  );
}

export default Incio;