const TodoList = ({ list, remove }) => {
    return (
        <>

            <div className="">
                {list?.length > 0 ? (
                    <div>
                        {list.map((entry, index) => (
                            <div className="mx-auto mt-5 flex max-w-md gap-x-2">
                                <div className="min-w-0 flex-auto rounded-md border-0 bg-green-300 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6" key={index}> {entry} </div>

                                <button
                                    className="flex-none rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                    onClick={() => {
                                        remove(entry);
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-2xl mx-auto mt-5 flex max-w-md justify-center text-red-500 font-bold">
                        <p>No task found</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default TodoList;