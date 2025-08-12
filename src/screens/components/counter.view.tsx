import { useContext } from 'react';
import { Text, View } from 'react-native';
import {
	CounterContext,
	CounterContextType,
} from '../../contexts/counter.context';

const CounterView = () => {
	const { count } = useContext(CounterContext) as CounterContextType;

	return (
		<View>
			<Text>Sayac : {count}</Text>
		</View>
	);
};
export default CounterView;
