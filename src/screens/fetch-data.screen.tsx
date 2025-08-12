import { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export interface Todo {
	id: number;
	title: string;
}

const todoStyle = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 5,
	},
	item: {
		padding: 10,
		borderRadius: 5,
		borderWidth: 1,
		backgroundColor: 'gray',
		color: 'white',
	},
});

const TodoItem = (props: any) => {
	const { name } = props;
	return (
		<View style={todoStyle.container}>
			<Text style={todoStyle.item}>{name}</Text>
		</View>
	);
};

function FetcDataScreen() {
	const [users, setUsers] = useState<Todo[]>([]);

	useEffect(() => {
		console.log('Ekrana ilk çizildiği an');

		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((response) => response.json())
			.then((data: Todo[]) => {
				setUsers([...data]);
			});
	}, []);

	return (
		<ScrollView>
			<SafeAreaView>
				{users.map((item: Todo) => {
					return <TodoItem name={item.title} />;
				})}
			</SafeAreaView>
		</ScrollView>
	);
}

export default FetcDataScreen;
