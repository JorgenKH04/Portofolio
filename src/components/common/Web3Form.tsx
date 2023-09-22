import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { useState } from "react";

import { useLanguageContext } from "@/contexts/languageContext";
//
export function Web3Form({
  compClass,
  isFormOpen,
}: {
  compClass: string;
  isFormOpen: boolean;
}) {
  const languageContext = useLanguageContext();
  const lang = languageContext ? languageContext[0] : null;
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  //

  const [formSubmitted, setFormSubmitted] = useState("");

  const { submit: onSubmit } = useWeb3Forms({
    accessKey: "0b7e4558-d0ae-433b-85bf-03a3fb5f89b6",
    settings: {
      fromName: "Portofolio email",
      subject: "New Contact Message from your Portofolio site",
    },
    onSuccess: (message) => {
      setFormSubmitted("Email sent successfully!");
      reset({
        name: "",
        email: "",
        message: "",
      });
      console.info(message);
      setTimeout(() => {
        setFormSubmitted("");
      }, 2000);
    },
    onError: (message) => {
      console.info(message);
    },
  });

  if (!isFormOpen) {
    return null;
  }
  return (
    <form className={compClass} onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">{lang?.formname}</label>
      <input
        id="name"
        type="text"
        {...register("name", {
          required: "Full name is required",
          maxLength: 80,
          onChange: () => {
            setFormSubmitted("");
          },
        })}
      />
      <label htmlFor="email">{lang?.formemail}</label>
      <input
        defaultValue=""
        type="email"
        id="email"
        {...register("email", {
          required: "Enter your email",
          onChange: () => {
            setFormSubmitted("");
          },
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Please enter a valid email",
          },
        })}
      />
      <label htmlFor="message">{lang?.formmessage}</label>
      <textarea
        defaultValue=""
        id="message"
        {...register("message", {
          required: "Enter your Message",
          onChange: () => {
            setFormSubmitted("");
          },
        })}
      />
      <button type="submit">{lang?.formsubmit}</button>
      {/* Swap this to reusable modal popup in the future */}
      {formSubmitted ? (
        <div>
          <p>Your form has been submitted</p>
        </div>
      ) : null}
    </form>
  );
}
