import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from './styles';
import {general} from '../../styles/';
import api from '../../services/api';
import Item from './item';
import SearchableDropdown from 'react-native-searchable-dropdown';

const cities = [
  {id: '455827', name: 'São Paulo'},
];

export default function index() {
  const [climate, setClimate, city, setCity] = useState({});
  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    try{
      const climateReceived = await api.get('455827');
      setClimate(climateReceived.data.results);
      setCity({id: '455827', name: 'São Paulo'});
    }
    catch (error){
      alert(error);
    }
  };

  return(
    <View style={styles.container}>
      <SearchableDropdown 
        multi={false}
        selectedItems={city}
        onItemSelect={(item) => {
          setCity(item);
        }}
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
