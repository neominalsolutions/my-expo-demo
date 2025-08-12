import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import CounterScreen from './src/screens/counter.screen';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import FetcDataScreen from './src/screens/fetch-data.screen';
import FetcDataScreen02 from './src/screens/fetch-data02.screen';
import ModalScreen from './src/screens/model.screen';

// Not: IOS için safe area view önemli

export default function App() {
	return (
		<SafeAreaProvider>
			<View style={styles.container}>
				{/* <Text>Open up App.tsx to start working</Text> */}
				{/* <StatusBar style="auto" /> */}
				{/* <CounterScreen /> */}
				{/* <FetcDataScreen /> */}
			</View>
			{/* <FetcDataScreen02 /> */}
			<ModalScreen />
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		height: 500,
	},
});
