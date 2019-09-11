import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from './styles';
import {general} from '../../styles/';
import api from '../../services/api';

export default function index(){
  const [climate, setClimate] = useState({})
  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    try{
      const climateReceived = await api.get('455827');  
      setClimate(climateReceived.data);
    }
    catch (error){
      alert(error)
    }
  }

  return(
    <View style={styles.container}>
      <Text>{JSON.stringify(climate)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  ...general,
});
