import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Header from '../components/Header';

const navigation = [
  { name: 'Início', href: '/inicio', current: false },
  { name: 'Sobre', href: '/sobre', current: false },
  { name: 'Habilidades', href: '/habilidades', current: false },
  { name: 'Projetos', href: '/projetos', current: false },
  { name: 'Contato', href: '/contato', current: true },
];

export default function Contact() {
  const formRef = useRef();

  const [forms, setForms] = useState({
    name: '',
    email: '',
    message: '',
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setForms({ ...forms, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    if (forms.email === '') {
      alert('Por favor, preencha o campo de e-mail.');
    } else if (forms.name === '') {
      alert('Por favor, preencha o campo de nome.');
    } else {
      emailjs.sendForm("service_dwer2ib", "template_5tmz16u", formRef.current, "Vo9scylhDvY5Ghu_P")
        .then((result) => {
          alert('SUCCESS!', result.status, result.text);
        }, (error) => {
          alert('FAILED...', error);
        });

      event.target.reset();
    }
  }

  return (
    <div>
      <Header navigation={navigation} />
      <div>
        <div className="px-6 py-8 sm:py-8 lg:px-8">
          <div
            className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
            aria-hidden="true"
          >
            <div
              className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Entre em contato</h2>
            <p className="mt-2 text-lg leading-8 text-white">
              Deixe seu recado e confira minhas redes. Vou adorar entrar em contato com você!
            </p>
          </div>

          <form ref={formRef} onSubmit={handleFormSubmit} className="mx-auto max-w-xl sm:mt-8">
            <div className="gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-200">
                  Nome/Empresa
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    onChange={handleInputChange}
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 
                    bg-purple-300 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 mt-4">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-200">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-purple-300"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 mt-4">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-200">
                  Mensagem
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset bg-purple-300 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>

            </div>
            <div className="mt-10">
              <button
                type="submit"

                className="block w-full rounded-md bg-pink-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-600"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}
