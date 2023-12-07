import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, TextInput } from 'react-native';

const PantallaCarrito = () => {
  const [productosCarrito, setProductosCarrito] = useState([
    { id: '1', titulo: 'Juego 1', precio: 29.99, imagen: require('./assets/game1.jpeg') },
    { id: '2', titulo: 'Juego 2', precio: 39.99, imagen: require('./assets/game2.jpeg') },
    // Agrega más elementos según sea necesario
  ]);

  const [productosEliminados, setProductosEliminados] = useState([]);
  const [codigoDescuento, setCodigoDescuento] = useState('');
  const [precioTotal, setPrecioTotal] = useState(calcularPrecioTotal());

  function calcularPrecioTotal() {
   
  }

  const manejarEliminarProducto = (idProducto) => {
   
  };

  const manejarDeshacerEliminacion = () => {
    
  };

  const manejarAplicarDescuento = () => {
    
  };

  const renderProductoCarrito = ({ item }) => (
    <View style={styles.itemCarritoContainer}>
      <Image source={item.imagen} style={styles.imagenProducto} />
      <View style={styles.detallesProducto}>
        <Text style={styles.tituloProducto}>{item.titulo}</Text>
        <Text style={styles.precioProducto}>${item.precio.toFixed(2)}</Text>
      </View>
      <TouchableOpacity onPress={() => manejarEliminarProducto(item.id)} style={styles.botonEliminar}>
        <Text style={styles.textoBotonEliminar}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Carrito de Compras</Text>
      <FlatList
        data={productosCarrito}
        keyExtractor={(item) => item.id}
        renderItem={renderProductoCarrito}
      />
      <View style={styles.contenedorTotal}>
        <Text style={styles.textoTotal}>Total:</Text>
        <Text style={styles.precioTotal}>${precioTotal}</Text>
      </View>
      <TextInput
        style={styles.entradaDescuento}
        placeholder="Código de Descuento"
        value={codigoDescuento}
        onChangeText={(texto) => setCodigoDescuento(texto)}
      />
      <TouchableOpacity onPress={manejarAplicarDescuento} style={styles.botonAplicarDescuento}>
        <Text style={styles.textoBotonAplicarDescuento}>Aplicar Descuento</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.botonRealizarPago}>
        <Text style={styles.textoBotonRealizarPago}>Realizar Pago</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={manejarDeshacerEliminacion} style={styles.botonDeshacer}>
        <Text style={styles.textoBotonDeshacer}>Deshacer Eliminación</Text>
      </TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemCarritoContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 8,
  },
  imagenProducto: {
    width: 80,
    height: 80,
    marginRight: 16,
  },
  detallesProducto: {
    flex: 1,
  },
  tituloProducto: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  precioProducto: {
    fontSize: 16,
    color: '#888',
  },
  botonEliminar: {
    backgroundColor: '#dc3545',
    padding: 8,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBotonEliminar: {
    color: '#fff',
  },
  contenedorTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  textoTotal: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  precioTotal: {
    fontSize: 20,
    color: '#28a745',
    fontWeight: 'bold',
  },
  entradaDescuento: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 16,
    paddingLeft: 8,
  },
  botonAplicarDescuento: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  textoBotonAplicarDescuento: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  botonDeshacer: {
    backgroundColor: '#ff8c00',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  textoBotonDeshacer: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  botonRealizarPago: {
    backgroundColor: '#007bff',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  textoBotonRealizarPago: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PantallaCarrito;