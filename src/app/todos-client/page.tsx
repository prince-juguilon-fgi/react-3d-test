import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { TodoClient } from "./client";

export default async function TodoClientPage() {
  return (
    <div>
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Todo list (w/ react-query)</AlertTitle>
        <AlertDescription>
          This is a todo list fetched at client side using react-query.
        </AlertDescription>
      </Alert>

      <TodoClient />
    </div>
  );
}
