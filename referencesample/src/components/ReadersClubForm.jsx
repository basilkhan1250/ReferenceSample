"use client";

import { useState } from "react";
import { siteConfig } from "../config/site";

export default function ReadersClubForm({ theme = "light" }) {
  const [submitted, setSubmitted] = useState(false);
  const dark = theme === "dark";

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p
        className={[
          "max-w-xl text-base leading-relaxed md:text-lg",
          dark ? "text-white/90" : "text-neutral-700",
        ].join(" ")}
      >
        {siteConfig.home.stayUpdated.formThanksMessage}
      </p>
    );
  }

  const labelCls = dark
    ? "text-sm text-white/90"
    : "text-sm text-neutral-800";
  const inputCls = dark
    ? "w-full border border-white/35 bg-zinc-800/90 px-3 py-2.5 text-base text-white placeholder:text-white/40 outline-none focus:border-[#c8e64a]/80"
    : "w-full border border-neutral-300 bg-white px-3 py-2.5 text-base text-neutral-900 shadow-sm outline-none focus:border-neutral-500";
  const btnCls = dark
    ? "w-full border border-[#c8e64a] bg-[#c8e64a] px-8 py-3 font-sans text-xs font-bold uppercase tracking-[0.2em] text-black transition-opacity hover:opacity-90 sm:w-auto"
    : "shrink-0 border border-neutral-800 bg-neutral-800 px-8 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-neutral-900 sm:mb-[2px]";

  return (
    <form
      className={[
        "flex w-full max-w-lg flex-col gap-4",
        dark ? "sm:max-w-none" : "mx-auto max-w-2xl sm:flex-row sm:items-end sm:justify-center sm:gap-3",
      ].join(" ")}
      onSubmit={onSubmit}
    >
      <label className={["min-w-0 flex-1 text-left", labelCls].join(" ")}>
        <span className="mb-1 block font-normal">Name</span>
        <input
          required
          autoComplete="name"
          className={inputCls}
          name="name"
          type="text"
        />
      </label>
      <label className={["min-w-0 flex-1 text-left", labelCls].join(" ")}>
        <span className="mb-1 block font-normal">Email</span>
        <input
          required
          autoComplete="email"
          className={inputCls}
          name="email"
          type="email"
        />
      </label>
      <button className={btnCls} type="submit">
        Join
      </button>
    </form>
  );
}
