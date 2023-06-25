import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

type Todo = {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
};

export const getTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return data as Todo[];
};

export const TodoItem = ({ todo }: { todo: Todo }) => {
  const id = `todo-${todo.id}`;
  return (
    <div className="ml-4 flex items-center gap-2 text-sm">
      <Checkbox defaultChecked={todo.completed} id={id} />
      <Label htmlFor={id}>{todo.title}</Label>
    </div>
  );
};
