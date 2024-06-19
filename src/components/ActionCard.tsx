import React from 'react';
import { View, StyleSheet, Image, useWindowDimensions } from 'react-native';

import { getDayOfWeek, getDayOfMonth } from '../helpers/dateHelpers';
import { Action } from '../app/models/ChallengeData';

import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';

interface ActionCardProps {
  action: Action;
}

const ActionCard: React.FC<ActionCardProps> = ({ action }) => {
  const { width } = useWindowDimensions();

  const iconSource = action.status === "Scheduled"
    ? require('../assets/images/schedule-icon.png')
    : require('../assets/images/check-icon.png');

  const backgroundColor = action.status === "Scheduled"
    ? '#006A4B'
    : action.status === "Unscheduled"
      ? '#011638'
      : '#00B47D';

  return (
    <ThemedView style={{ flexDirection: 'row', marginVertical: 3 }}>
      {action.status === "Unscheduled" ? (
        <View style={{ width: width * 0.1, marginRight: 15 }}>
          <ThemedText type='default' style={{ textAlign: 'center', fontSize: 12, lineHeight: 16 }}>
            TBD
          </ThemedText>
        </View>
      ) : (
        <View style={{ width: width * 0.1, marginRight: 15 }}>
          <ThemedText type='default' style={{ textAlign: 'center', fontSize: 12, lineHeight: 12 }}>
            {getDayOfWeek(action.scheduledDate || '')}
          </ThemedText>
          <ThemedText type='title' style={{ textAlign: 'center', fontSize: 16, marginBottom: 4, lineHeight: 28 }}>
            {getDayOfMonth(action.scheduledDate || '')}
          </ThemedText>
          <Image source={iconSource} style={styles.icon} />
        </View>
      )}
      <View style={{ backgroundColor: backgroundColor, width: width * 0.79, borderRadius: 4, padding: 10 }}>
        <ThemedText type='defaultSemiBold' style={{ color: 'white' }}>{action.name}</ThemedText>
        {action.vendor?.vendorName && (
          <ThemedText type='default' style={{ fontSize: 12, lineHeight: 16, color: 'white' }}>
            {action.vendor?.vendorName}
          </ThemedText>
        )}
        {action.vendor?.phoneNumber && (
          <ThemedText type='default' style={{ fontSize: 12, lineHeight: 16, color: 'white' }}>
            {action.vendor?.phoneNumber}
          </ThemedText>
        )}
        {action.vendor?.streetAddress && (
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
            <Image source={require('../assets/images/Vector.png')} style={styles.vectorIcon} />
            <ThemedText type='default' style={{ fontSize: 12, lineHeight: 16, color: 'white' }}>
              {action.vendor?.streetAddress}
            </ThemedText>
          </View>
        )}
        <ThemedText
          type='default'
          style={{
            fontSize: 12,
            lineHeight: 16,
            color: 'white',
            marginTop: action.vendor?.streetAddress ? 0 : 15,
          }}
        >
          {action.status}
        </ThemedText>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 16,
    height: 16,
    alignSelf: 'center',
  },
  vectorIcon: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
    marginBottom: 3,
    marginEnd: 4,
  },
});

export default ActionCard;
