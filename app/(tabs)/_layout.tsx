import { useClientTheme } from '@/hooks/useClientTheme';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  const theme = useClientTheme()
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { ...theme.tabBarStyle },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
        }}
      />
    </Tabs>
  );
}
