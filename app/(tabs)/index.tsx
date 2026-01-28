import { StyleSheet, View, Text, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView>
      <View style={styles.titleContainer}>
        <Text>Welcome!</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
