import { Image, StyleSheet, Platform, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Routes from '@/routes/'

export default function HomeScreen() {
  return (
    <View>
      <Routes></Routes>
    </View>
  );
}

