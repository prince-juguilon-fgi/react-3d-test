import Link from "next/link";
import { ExternalLink, Terminal } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Blockquote, H4 } from "@/components/ui/typography";
import { Typography } from "@/components/_sample-components/typography";
import { ButtonsAndToast } from "@/components/_sample-components/buttons-and-toast";
import { InputsAndForms } from "@/components/_sample-components/inputs-and-forms";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <>
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Next.js Template</AlertTitle>
        <AlertDescription>
          This is a template for Next.js projects. It includes TypeScript,
          ESLint, Prettier, Tailwind CSS, react-query, prebuilt-components, and
          more.
        </AlertDescription>
      </Alert>

      <Blockquote>
        Use the template:{" "}
        <a
          className="inline-flex items-center gap-2 text-blue-500 hover:underline"
          href="https://github.com/Focus-Global-Inc/next-js-template/generate"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>https://github.com/Focus-Global-Inc/next-js-template</span>
          <ExternalLink className="h-4 w-4" />
        </a>
      </Blockquote>

      <Accordion className="mt-10 flex-1" type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>Buttons, Toasts, and Dialogs</AccordionTrigger>
          <AccordionContent>
            <ButtonsAndToast />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Inputs and Forms</AccordionTrigger>
          <AccordionContent>
            <InputsAndForms />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Typography</AccordionTrigger>
          <AccordionContent>
            <Typography />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-10">
        <H4 className="mt-10 w-full border-b pb-2">Pages:</H4>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li className="hover:underline">
            <Link href="/todos-server">Todo list (server)</Link>
          </li>
          <li className="hover:underline">
            <Link href="/todos-client">Todo list (w/ react-query)</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
