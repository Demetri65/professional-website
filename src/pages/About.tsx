import { Accordion, AccordionHeader, AccordionPanel } from "@wai-react/patterns/accordion";
import { useState } from "react";

export const About = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
        <Accordion>
          <AccordionHeader control="section1" expanded={open} onClick={() => setOpen(!open)}>Hello There</AccordionHeader>
          <AccordionPanel control="section1" expanded={open}>
            This is an accordion panel
          </AccordionPanel>
        </Accordion>
    </>
  );
};