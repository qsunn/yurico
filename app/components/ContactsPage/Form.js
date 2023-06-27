"use client";
import { s } from "@/app/styles";
import Link from "next/link";

export const Form = () => {
    return (
        <form
            className="relative hidden md:grid grid-flow-row gap-6 w-full pt-[4rem]"
        >
            <div className="flex gap-6">
                <input
                    type="text"
                    name="FullName"
                    required
                    className={s.input2}
                    placeholder="Full name*"
                />
                <input
                    type="text"
                    name="LastName"
                    required
                    className={s.input2}
                    placeholder="Last name*"
                />
            </div>
            <div className="flex gap-6">
                <input
                    type="text"
                    name="Email"
                    required
                    className={s.input2}
                    placeholder="Address Email*"
                />
                <input
                    type="text"
                    name="Phone"
                    required
                    className={s.input2}
                    placeholder="Phone*"
                />
            </div>
            <textarea
                type="text"
                name="Message"
                className={s.inputMessage}
                placeholder="Message"
            />
            <div className="flex items-center justify-between">
                <label
                    className="flex items-center gap-2 justify-self-start text-red"
                >
                    <input
                        type="checkbox"
                        className="form-checkbox"
                        required
                    />
                    Accept{" "}
                    <Link href="#" className="text-blue">
                        Privacy Policy
                    </Link>
                </label>
                <button
                    type="submit"
                    className={`${s.button} px-16`}
                >
                    Send message
                </button>
            </div>
        </form>
    );
};
