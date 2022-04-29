import ShrekPoster from "../assets/StaticMovies/ShrekPoster.png";
import HojeEuQueroVoltarSozinho from "../assets/StaticMovies/HojeEuQueroVoltarSozinho.png";
import SpiderManIntoSpiderVerse from "../assets/StaticMovies/SpiderManIntoSpiderVerse.png";
import SonhoDeLiberdade from "../assets/StaticMovies/SonhoDeLiberdade.png";
import QueHorasElaVolta from "../assets/StaticMovies/QueHorasElaVolta.png";

import AFugaDasGalinhas from "../assets/StaticMovies/AFugaDasGalinhas.jpeg";
import RocketMan from "../assets/StaticMovies/RocketMan.jpeg";
import AmarElo from "../assets/StaticMovies/AmarElo.jpeg";

export const StaticDataMovies = [
  {
    id: 0,
    title: "Shrek",
    overview:
      "Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão.",

    static_path: ShrekPoster,
    backdrop_path: "",

    vote_average: 8.4,
    user_liked: false,
    already_seen: false,
    recently_added: false,
  },

  {
    id: 1,
    title: "Hoje Eu Quero Voltar Sozinho",
    overview:
      "Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga.",

    static_path: HojeEuQueroVoltarSozinho,
    backdrop_path: "",

    vote_average: 8.4,
    user_liked: false,
    already_seen: false,
    recently_added: false,
  },

  {
    id: 2,
    title: "SpiderMan Into SpiderVerse",
    overview:
      "Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo.",

    static_path: SpiderManIntoSpiderVerse,
    backdrop_path: "",

    vote_average: 4.4,
    user_liked: true,
    already_seen: true,
    recently_added: false,
  },

  {
    id: 3,
    title: "Um Sonho de Liberdade",
    overview:
      "Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão.",

    static_path: SonhoDeLiberdade,
    backdrop_path: "",

    vote_average: 4.4,
    user_liked: false,
    already_seen: false,
    recently_added: false,
  },

  {
    id: 4,
    title: "Que Horas Ela Volta?",
    overview:
      "Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel.",

    static_path: QueHorasElaVolta,
    backdrop_path: "",

    vote_average: 4.4,
    user_liked: false,
    already_seen: false,
    recently_added: false,
  },

  {
    id: 5,
    title: "A Fuga das Galinhas",
    overview:
      "O galo Rocky e a galinha Ginger querem ajudar todas as outras galinhas a fugirem da granja onde vivem em cativeiro.",
    static_path: AFugaDasGalinhas,
    backdrop_path: "",

    vote_average: 4.4,
    user_liked: false,
    already_seen: false,
    recently_added: false,
  },

  {
    id: 6,
    title: "RocketMan",
    overview:
      "Em reabilitação, Elton John relembra suas origens humildes, as músicas atemporais e os momentos de inspiração e excesso. Baseado em sua verdadeira história.",
    static_path: RocketMan,
    backdrop_path: "",

    vote_average: 4.4,
    user_liked: false,
    already_seen: true,
    recently_added: false,
  },

  {
    id: 7,
    title: "AmarElo",
    overview:
      "Nos bastidores do show no Theatro Municipal de São Paulo, o rapper e ativista Emicida celebra o grande legado da cultura negra brasileira.",
    static_path: AmarElo,
    backdrop_path: "",

    vote_average: 4.4,
    user_liked: false,
    already_seen: true,
    recently_added: true, // True apenas para testes... Após a criação do Modal definir a funcionalidade de adicionado recentemente apenas nos itens inseridos a partir do botão "Adicionar Filme".
  },
];
