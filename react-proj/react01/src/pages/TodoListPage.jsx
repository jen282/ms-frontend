import React, { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";

function TodoListPage() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos"); // json헝태
    return JSON.parse(savedTodos);
  });

  //--------로컬스토리지---------
  const saveLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  //--------할일 추가-----------
  const addTodo = () => {
    //공백입력 시 리턴
    if (todoInput.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: todoInput, completed: false }]);
    setTodoInput("");
    saveLocalStorage();
  };
  //--------완료 토글---------
  const completedToggle = (id) => {
    // console.log(id);
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(newTodos);
  };
  //--------할일 삭제---------
  const deleteTodo = (id) => {
    console.log(id);
    setTodos(todos.filter((todo) => todo.id != id));
  };
  //-----------로컬 스토리지---------
  // 배열 안의 값이 바뀔때마다 앞의 함수를 실행
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-20">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-md border border-gray-200">
        {/* 헤더 */}
        <h1 className="text-3xl font-bold text-center mb-6">📝 투두리스트</h1>

        {/* 입력창 & 버튼 */}
        <div className="flex gap-2 mb-6">
          {/* {todoInput} 확인용 */}
          <input
            onChange={(e) => {
              setTodoInput(e.target.value);
            }}
            onKeyUp={(e) => {
              // console.log(e.key);
              if (e.key === "Enter") {
                addTodo();
              }
            }}
            value={todoInput}
            type="text"
            placeholder="할 일을 입력하세요"
            className="flex-1 border border-gray-300 rounded px-4 py-3 outline-none"
          />
          <button
            // onClick={() => {
            //   setTodos([
            //     ...todos,
            //     { id: todos.length + 1, text: todoInput, completed: false },
            //   ]);
            //   setTodoInput("");
            // }}
            onClick={addTodo}
            className="bg-purple-500 text-white font-bold px-6 py-3 rounded"
          >
            추가
          </button>
        </div>

        {/* 할 일 목록 */}
        <ul className="max-h-[400px] overflow-y-auto pr-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between py-3 border-b border-gray-200"
            >
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5"
                  defaultChecked={todo.completed}
                  onChange={() => {
                    completedToggle(todo.id);
                  }}
                />
                <span
                  className={`text-lg ${todo.completed ? "text-gray-400 line-through" : ""}`}
                >
                  {todo.text}
                </span>
              </label>
              <button
                onClick={() => {
                  deleteTodo(todo.id);
                }}
                className="text-red-500 hover:text-red-600 p-1"
              >
                <Trash2 size={20} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoListPage;
