import React, { useEffect, useState } from 'react';
import { Text, FlatList, View } from 'react-native';
import axios from 'axios';
import { List, Headline } from 'react-native-paper';
import globalStyles from '../styles/global';

const Incio = () => {
  const [clientes, guardarClientes] = useState([]);
  

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
      } catch (error) {
        console.log(error)
      }
    }
    obtenerClientesApi();
  }, []);

  return (
    <View style={globalStyles.contenedor}>
      <Headline style={globalStyles.titulo}>{clientes.length > 0 ? "Clientes" : "No hay clientes"}</Headline>
      <FlatList
        data={clientes}
        keyExtractor={cliente => (cliente.id).toString()}
        renderItem={({ item }) => (
          <List.Item
            title={item.nombre}
            description={item.empresa}
          />
        )}
      />
    </View>
  );
}

export default Incio;