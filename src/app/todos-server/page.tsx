import { TodoItem, getTodos } from "@/components/todos";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export default async function TodosServerPage() {
  const todos = await getTodos();

  return (
    <div>
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Todo list (server)</AlertTitle>
        <AlertDescription>
          This is a todo list fetched at server side.
        </AlertDescription>
      </Alert>

      <div className="mt-10 flex flex-col gap-2">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}
