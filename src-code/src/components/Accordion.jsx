import * as Accordion from "@radix-ui/react-accordion";
import { useState } from "react";
import AccordionTriggerIcon from "./AccordionTriggerIcon";
import { forwardRef } from "react";
// import { parserOptions } from "../../.eslintrc.cjs";

function MyAccordion({ heading }) {
  const [value, setValue] = useState(["item-1"]);

  function isOpen(itemValue) {
    return value.includes(itemValue);
  }

  function handleValueChange(value) {
    setValue(value);
    console.log(value);
  }

  return (
    <>
      <Accordion.Root
        type="multiple"
        className="mx-auto w-[calc(100%-2rem)] max-w-[40rem]  space-y-8 rounded-xl bg-white p-6 sm:w-[80%]"
        value={value}
        defaultValue={["item-1"]}
        onValueChange={handleValueChange}
      >
        <h2 className="flex  items-center gap-3 pb-2 text-4xl font-[700] text-dark-purple before:block before:h-8 before:w-8 before:bg-[url('/src/assets/images/icon-star.svg')] before:bg-cover">
          {heading}
        </h2>

        <AccordionItem
          isOpen={isOpen}
          value="item-1"
          triggerTitle="What is frontend mentor, and how will it help me?"
        >
          Frontend Mentor offers realistic coding challenges to help developers
          improve their frontend coding skills with projects in HTML, CSS, and
          JavaScript. It&apos;s suitable for all levels and ideal for portfolio
          building.
        </AccordionItem>

        <AccordionItem
          isOpen={isOpen}
          value="item-2"
          triggerTitle="Is Frontend Mentor free?"
        >
          Yes, Frontend Mentor offers both free and premium coding challenges,
          with the free option providing access to a range of projects suitable
          for all skill levels.
        </AccordionItem>

        <AccordionItem
          isOpen={isOpen}
          value="item-3"
          triggerTitle="Can I use Frontend Mentor projects in my portfolio?"
        >
          Yes, you can use projects completed on Frontend Mentor in your
          portfolio. It&apos;s an excellent way to showcase your skills to
          potential employers!
        </AccordionItem>

        <AccordionItem
          isOpen={isOpen}
          value="item-4"
          triggerTitle="How can I get help if I'm stuck on a Frontend Mentor challenge lakdjaf ?"
        >
          The best place to get help is inside Frontend Mentor&apos;s Discord
          community. There&apos;s a help channel where you can ask questions and
          seek support from other community members.
        </AccordionItem>
        <AccordionItem
          isOpen={isOpen}
          value="item-5"
          triggerTitle="Can I use Frontend Mentor projects in my portfolio?"
        >
          Yes, you can use projects completed on Frontend Mentor in your
          portfolio. It&apos;s an excellent way to showcase your skills to
          potential employers!
        </AccordionItem>

        <AccordionItem
          isOpen={isOpen}
          value="item-6"
          triggerTitle="This is a Test"
        >
          This is Some sample text whatever
        </AccordionItem>
      </Accordion.Root>
    </>
  );
}

const AccordionItem = forwardRef(function AccordionItem(
  { children, isOpen, triggerTitle, ...props },
  forwardedRef,
) {
  return (
    <Accordion.Item ref={forwardedRef} value={props.value}>
      <Accordion.Header>
        <Accordion.Trigger {...props} className="accordion-trigger group">
          <span className="max-w-[45ch]">{triggerTitle}</span>
          <AccordionTriggerIcon open={isOpen(props.value)} />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="accordion-content before:block before:h-2 before:w-full">
        {children}
      </Accordion.Content>
    </Accordion.Item>
  );
});

export default MyAccordion;
