import { StyleSheet, ScrollView, View, Text } from 'react-native';

export default function TabTwoScreen() {
  return (
    <ScrollView>
      <View style={styles.titleContainer}>
        <Text>
          Explore
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
