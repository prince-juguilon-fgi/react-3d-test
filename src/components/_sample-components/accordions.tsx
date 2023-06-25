import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { H4 } from "@/components/ui/typography";

export const Accordions = () => {
  return (
    <>
      <H4 className="mt-10 w-full border-b pb-2">Accordions:</H4>
      <div className="flex flex-col gap-4 md:flex-row">
        <Accordion collapsible className="flex-1" type="single">
          <AccordionItem value="item-1">
            <AccordionTrigger>Single Accordion</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Accordion item 2</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Accordion item 3</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion className="flex-1" type="multiple">
          <AccordionItem value="item-1">
            <AccordionTrigger>Multiple Accordion</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Accordion item 2</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Accordion item 3</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};
