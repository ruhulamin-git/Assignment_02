const TodoInput = ({ todo, setTodo, addTodo }) => {
    return (
        <>
            <div>
                <div class="mx-auto mt-5 flex max-w-md gap-x-2">
                    <input id="email-address" name="todo" type="text" autocomplete="email" required="" className="min-w-0 flex-auto rounded-md border-0 bg-green-300 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/5 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6" placeholder="Create a new Item" value={todo} onChange={(e) => {
                        setTodo(e.target.value);
                    }} />

                    <button type="submit" className="flex-none rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" onClick={addTodo}>Add Item</button>
                </div>
            </div>
        </>
    );
};

export default TodoInput;