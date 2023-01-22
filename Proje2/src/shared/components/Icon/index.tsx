import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default function Icon({...props}) {
  let {name, size, color, type, style} = props;

  if (name.includes(':')) {
    let arr = name.split(':');
    name = arr[0].trim();
    type = arr[1].trim();
  }

  switch (type) {
    case 'ant':
      return <AntDesign name={name} size={size} color={color} style={style} />;
    case 'entypo':
      return <Entypo name={name} size={size} color={color} style={style} />;
    case 'evil':
      return <EvilIcons name={name} size={size} color={color} style={style} />;
    case 'feather':
      return <Feather name={name} size={size} color={color} style={style} />;
    case 'font':
      return (
        <FontAwesome name={name} size={size} color={color} style={style} />
      );
    case 'font5':
      return (
        <FontAwesome5 name={name} size={size} color={color} style={style} />
      );
    case 'font5pro':
      return (
        <FontAwesome5Pro name={name} size={size} color={color} style={style} />
      );
    case 'fontisto':
      return <Fontisto name={name} size={size} color={color} style={style} />;
    case 'foundation':
      return <Foundation name={name} size={size} color={color} style={style} />;
    case 'ion':
      return <Ionicons name={name} size={size} color={color} style={style} />;
    case 'materialcomm':
      return (
        <MaterialCommunityIcons
          name={name}
          size={size}
          color={color}
          style={style}
        />
      );
    case 'material':
      return (
        <MaterialIcons name={name} size={size} color={color} style={style} />
      );
    case 'octo':
      return <Octicons name={name} size={size} color={color} style={style} />;
    case 'simple':
      return (
        <SimpleLineIcons name={name} size={size} color={color} style={style} />
      );
    default:
      return (
        <MaterialCommunityIcons
          name={name}
          size={size}
          color={color}
          style={style}
        />
      );
  }
}
