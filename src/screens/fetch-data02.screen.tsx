import React, { useEffect, useState } from 'react';
import {
	View,
	Text,
	ScrollView,
	StyleSheet,
	FlatList,
	Alert,
	ActivityIndicator,
	TouchableOpacity,
	Image,
	Switch,
	Button,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';

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
	logo: {
		width: 30,
		height: 30,
		padding: 2,
	},
});

const TodoItem = (props: any) => {
	const { name } = props;
	const [disable, setDisable] = useState<boolean>(false);

	const onToggleSwitch = () => {
		setDisable(!disable);
	};

	return (
		<View style={todoStyle.container}>
			<Image
				style={todoStyle.logo}
				source={{
					uri: 'https://reactnative.dev/img/tiny_logo.png',
				}}
			/>
			<Text style={todoStyle.item}>{name}</Text>
			<Switch
				trackColor={{ false: '#767577', true: '#81b0ff' }}
				thumbColor={disable ? '#f5dd4b' : '#f4f3f4'}
				ios_backgroundColor="#3e3e3e"
				onValueChange={onToggleSwitch}
				value={disable}
			/>
			<Button title="Button Sample" disabled={disable} />
		</View>
	);
};

function FetcDataScreen02() {
	const [users, setUsers] = useState<Todo[]>([]);
	const [isRefresh, setIsRefresh] = useState(false);

	const loadData = async () => {
		setIsRefresh(true);
		const response = await axios.get(
			'https://jsonplaceholder.typicode.com/todos'
		);
		const data = await response.data;
		setUsers(data);
		setIsRefresh(false);
	};

	// useEffect için de async kodları yazamyız yani await kullanamayız.
	useEffect(() => {
		console.log('Ekrana ilk çizildiği an');
		loadData();
	}, []);

	const onPress = () => {
		Alert.alert('Touchanbe Press');
	};

	return (
		<SafeAreaView>
			{isRefresh && <ActivityIndicator size="large" />}
			<FlatList
				refreshing={isRefresh}
				onRefresh={() => loadData()}
				ListHeaderComponent={
					<TouchableOpacity onPress={onPress}>
						<View style={{ padding: 50 }}>
							<Text>My List</Text>
						</View>
					</TouchableOpacity>
				}
				initialNumToRender={10}
				data={users}
				renderItem={({ item }) => <TodoItem name={item.title} />}
				keyExtractor={(item) => item.id.toString()}
			/>
		</SafeAreaView>
	);
}

export default FetcDataScreen02;
