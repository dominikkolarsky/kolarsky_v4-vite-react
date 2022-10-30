import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uycvnr4', 'contact_form', form.current, 'QP66USYry_JNx20MA')
      .then((result) => {
          console.log(result.text);
          document.getElementById("form").reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form id="form" ref={form} onSubmit={sendEmail} className="grid max-w-md grid-cols-2 gap-4">
      <div className="relative col-span-2 sm:col-span-1">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="h-5 w-5 text-indigo-700"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"></path>
          </svg>
        </div>
        <input
          type="text"
          className="block w-full rounded-xl border-0 bg-indigo-700/5 p-2.5 pl-10 text-sm text-slate-900  focus:ring-indigo-800 dark:bg-indigo-300/5 dark:text-white dark:placeholder-gray-400 dark:focus:ring-indigo-800"
          placeholder="Tvé jméno"
          name="user_name"
          required
        />
      </div>
      <div className="relative col-span-2 sm:col-span-1">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-indigo-700"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg>
        </div>
        <input
          type="email"
          className="block w-full rounded-xl border-0 bg-indigo-700/5 p-2.5 pl-10 text-sm text-slate-900  focus:ring-indigo-800 dark:bg-indigo-300/5 dark:text-white dark:placeholder-gray-400 dark:focus:ring-indigo-800"
          placeholder="tvůj@email.cz"
          name="user_email"
          required
        />
      </div>
      <div className="relative col-span-2">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="h-5 w-5 text-indigo-700"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"></path>
          </svg>
        </div>
        <input
          type="text"
          className="block w-full rounded-xl border-0 bg-indigo-700/5 p-2.5 pl-10 text-sm text-slate-900  focus:ring-indigo-800 dark:bg-indigo-300/5 dark:text-white dark:placeholder-gray-400 dark:focus:ring-indigo-800"
          placeholder="Co budeme tvořit?"
          name="topic"
          required
        />
      </div>

      <textarea
        rows="4"
        className="col-span-2 w-full rounded-xl border-0 bg-indigo-700/5 p-2.5 px-3 text-sm text-slate-900  focus:ring-indigo-800 dark:bg-indigo-300/5 dark:text-white dark:placeholder-gray-400 dark:focus:ring-indigo-800"
        placeholder="Zpráva pro mě..."
        name="message"
        required></textarea>
      <button
        type="submit"
        value=''
        className="col-span-2 place-self-center sm:place-self-end w-[14rem] rounded-full border-2 border-indigo-900 p-2 text-sm transition-all duration-300 dark:hover:bg-indigo-800/60 dark:hover:shadow-md dark:hover:shadow-indigo-900/20 lg:mx-0 hover:bg-indigo-800/10 hover:border-indigo-800/5 hover:text-indigo-900 dark:hover:text-indigo-50">
          Poslat zprávu
      </button>
    </form>
  );
}

export default ContactForm;
