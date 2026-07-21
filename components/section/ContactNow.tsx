"use client";

import { CSSProperties, useState } from "react";
import {
  HiOutlineChat,
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineUser,
} from "react-icons/hi";

import { ButtonSimple } from "../../components/Button";
import Title from "../../components/Title";
import { useMain } from "@/hooks/useMain";
import "./ContactNow.scss";

const ContactNow = ({
  hidden_title,
  style,
}: {
  hidden_title?: boolean;
  style?: CSSProperties | undefined;
}) => {
  const { postInboxMessage } = useMain();
  const [form, setForm] = useState({
    inbox_name: "",
    inbox_email: "",
    inbox_phone: "",
    inbox_message: "",
  });

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    function callback() {
      setForm({
        inbox_name: "",
        inbox_email: "",
        inbox_phone: "",
        inbox_message: "",
      });
    }

    postInboxMessage(form, callback);
  };

  return (
    <div className="contactNow" style={style}>
      {hidden_title ? (
        <></>
      ) : (
        <Title className="text-center sm:w-10/12 sm:mx-auto">
          For Project Enquiries, Please Contact Us Below
        </Title>
      )}
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col font-medium space-y-6 py-10 sm:space-y-8 sm:py-16 lg:w-8/12 lg:mx-auto lg:flex-row lg:flex-wrap lg:justify-between lg:space-y-0 2xl:py-20"
      >
        <div className="contactNow__input w-full flex flex-row items-center lg:w-30%">
          <HiOutlineUser className="text-2xl text-gray-input mx-1 sm:text-3xl lg:text-1.6vw" />
          <input
            type="text"
            name="inbox_name"
            id="inbox_name"
            required
            autoComplete="none"
            className="text-lg w-full sm:text-2xl lg:text-1.2vw"
            placeholder="Your name"
            value={form?.inbox_name}
            onChange={(e) => setForm({ ...form, inbox_name: e.target.value })}
          />
        </div>
        <div className="contactNow__input w-full flex flex-row items-center lg:w-30%">
          <HiOutlineMail className="text-2xl text-gray-input mx-1 sm:text-3xl lg:text-1.6vw" />
          <input
            type="email"
            name="email"
            id="email"
            required
            autoComplete="off"
            className="text-lg w-full sm:text-2xl lg:text-1.2vw"
            placeholder="Your email"
            value={form?.inbox_email}
            onChange={(e) => setForm({ ...form, inbox_email: e.target.value })}
          />
        </div>
        <div className="contactNow__input w-full flex flex-row items-center lg:w-30%">
          <HiOutlinePhone className="text-2xl text-gray-input mx-1 sm:text-3xl lg:text-1.6vw" />
          <input
            type="number"
            name="phone"
            id="phone"
            required
            autoComplete="none"
            className="text-lg w-full sm:text-2xl lg:text-1.2vw"
            placeholder="Your number"
            value={form?.inbox_phone}
            onChange={(e) => setForm({ ...form, inbox_phone: e.target.value })}
          />
        </div>
        <div className="contactNow__input w-full flex flex-col lg:w-full lg:pt-16 2xl:pt-20">
          <label
            htmlFor="message"
            className="flex flex-row items-center text-gray-input text-lg sm:text-2xl lg:text-1.2vw"
          >
            <HiOutlineChat className="text-2xl text-gray-input mx-1 sm:text-3xl lg:text-1.6vw" />
            <span className="text-gray-input">Message</span>
          </label>
          <textarea
            name="message"
            id="message"
            required
            autoComplete="none"
            className="text-lg w-full bg-gray sm:text-2xl lg:text-1.2vw"
            rows={4}
            placeholder="..."
            value={form?.inbox_message}
            onChange={(e) =>
              setForm({ ...form, inbox_message: e.target.value })
            }
          />
        </div>
        <div className="w-full flex justify-end lg:pt-16">
          <ButtonSimple type="submit">Send</ButtonSimple>
        </div>
      </form>
    </div>
  );
};

export default ContactNow;
