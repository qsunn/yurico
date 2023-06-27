import { s } from "@/app/styles";
import Link from "next/link";

export const Form = () => {
  return (
    <div
      className={`${s.container} !flex flex-col md:flex-row justify-center items-center md:items-start gap-40 bg-[#121212] pt-16 md:pt-36 pb-24`}
    >
      <div className="flex flex-col text-center md:text-start md:max-w-[29.5rem]">
        <h2 className={`font-light text-4xl mb-10`}>Do you have questions?
          <br />Contact us</h2>
        <p className="text-blue font-light text-xl">Contact us today to learn more about our services or to schedule a consultation, please fill out the contact form and one of our representatives will get back to you as soon as possible.</p>
      </div>
      <form
        className={`${s.gridRow} gap-8 w-full md:max-w-[48.25rem] relative`}
      >
        <div className={s.inputCol}>
          <input
            type="text"
            placeholder="First name*"
            required
            className={s.input}
          />
          <input
            type="text"
            placeholder="Last name*"
            required
            className={s.input}
          />
        </div>
        <div className={s.inputCol}>
          <input
            type="email"
            placeholder="Address Email*"
            required
            className={s.input}
          />
          <input
            type="tel"
            placeholder="Phone*"
            required
            className={s.input}
          />
        </div>
        <textarea
          placeholder="Message"
          className={`${s.input} !bg-[url('./images/bg_input_message.svg')] resize-none h-24`}
        ></textarea>
        <div
          className={`${s.gridRow} gap-8 w-full md:flex md:items-center md:justify-between`}
        >
          <label className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox" />
            Accept{" "}
            <Link href="#" className="text-red">
              Privacy Policy
            </Link>
          </label>
          <button type="submit" className={`${s.button}`}>
            Send message
          </button>
        </div>
      </form>
    </div>
  );
};
