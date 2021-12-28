import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { editTodo, removeTodo } from '../store/todosSlice';

export default function List(): JSX.Element {
	const { todos: notes } = useSelector((state: RootState) => state.todos);
	const dispatch = useDispatch();
	return (
		<div className="w-full max-w-xl mx-auto p-5 bg-gray-100 rounded-lg mt-10">
			<h3 className="text-center text-2xl font-semibold">My Notes</h3>

			<ul className="list">
				{notes.map((note) => (
					<li
						key={note.id}
						className="flex justify-between items-center p-3 bg-red-400 text-gray-700 rounded-lg my-4"
					>
						<p className="font-medium text-lg">{note.text}</p>
						<div className="flex gap-2">
							<button
								className="bg-gray-100 hover:bg-gray-700 hover:text-gray-100 p-2 rounded-lg"
								onClick={() => dispatch(editTodo(note.id))}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="w-5 h-5 "
									viewBox="0 0 16 16"
								>
									<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
									<path
										fillRule="evenodd"
										d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
									/>
								</svg>
							</button>
							<button
								className="bg-gray-100 hover:bg-gray-700 hover:text-gray-100 p-2 rounded-lg"
								onClick={() => dispatch(removeTodo(note.id))}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="w-5 h-5 "
									viewBox="0 0 16 16"
								>
									<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
									<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
								</svg>
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
