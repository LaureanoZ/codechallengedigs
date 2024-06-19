import { ActivityIndicator, StyleSheet } from 'react-native';

import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

const LoadingView = () => {
  return (
    <ThemedView style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
      <ThemedText>Loading...</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingView;
