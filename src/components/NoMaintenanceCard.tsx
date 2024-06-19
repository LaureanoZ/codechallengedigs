import React from 'react';
import { View, useWindowDimensions } from 'react-native';

import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';



const NoMaintenanceCard = () => {

  const { width } = useWindowDimensions();

  return (
    <ThemedView style={{ flexDirection: 'row', marginVertical: 10 }}>
      <View style={{ width: width * 0.1, marginRight: 15 }}>
      </View>
      <View style={{ backgroundColor: '#848FA5', width: width * 0.79, borderRadius: 4, padding: 10 }}>
        <ThemedText type='defaultSemiBold' style={{ color: 'white' }}>No Maintenance Scheduled</ThemedText>
      </View>
    </ThemedView>
  );
}

export default NoMaintenanceCard;
