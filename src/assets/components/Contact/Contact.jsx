import ContactForm from '../ContactForm/ContactForm';

function Contact() {
  return (
    <section
      id="kontakt"
      class="mx-auto mt-[10vh] grid items-center justify-center gap-y-10 md:gap-10 pb-40 text-center sm:grid-cols-2 lg:text-left">
      <div className=" sm:mr-5 md:mr-10 mb-auto not-prose">
        <h3 className="text-center sm:text-end mb-4 font-medium text-2xl lg:text-3xl">Pošli mi nezávaznou poptávku</h3>
        <div class="not-prose mx-auto sm:mx-0 sm:ml-auto max-w-xs rounded-lg border border-indigo-700 py-4 px-6 text-sm dark:bg-transparent dark:text-gray-400 md:text-base lg:text-xl">
          <div className="mb-2 flex items-center justify-end">
            <svg
              class="mr-2 h-5 text-indigo-700 lg:mr-4 lg:h-7"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            <a
              href="tel:+420606909527"
              class="text-slate-900 hover:text-indigo-800 dark:text-gray-300 dark:hover:text-white">
              +420 606 909 527
            </a>
          </div>
          <div className="flex items-center justify-end">
            <svg
              class="mr-2 h-5 text-indigo-700 lg:mr-4 lg:h-7"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <a
              href="mailto:info@kolarsky.eu"
              class="text-slate-900 hover:text-indigo-800 dark:text-gray-300 dark:hover:text-white">
              hello@kolarsky.eu
            </a>
          </div>
        </div>
      </div>
        <ContactForm />
    </section>
  );
}

export default Contact;
