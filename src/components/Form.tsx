import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { addTodo, setCurrentTodo } from '../store/todosSlice';

export default function Form(): JSX.Element {
	const note = useSelector((state: RootState) => state.todos.currentTodo);
	const dispatch = useDispatch();
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!note.text) return;
		dispatch(addTodo(note));
		dispatch(
			setCurrentTodo({
				text: '',
				id: '',
			})
		);
	};
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(
			setCurrentTodo({
				text: e.target.value,
				id: note.id,
			})
		);
	};
	return (
		<form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto p-5 bg-gray-100 rounded-lg">
			<div className="mt-1">
				<input
					type="text"
					name="note"
					className="shadow-sm text-lg p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full  border-indigo-300 rounded-md"
					placeholder="Write your note"
					value={note.text}
					onChange={handleChange}
				/>
			</div>
		</form>
	);
}
