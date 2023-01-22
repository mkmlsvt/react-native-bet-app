import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

//Components
import Icon from '../Icon';

//Styles
import styles from './style';
import colors from '../../constansts/colors';

function TabBar({
  state,
  descriptors,
  navigation,
}: {
  state: any;
  descriptors: any;
  navigation: any;
}) {
  return (
    <View style={styles.container} key={state.index}>
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const {iconName} = route.params;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={
              route.name == 'LiveMatchs'
                ? styles.midTabStyle
                : styles.tabStyle
            }
            key={index}>
            <Icon
              name={iconName}
              size={route.name == 'LiveMatchs' ? 35 : 27}
              color={
                route.name == 'LiveMatchs'
                  ? 'white'
                  : isFocused
                  ? colors.primary
                  : colors.secondary
              }
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
export default TabBar;