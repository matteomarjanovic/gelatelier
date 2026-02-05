import React from "react";
import Button from "./button.tsx";

const ContactForm = () => {
  return (
    <div className="col-span-1 lg:col-span-2">
      <form className="w-full grid grid-cols-2 gap-x-10 gap-y-[50px]">
        <label htmlFor="companyName" className="col-span-2">
          <input
            type="text"
            name="companyName"
            className="w-full border-b border-black outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray"
            placeholder="Nome Azienda *"
            required
          />
        </label>
        <label htmlFor="companyType" className="col-span-2 lg:col-span-1">
          <select
            name="companyType"
            className="w-full border-b border-black outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray bg-transparent"
            required
          >
            <option value="">Tipo di Attività *</option>
            <option value="bar">Bar</option>
            <option value="hotel">Hotel</option>
            <option value="ristorante">Ristorante</option>
            <option value="altro">Altro</option>
          </select>
        </label>
        <label htmlFor="email" className="col-span-2 lg:col-span-1">
          <input
            type="email"
            name="email"
            className="w-full border-b border-black outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray"
            placeholder="Email *"
            required
          />
        </label>
        <label htmlFor="phone" className="col-span-2">
          <input
            type="tel"
            name="phone"
            className="w-full border-b border-black outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray"
            placeholder="Numero di Telefono *"
            required
          />
        </label>
        <textarea
          name="message"
          className="col-span-2 border-b w-full border-black outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray"
          cols={30}
          rows={10}
          placeholder="Messaggio (facoltativo): raccontaci delle tue esigenze..."
        ></textarea>

        <div className="w-full flex justify-end col-span-2">
          <Button text="Invia Richiesta" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
