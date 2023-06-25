"use client";

import { TodoItem, getTodos } from "@/components/todos";
import { useQuery } from "@tanstack/react-query";

export const TodoClient = () => {
  const todos = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  return (
    <div className="mt-10 flex flex-col gap-2">
      {todos.isLoading ? (
        <p>Loading...</p>
      ) : (
        todos.data?.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </div>
  );
};
