import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from './styles';
import {general} from '../../styles/';
import api from '../../services/api';
import Item from './item';
export default function index() {
  const [climate, setClimate] = useState({});
  useEffect(() => {
    init();
    setInterval(() => {
      init();
    }, 10000);
  }, []);

  const init = async () => {
    try {
      const climateReceived = await api.get('455827');
      setClimate(climateReceived.data.results);
    } catch (error) {
      // alert(error);
    }
  };

  return (
    <View
      style={{
        backgroundColor: '#015379',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
      }}>
      {climate.forecast && <Item data={climate} forecast={climate.forecast} />}
    </View>
  );
}

const styles = StyleSheet.create({
  ...general,
});
