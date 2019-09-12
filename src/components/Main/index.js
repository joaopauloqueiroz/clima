import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from './styles';
import {general} from '../../styles/';
import api from '../../services/api';
import Item from './item';
import SearchableDropdown from 'react-native-searchable-dropdown';

const cities = [
  {id: '0', name: 'Selecione uma cidade'},
  {id: '455827', name: 'São Paulo'},
  {id: '447216', name: 'Rio Branco'},
  {id: '90200707', name: 'Rio de Janeiro'},
  {id: '455833', name: 'Manaus'},
  {id: '455936', name: 'Boa Vista'},
  {id: '455820', name: 'Belém'},
  {id: '455820', name: 'Belém'},
  {id: '455970', name: 'Macapá'},
  {id: '455901', name: 'Porto Velho'},
  {id: '457721', name: 'Palmas'},
  {id: '455880', name: 'Maceió'},
];

export default function index() {
  const [climate, setClimate] = useState({});
  const [city, setCity] = useState({});
  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    try{
      setCity({id: '455827', name: 'São Paulo'});
      const climateReceived = await api.get('455827');
      setClimate(climateReceived.data.results);
    }
    catch (error){
      alert(error);
    }
  };

  const findCity = async (item) => {
    try{
      const climateReceived = await api.get(item.id);
      setClimate(climateReceived.data.results);
    }
    catch (error){
      alert(error);
    }
  }

  return(
    <View style={styles.container}>
        <SearchableDropdown 
          selectedItems={[city]}
          onItemSelect={(item) => {
            if (item.id!=='0'){
              setCity(item);
              findCity(item);
            }
          }}
          defaultIndex={1}
          itemStyle={{
            width: '96%',
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '2%',
            backgroundColor: '#ddd',
            borderColor: '#bbb',
            borderWidth: 1,
            borderRadius: 5,
          }}
          textInputStyle={{
            //inserted text style
            width: '96%',
            justifyContent: 'center',
            padding: 5,
            margin: '2%',
            borderWidth: 1,
            borderColor: '#ccc',
            backgroundColor: '#FAF7F6',
          }}
          itemTextStyle={{ color: '#222', width: '100%', }}
          itemsContainerStyle={{ maxHeight: 180, width: '100%', }}
          items={cities}
        />
      { climate.forecast &&
        <Item data={climate} forecast={climate.forecast} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  ...general,
});
