import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';
import {Container, ImageView, Text, Card, CardBody, Clima} from './styles';
import SunCloud from '../../assets/img/cloud.png';
import Carousel from 'react-native-snap-carousel';

const item = ({data, forecast}) => {
  const [items, setItems] = useState({});

  useEffect(() => {
    setItems(data);
  }, []);

  const _renderItems = (item, i) => {
    return (
      <Card key={i}>
        <ImageView>
          <Image source={SunCloud} style={{width: 100, height: 100}} />
        </ImageView>
        <Text>{'Máxima ' + item.item.max + '°'}</Text>
        <Text>{'Minima ' + item.item.min + '°'}</Text>
        <Text>{item.item.date + '/2019'}</Text>
        <Text>{item.item.description}</Text>
      </Card>
    );
  };
  return (
    <Container>
      <Clima>Clima Tempo</Clima>
      <Card>
        <Text size={25}>{data.temp + '°'}</Text>
        <Text>{data.city}</Text>
        <Text>{data.description}</Text>
      </Card>
      <Carousel
        layout={'default'}
        ref={c => {
          this._carousel = c;
        }}
        data={forecast}
        containerCustomStyle={{
          flex: 1,
          width: '100%',
          maxHeight: 250,
        }}
        renderItem={_renderItems}
        sliderWidth={300}
        itemWidth={300}
      />
    </Container>
  );
};

export default item;
