import './App.css';
import Form from './components/Form';
import List from './components/List';

function App() {
	return (
		<div className="App">
			<div className="mx-auto container">
				<h1 className="py-10 text-center text-white text-6xl font-semibold">What To Do Today</h1>
				<Form />
				<List />
			</div>
		</div>
	);
}

export default App;
