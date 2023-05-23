import imgFundo from '../images/img_fundo.png';

import Header from '../components/Header';

const navigation = [
  { name: 'Início', href: '/inicio', current: false },
  { name: 'Sobre', href: '/sobre', current: true },
  { name: 'Habilidades', href: '/habilidades', current: false },
  { name: 'Projetos', href: '/projetos', current: false },
  { name: 'Contato', href: '/contato', current: false },
];

const stats = [
  { name: 'Commits', value: '+ 1.1 mil' },
  { name: 'Horas de estudos em desenvolvimento web', value: '+ 2 mil' },
  { name: 'Projetos', value: '+ 40' },
]

export default function About() {
  return (
    <div>
      <Header navigation={navigation} />
      <div>
        <img
          src={imgFundo}
          alt=""
          className="absolute inset-0 -z-10 h-screen w-screen object-cover object-right md:object-center"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 bg-black bg-opacity-80 lg:mx-30 m-auto mt-10 p-10 rounded-3xl">

        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-center text-white sm:text-6xl">Sobre mim</h2>
          <p className="mt-6 text-lg text-center leading-8 text-gray-300">
            Formada em <b>Desenvolvimento de Software Web Full Stack</b> na
            <a
              href="https://www.betrybe.com/"
              className="text-green-200"
            > Trybe</a>.
            <br />
            Préviamente formada em Técnico em Administração no Instituto Federal do Sul de Minas.
            <br />
            Sou uma pessoa <b>colaborativa</b> e <b>comprometida</b> em prestar um bom serviço.
            <br />Gosto de <b>trabalhar em equipe</b>.
            <br />
            Estou localizada em Estiva, Minas Gerais, Brasil.
          </p>
        </div>

        <div className="mt-10 max-w-2xl lg:mx-0 lg:max-w-none">

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse items-center">
                <dt className="text-base leading-7 text-gray-300 text-center">{stat.name}</dt>
                <a
                  href="https://github.com/analuisams99"
                  rel="noreferrer" target="_blank"
                  className="text-2xl font-bold leading-9 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-500 text-center  hover:text-white">
                  {stat.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div >

  );
}
