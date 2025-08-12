import { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {
	CounterContext,
	CounterContextType,
} from '../../contexts/counter.context';

const CounterActions = () => {
	const { increase, decrease } = useContext(
		CounterContext
	) as CounterContextType;

	const onIncrease = () => {
		if (increase) {
			increase();
		}
	};

	const onDecrease = () => {
		if (decrease) {
			decrease();
		}
	};

	return (
		<View>
			<View style={styles.container}>
				<Button title="Increase" onPress={onIncrease} />
			</View>
			<View style={styles.container}>
				<Button color={'green'} title="Decrease" onPress={onDecrease}></Button>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: { padding: 5 },
});

export default CounterActions;
