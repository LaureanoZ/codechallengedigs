import { Tabs } from 'expo-router';
import React from 'react';
import { CalendarIcon } from 'react-native-heroicons/outline';
import { Colors } from '../../constants/Colors';
import { useColorScheme } from '../../hooks/useColorScheme';
import { Text } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const iconColor = '#00B47D';

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title:'Calendar',
          tabBarLabel: ({ color }) => (
            <Text style={{ color: iconColor, fontSize: 12, fontWeight: 'bold' }}>Calendar</Text>
          ),
          tabBarIcon: ({ color, focused }) => (
            <CalendarIcon color={iconColor} />
          ),
        }}
      />
    </Tabs>
  );
}
