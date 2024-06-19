import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { ChallengeData } from '../models/ChallengeData';
import { fetchCalendarData } from '../../api/fetchCalendarData';
import { getMonthName } from '@/src/helpers/getMonthName';

import { ThemedView } from '../../components/ThemedView';
import { TitleDate } from '../../components/TitleDate';
import LoadingView from '../../components/LoadingView';
import ActionCard from '@/src/components/ActionCard';
import NoMaintenanceCard from '@/src/components/NoMaintenanceCard';

export default function Calendar() {
  const [calendarData, setCalendarData] = useState<ChallengeData | null>(null);

  useEffect(() => {
    const getCalendarData = async () => {
      try {
        const data = await fetchCalendarData();
        setCalendarData(data);
      } catch (error) {
        console.error('Error fetching calendar data:', error);
      }
    };

    getCalendarData();
  }, []);

  if (!calendarData) {
    return <LoadingView />;
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ThemedView style={{ paddingHorizontal: 15, flex: 1 }}>

        {calendarData.calendar.map((monthData) => (
          <ThemedView key={monthData.month} style={styles.monthContainer}>
            <TitleDate title={`${getMonthName(monthData.month)} ${monthData.year}`} />
            {monthData.actions.length > 0 ? (
              monthData.actions.map((action) => (
                <ActionCard key={action.id} action={action} />
              ))
            ) : (
              <NoMaintenanceCard />
            )}
          </ThemedView>
        ))}
        
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  monthContainer: {
    flex: 1,
    marginVertical: 5,
  },

});
