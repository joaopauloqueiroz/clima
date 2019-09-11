import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';
import {Container, ImageView, Text} from './styles';
import SunCloud from '../../assets/img/cloud.png';

const item = ({data}) => {
  const [items, setItems] = useState({});

  useEffect(() => {
    setItems(data);
  });

  return (
    <Container>
      <ImageView>
        <Image source={SunCloud} style={{width: 100, height: 100}} />
      </ImageView>
      <Text size={25}>{data.temp}</Text>
      <Text>{data.city_name}</Text>
      <Text>{data.description}</Text>
      <Text>{JSON.stringify(items.forecast)}</Text>
      <Text>
        {items.forecast.Object.entries(el => (
          <Text>aaaaa</Text>
        ))}
      </Text>
    </Container>
  );
};

export default item;
