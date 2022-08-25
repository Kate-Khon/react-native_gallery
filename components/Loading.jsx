import { Text, View, ActivityIndicator } from 'react-native';

export const Loading = () => (
  <View
    style={{
      flex: 1,
      marginLeft: 8,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <ActivityIndicator size="large" />
    <Text style={{ marginTop: 15 }}>Loading...</Text>
  </View>
);
