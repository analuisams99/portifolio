import analuisa from '../images/eu.jpeg';
import imgFundo from '../images/img_fundo.png';

import Header from '../components/Header';

function NotFound() {
  return (
    <div>
      <Header />
      <div>
        <img
          src={imgFundo}
          alt=""
          className="absolute inset-0 -z-10 h-screen w-screen object-cover object-right md:object-center"
        />
      </div>
      <div className="flex mt-5">
        <img
          className="m-auto h-40 w-40 rounded-full ring-1 ring-gray-300 shadow-lg shadow-gray-400"
          src={analuisa}
          alt="Ana Luisa"
        />
      </div>

      <div className="relative px-6 pt-8 lg:px-8 bg-black bg-opacity-50 lg:mx-40 mt-6 rounded-3xl">

        <div className="m-auto max-w-2xl ">

          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-indigo-400 sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-300 to-blue-500">
              Prazer, sou Ana Luisa!
            </h1>
            <h4 className=" text-indigo-400 sm:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-300 to-blue-500">
              Desenvolvedora Web FullStack.
            </h4>
            <p className="mt-6 text-lg leading-8 text-white">
              Sou uma pessoa colaborativa e comprometida em prestar um bom serviço. Gosto de trabalhar em equipe e ajudar no que for necessário. Ansiosa para aplicar minhas habilidades em projetos desafiadores.
            </p>
            <div className="mt-6 mb-6 flex items-center justify-center gap-x-6">
              <a
                href="https://github.com/analuisams99"
                className="rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/analuisams99/" className="text-sm font-semibold leading-6 text-blue-400">
                Linkedin <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default NotFound;
