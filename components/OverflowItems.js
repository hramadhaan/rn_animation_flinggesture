import React from 'react';
import {OVERFLOW_HEIGHT, SPACING} from '../data/dummy-data';
import {View, StyleSheet, Text, Animated} from 'react-native';

const OverflowItems = ({data, scrollXAnimated}) => {
  const inputRange = [-1, 0, 1];
  const translateY = scrollXAnimated.interpolate({
    inputRange,
    outputRange: [OVERFLOW_HEIGHT, 0, -OVERFLOW_HEIGHT],
  });
  return (
    <View style={styles.overflowContainer}>
      <Animated.View style={{transform: [{translateY}]}}>
        {data.map((item, index) => {
          return (
            <View key={index} style={styles.itemContainer}>
              <Text style={[styles.title]} numberOfLines={1}>
                {item.original_title}
              </Text>
              <View style={styles.itemContainerRow}>
                <Text style={[styles.location]}>{item.title}</Text>
                <Text style={[styles.date]}>{item.original_language}</Text>
              </View>
            </View>
          );
        })}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  overflowContainer: {
    height: OVERFLOW_HEIGHT,
    overflow: 'hidden',
  },
  itemContainer: {
    height: OVERFLOW_HEIGHT,
    padding: SPACING,
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: -1,
  },
  itemContainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  location: {
    fontSize: 16,
  },
  date: {
    fontSize: 12,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
});

export default OverflowItems;
