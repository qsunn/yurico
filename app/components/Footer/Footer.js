import { s } from "@/app/styles";
import { Form } from "./Form";
import { Navigation } from "./Navigation";

export const Footer = () => {

  return (
    <footer className={`grid place-items-center relative w-full`}>
      <div className={`${s.gridRow} w-full`}>
        <Form />
        <Navigation />
      </div>
    </footer>
  );
};
