"use client";
import { motion } from "motion/react";
import { useActionState } from "react";
import { subscribe, type SubscribeState } from "../actions/subscribe";

const initialState: SubscribeState = { status: "idle", message: "" };

const viewport = { once: false, margin: "-100px" } as const;

export function EmailSignup() {
  const [state, formAction, pending] = useActionState(subscribe, initialState);

  return (
    <section
      aria-labelledby="email-signup-heading"
      className="fustat flex justify-center px-6 pb-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-5xl"
      >
        <div className="w-fit max-w-full">
          <h2
            id="email-signup-heading"
            className="font-serif text-3xl font-bold sm:text-4xl md:text-5xl"
          >
            Interested? Join Our Email List:
          </h2>
          <form
            action={formAction}
            className="mt-8 flex w-full flex-col gap-4 sm:flex-row sm:items-end"
          >
            <div className="relative flex-1">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={254}
                autoComplete="email"
                placeholder="you@example.com"
                className="peer w-full bg-transparent py-3 text-xl outline-none placeholder:text-black/40 sm:text-2xl"
              />
              <motion.span
                aria-hidden="true"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={viewport}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
                className="absolute inset-x-0 bottom-0 h-px origin-left bg-black transition-[height,background-color] peer-focus:h-0.5 peer-focus:bg-brand-blue"
              />
            </div>
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />
            <button
              type="submit"
              disabled={pending}
              className="border border-black px-8 py-3 text-lg transition-colors hover:bg-black hover:text-brand-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue disabled:opacity-60"
            >
              {pending ? "Joining…" : "Join"}
            </button>
          </form>
          <p aria-live="polite" className="mt-4 min-h-7 text-lg">
            {state.message}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
