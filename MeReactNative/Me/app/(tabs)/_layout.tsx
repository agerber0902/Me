import React from 'react';

import { useColorScheme } from '@/hooks/use-color-scheme';
import HomeScreen from './index';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <HomeScreen/>
  );
}
