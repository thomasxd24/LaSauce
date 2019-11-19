import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Image, FlatList } from 'react-native';
import _ from 'lodash';
import {
  Text,
  Card,
  Tile,
  Icon,
  Avatar,
  ListItem,
} from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';

import { LinearGradient } from '../components/LinearGradient';

import colors from '../config/colors';

const users = [
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
  {
    name: 'thot leader',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/evagiselle/128.jpg',
  },
  {
    name: 'jsa',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg',
  },
  {
    name: 'talhaconcepts',
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/talhaconcepts/128.jpg',
  },
  {
    name: 'andy vitale',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/andyvitale/128.jpg',
  },
  {
    name: 'katy friedson',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
  },
];

const log = () => console.log('this is an example method');

const list1 = [
  {
    title: 'Appointments',
    icon: 'av-timer',
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
  },
  {
    title: 'Passwords',
    icon: 'fingerprint',
  },
  {
    title: 'Pitches',
    icon: 'lightbulb-outline',
  },
  {
    title: 'Updates',
    icon: 'track-changes',
  },
];

const list2 = [
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
    linearGradientColors: ['#FF9800', '#F44336'],
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
    linearGradientColors: ['#3F51B5', '#2196F3'],
  },
  {
    name: 'Amanda Martin',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    subtitle: 'CEO',
    linearGradientColors: ['#FFD600', '#FF9800'],
  },
  {
    name: 'Christy Thomas',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
    subtitle: 'Lead Developer',
    linearGradientColors: ['#4CAF50', '#8BC34A'],
  },
  {
    name: 'Melissa Jones',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/nuraika/128.jpg',
    subtitle: 'CTO',
    linearGradientColors: ['#F44336', '#E91E63'],
  },
];

const list3 = [
  {
    image_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    icon: null,
    title: null,
  },
  {
    image_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    icon: null,
    title: null,
  },
  {
    image_url: null,
    icon: null,
    title: 'LR',
  },
  {
    image_url: null,
    icon: { name: 'user', type: 'font-awesome' },
    title: null,
  },
  {
    image_url: null,
    icon: { name: 'user-female', type: 'simple-line-icon' },
    title: null,
  },
  {
    image_url: null,
    icon: { name: 'baidu', type: 'entypo' },
    title: null,
  },
];

const Icons = () => {
  const renderRow = ({ item }) => {
    return (
      <ListItem
        onPress={log}
        title={item.title}
        leftIcon={{ name: item.icon }}
        chevron
        bottomDivider
      />
    );
  };

  const [switch1, setSwitch1] = useState(true);
  const [checkbox1, setCheckbox1] = useState(true);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <Icon color="white" name="invert-colors" size={62} />
        <Text style={styles.heading}>Tendances</Text>
      </View>
      <View style={{ backgroundColor: '#ECEFF1', paddingVertical: 8 }}>
        {list2.map((l, i) => (
          <ListItem
            component={TouchableScale}
            friction={90}
            tension={100}
            activeScale={0.95}
            leftAvatar={{ rounded: true, source: { uri: l.avatar_url } }}
            key={i}
            linearGradientProps={{
              colors: l.linearGradientColors,
              start: [1, 0],
              end: [0.2, 0],
            }}
            ViewComponent={LinearGradient}
            title={l.name}
            titleStyle={{ color: 'white', fontWeight: 'bold' }}
            subtitleStyle={{ color: 'white' }}
            subtitle={l.subtitle}
            chevronColor="white"
            chevron
            containerStyle={{
              marginHorizontal: 16,
              marginVertical: 8,
              borderRadius: 8,
            }}
          />
        ))}
      </View>

      {/* <View style={styles.list}>
        {list2.map((l, i) => (
          <ListItem
            leftAvatar={{ title: l.name[0], source: { uri: l.avatar_url } }}
            key={i}
            onPress={log}
            title={l.name}
            subtitle={l.subtitle}
            chevron
            bottomDivider
          />
        ))}
      </View>
      <View style={styles.list}>
        {list2.map((l, i) => (
          <ListItem
            key={i}
            leftIcon={{
              name: 'user-circle-o',
              type: 'font-awesome',
              color: 'blue',
            }}
            title={l.name}
            titleStyle={{ color: 'red' }}
            subtitle={l.subtitle}
            rightTitle="11:00am"
            rightTitleStyle={{ color: 'green' }}
            rightSubtitle="12:00am"
            bottomDivider
          />
        ))}
      </View> */}
      <View style={styles.list}>
        <ListItem
          title="Name"
          input={{ placeholder: 'Type your name' }}
          chevron
          bottomDivider
        />
        <ListItem title="Switch that please 😲" switch={{ value: switch1, onValueChange: (value) => setSwitch1(value) }} bottomDivider />
        <ListItem
          title="Choose 🤯"
          buttonGroup={{
            buttons: ['Flower', 'Coco'],
            selectedIndex: selectedButtonIndex,
            onPress: (index) => setSelectedButtonIndex(index)
          }}
          bottomDivider
        />
        <ListItem
          title="Check that please 😢"
          checkBox={{ checked: checkbox1, onPress: () => setCheckbox1(!checkbox1) }}
          bottomDivider
        />
        <ListItem
          title="With a Badge ! 😻"
          badge={{ value: '12' }}
          bottomDivider
        />
        <ListItem title="This thing is checked 😎" checkmark bottomDivider />
      </View>
      <View style={styles.list}>
        <ListItem
          title="Limited supply! Its like digital gold!"
          subtitle={
            <View style={styles.subtitleView}>
              <Image
                source={require('../images/rating.png')}
                style={styles.ratingImage}
              />
              <Text style={styles.ratingText}>5 months ago</Text>
            </View>
          }
          leftAvatar={{ source: require('../../assets/images/avatar1.jpg') }}
        />
      </View>

      <View style={styles.list}>
        <FlatList
          data={list1}
          keyExtractor={a => a.title}
          renderItem={renderRow}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: colors.greyOutline,
    backgroundColor: '#fff',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#FD6B78',
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5,
  },
  ratingImage: {
    height: 19.21,
    width: 100,
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey',
  },
});

export default Icons;