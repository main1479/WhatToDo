import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IState {
	text: string;
	id: string;
}

const initialState: {
	todos: IState[];
	currentTodo: IState;
} = {
	todos: [],
	currentTodo: {
		text: '',
		id: '',
	},
};

export const counterSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<IState>) => {
			const oldNote = state.todos.find((n) => n.id === action.payload.id);

			if (oldNote) {
				const oldNotes = state.todos.map((n) => {
					if (n.id === action.payload.id) n.text = action.payload.text;
					return n;
				});
				state.todos = oldNotes;
				return state;
			} else {
				const newTodo = { ...action.payload };
				newTodo.id = Date.now().toString();
				state.todos = [...state.todos, newTodo];
				return state;
			}
		},

		editTodo: (state, action: PayloadAction<string>) => {
			const note = state.todos.find((note) => note.id === action.payload);
			if (!note) return;
			state.currentTodo = note;
			return state;
		},
		setCurrentTodo: (state, action: PayloadAction<IState>) => {
			state.currentTodo = action.payload;
			return state;
		},
		removeTodo: (state, action: PayloadAction<string>) => {
			const newTodos = state.todos.filter((note) => note.id !== action.payload);
			state.todos = newTodos;
			return state;
		},
	},
});

export const { addTodo, editTodo, setCurrentTodo, removeTodo } = counterSlice.actions;

export default counterSlice.reducer;
