import { Text, View } from 'react-native';
import CounterProvider from '../contexts/counter.context';
import CounterActions from './components/counter.action';
import CounterView from './components/counter.view';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function CounterScreen() {
	return (
		<SafeAreaView>
			<View>
				<CounterProvider>
					<CounterActions />
					<CounterView />
				</CounterProvider>
			</View>
		</SafeAreaView>
	);
}

export default CounterScreen;
