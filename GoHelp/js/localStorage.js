// --------------------------------------------------------------------- //
// ------------------- ARRAY MATERIAIS - LOCAL STORAGE ----------------- //
// --------------------------------------------------------------------- //

const materiais = [
  {
    id: 1,
    designacao: "Colunas",
    categoria: "Equipamento de Som",
    qtd: 7,
    descricao: "Colunas de alta qualidade para eventos.",
  },
  {
    id: 2,
    designacao: "Mesa de mistura",
    categoria: "Equipamento de Som",
    qtd: 3,
    descricao: "Mesa de mistura para controlo de áudio.",
  },
  {
    id: 3,
    designacao: "Microfones",
    categoria: "Equipamento de Som",
    qtd: 5,
    descricao: "Microfones de diversos tipos.",
  },
  {
    id: 4,
    designacao: "Cabos de áudio",
    categoria: "Equipamento de Som",
    qtd: 8,
    descricao: "Cabos para conexão de equipamentos de som.",
  },
  {
    id: 5,
    designacao: "Amplificadores",
    categoria: "Equipamento de Som",
    qtd: 4,
    descricao: "Amplificadores de som potentes.",
  },
  {
    id: 6,
    designacao: "Fones de ouvido",
    categoria: "Equipamento de Som",
    qtd: 6,
    descricao: "Fones de ouvido de alta qualidade.",
  },
  {
    id: 7,
    designacao: "Equalizadores",
    categoria: "Equipamento de Som",
    qtd: 2,
    descricao: "Equalizadores para ajuste de som.",
  },
  {
    id: 8,
    designacao: "Processadores de efeitos",
    categoria: "Equipamento de Som",
    qtd: 1,
    descricao: "Processadores para modulação de efeitos sonoros.",
  },
  {
    id: 9,
    designacao: "Mesas",
    categoria: "Mobiliário",
    qtd: 9,
    descricao: "Mesas de vários tamanhos para eventos.",
  },
  {
    id: 10,
    designacao: "Cadeiras",
    categoria: "Mobiliário",
    qtd: 10,
    descricao: "Cadeiras confortáveis para convidados.",
  },
  {
    id: 11,
    designacao: "Estrados e palcos",
    categoria: "Mobiliário",
    qtd: 3,
    descricao: "Estrados e palcos modulares.",
  },
  {
    id: 12,
    designacao: "Balcões de informação",
    categoria: "Mobiliário",
    qtd: 4,
    descricao: "Balcões de atendimento para informações.",
  },
  {
    id: 13,
    designacao: "Estantes",
    categoria: "Mobiliário",
    qtd: 2,
    descricao: "Estantes para exposição de materiais.",
  },
  {
    id: 14,
    designacao: "Sofás e poltronas",
    categoria: "Mobiliário",
    qtd: 6,
    descricao: "Sofás e poltronas confortáveis.",
  },
  {
    id: 15,
    designacao: "Biombos",
    categoria: "Mobiliário",
    qtd: 1,
    descricao: "Biombos para divisão de espaços.",
  },
  {
    id: 16,
    designacao: "Refletores",
    categoria: "Iluminação",
    qtd: 8,
    descricao: "Refletores para iluminação de palco.",
  },
  {
    id: 17,
    designacao: "Luzes LED",
    categoria: "Iluminação",
    qtd: 5,
    descricao: "Luzes LED de alta intensidade.",
  },
  {
    id: 18,
    designacao: "Holofotes",
    categoria: "Iluminação",
    qtd: 3,
    descricao: "Holofotes para iluminação focada.",
  },
  {
    id: 19,
    designacao: "Mesa de controle de luz",
    categoria: "Iluminação",
    qtd: 2,
    descricao: "Mesas para controlo de iluminação.",
  },
  {
    id: 20,
    designacao: "Cabos e conectores elétricos",
    categoria: "Iluminação",
    qtd: 10,
    descricao: "Cabos e conectores para instalação elétrica.",
  },
  {
    id: 21,
    designacao: "Máquinas de fumaça",
    categoria: "Iluminação",
    qtd: 4,
    descricao: "Máquinas de fumaça para efeitos visuais.",
  },
  {
    id: 22,
    designacao: "Projetores",
    categoria: "Equipamento de Vídeo",
    qtd: 3,
    descricao: "Projetores de alta resolução.",
  },
  {
    id: 23,
    designacao: "Câmeras de vídeo",
    categoria: "Equipamento de Vídeo",
    qtd: 6,
    descricao: "Câmeras para gravação de vídeo.",
  },
  {
    id: 24,
    designacao: "Telas de projeção",
    categoria: "Equipamento de Vídeo",
    qtd: 2,
    descricao: "Telas para projeção de imagens.",
  },
  {
    id: 25,
    designacao: "Monitores de vídeo",
    categoria: "Equipamento de Vídeo",
    qtd: 4,
    descricao: "Monitores para visualização de vídeo.",
  },
  {
    id: 26,
    designacao: "Barracas",
    categoria: "Acessórios e Diversos",
    qtd: 1,
    descricao: "Barracas para eventos ao ar livre.",
  },
  {
    id: 27,
    designacao: "Sinalização",
    categoria: "Acessórios e Diversos",
    qtd: 5,
    descricao: "Placas de sinalização para orientação.",
  },
  {
    id: 28,
    designacao: "Cordas e barreiras",
    categoria: "Acessórios e Diversos",
    qtd: 9,
    descricao: "Cordas e barreiras para controlo de acesso.",
  },
  {
    id: 29,
    designacao: "Tapetes e pisos temporários",
    categoria: "Acessórios e Diversos",
    qtd: 4,
    descricao: "Tapetes e pisos para proteção de superfícies.",
  },
  {
    id: 30,
    designacao: "Geradores",
    categoria: "Acessórios e Diversos",
    qtd: 2,
    descricao: "Geradores para fornecimento de energia.",
  },
  {
    id: 31,
    designacao: "Decorações temáticas",
    categoria: "Acessórios e Diversos",
    qtd: 7,
    descricao: "Decorações para temas variados.",
  },
  {
    id: 32,
    designacao: "Painéis de LED",
    categoria: "Acessórios e Diversos",
    qtd: 3,
    descricao: "Painéis de LED para exibição visual.",
  },
  {
    id: 33,
    designacao: "Extintores de incêndio",
    categoria: "Equipamento de Segurança",
    qtd: 5,
    descricao: "Extintores para combate a incêndios.",
  },
  {
    id: 34,
    designacao: "Câmeras de segurança",
    categoria: "Equipamento de Segurança",
    qtd: 6,
    descricao: "Câmeras para monitorização de segurança.",
  },
  {
    id: 35,
    designacao: "Kits de primeiros socorros",
    categoria: "Equipamento de Segurança",
    qtd: 10,
    descricao: "Kits para emergências médicas.",
  },
  {
    id: 36,
    designacao: "Rádios comunicadores",
    categoria: "Equipamento de Segurança",
    qtd: 4,
    descricao: "Rádios para comunicação em eventos.",
  },
  {
    id: 37,
    designacao: "Detetores de metal",
    categoria: "Equipamento de Segurança",
    qtd: 2,
    descricao: "Detetores para segurança em eventos.",
  },
];

// --------------------------------------------------------------------- //
// ------------------- ARRAY LOCAIS - LOCAL STORAGE -------------------- //
// --------------------------------------------------------------------- //

const locais = [
  {
    nome: "Theatro Circo",
    tipo: "Teatro",
    morada: "Avenida da Liberdade, Braga",
    capacidade: 7,
    descricao: "Teatro histórico com uma variedade de espetáculos culturais",
  },
  {
    nome: "Altice Forum Braga",
    tipo: "Arena",
    morada: "Av. Dr. Francisco Pires Gonçalves, Braga",
    capacidade: 2,
    descricao:
      "Espaço moderno para grandes eventos, incluindo concertos e feiras",
  },
  {
    nome: "GNRation",
    tipo: "Centro Cultural",
    morada: "Praça Conde de Agrolongo, Braga",
    capacidade: 3,
    descricao: "Centro cultural com foco em tecnologia e arte moderna",
  },
  {
    nome: "Casa das Artes",
    tipo: "Centro Cultural",
    morada: "Rua Direita, Vila Nova de Famalicão",
    capacidade: 6,
    descricao:
      "Centro cultural com uma agenda diversificada de teatro e música",
  },
  {
    nome: "Centro Cultural Vila Flor",
    tipo: "Centro Cultural",
    morada: "Av. D. Afonso Henriques, Guimarães",
    capacidade: 5,
    descricao: "Espaço cultural com arquitetura moderna e eventos variados",
  },
  {
    nome: "Braga Parque",
    tipo: "Centro Comercial",
    morada: "Quinta dos Congregados, São Víctor, Braga",
    capacidade: 4,
    descricao: "Centro comercial que ocasionalmente acolhe eventos culturais",
  },
  {
    nome: "Praça da República (Arcada)",
    tipo: "Espaço Público",
    morada: "Praça da República, Braga",
    capacidade: 8,
    descricao:
      "Local ao ar livre frequentemente usado para eventos culturais e mercados",
  },
  {
    nome: "Auditório Vita",
    tipo: "Auditório",
    morada: "Rua de São Domingos, Braga",
    capacidade: 2,
    descricao: "Auditório para eventos culturais e religiosos",
  },
  {
    nome: "Auditório Municipal de Barcelos",
    tipo: "Auditório",
    morada: "Largo Dr. José Novais, 27, Barcelos",
    capacidade: 6,
    descricao: "Principal local para eventos culturais em Barcelos",
  },
  {
    nome: "Paço dos Duques de Bragança",
    tipo: "Palácio",
    morada: "Rua Conde Dom Henrique, Guimarães",
    capacidade: 1,
    descricao:
      "Palácio histórico que serve como cenário para eventos culturais exclusivos",
  },
];

// ------------------------------------------------------------------------------------- //
// ------------------- ARRAY UTILIZADORES FRONT OFFICE - LOCAL STORAGE ----------------- //
// --------------------------------------------------------------------------------------//

const utilizadoresFrontOffice = [
  {
    name: "Miguel Castro",
    email: "miguel.benfica112001@gmail.com",
  },
  {
    name: "GoHelp Organização",
    email: "gohelporganizacao@gmail.com",
  },
  {
    name: "Miguel Castro",
    email: "miguel.castroo1115@gmail.com",
  },
];

// ------------------------------------------------------------------------------------- //
// ------------------- ARRAY UTILIZADORES APP - LOCAL STORAGE ----------------- //
// --------------------------------------------------------------------------------------//

const utilizadoresApp = [
  {
    email: "jorgegohelp@gmail.com",
    password: "jorgegohelp",
    name: "Jorge",
    contact: "912 337 111",
  },
  {
    email: "joaogohelp@gmail.com",
    password: "joaogohelp",
    name: "João",
    contact: "912 373 749",
  },
  {
    email: "simaogohelp@gmail.com",
    password: "simaogohelp",
    name: "Simão",
    contact: "912 373 249",
  },
];

// ------------------------------------------------------------------------------------- //
// ------------------- ARRAY PEDIDOS DE EVENTOS - LOCAL STORAGE -------------------------//
// --------------------------------------------------------------------------------------//
const pedidosEventos = [
  {
    id: "pedEv1",
    nomePedidoEvento: "Miguel Castro",
    emailPedidoEvento: "miguel.castroo1115@gmail.com",
    tituloPedidoEvento: "Teatro na UM",
    descricaoPedidoEvento: "Teatro na UM",
    dataPretendidaPedidoEvento: "2024-05-30T01:23",
    duracaoPedidoEvento: "2",
    tipoPedidoEvento: "Teatro",
    localPedidoEvento: "Theatro Circo",
    participantesPedidoEvento: "5",
    submissaoDataPedidoEvento: "27/05/2024, 01:23:01",
    estadoPedidoEvento: "<div class='badge bg-warning'>Pendente</div>",
    colaboradorDoEvento: "Sim",
    imagemOrganizarEvento: "teatro_carosel.png",
  },
];

// ------------------------------------------------------------------------------------- //
// ------------------- ARRAY PEDIDOS TRABALHO - LOCAL STORAGE -------------------------//
// --------------------------------------------------------------------------------------//

const pedidosTrabalho = [
  {
    id: "pedTrab1",
    nomePedidoTrabalho: "GoHelp Organização",
    emailPedidoTrabalho: "gohelporganizacao@gmail.com",
    assuntoPedidoTrabalho: "Pedido de Trabalho para Colaborador",
    mensagemPedidoTrabalho: "Pretendo muito este cargo.",
    cVPedidoTrabalho: "curriculo.pdf",
    submissaoDataPedidoTrabalho: "27/05/2024, 01:49:28",
    estadoPedidoTrabalho: "<div class='badge bg-warning'>Pendente</div>",
    numeroTelefonico: "222222222",
  },
  {
    id: "pedTrab2",
    nomePedidoTrabalho: "Miguel Castro",
    emailPedidoTrabalho: "miguel.castroo1115@gmail.com",
    assuntoPedidoTrabalho: "Cargo de Colaborador de Feiras do Livro",
    mensagemPedidoTrabalho: "Muito entusiasmado por esta oportunidade.",
    cVPedidoTrabalho: "curriculo.pdf",
    submissaoDataPedidoTrabalho: "27/05/2024, 01:50:31",
    estadoPedidoTrabalho: "<div class='badge bg-warning'>Pendente</div>",
    numeroTelefonico: "111111111",
  },
];

// ------------------------------------------------------------------------------------- //
// ------------------- ARRAY DOACOES MONETARIAS - LOCAL STORAGE -------------------------//
// --------------------------------------------------------------------------------------//
const doacoesMonetarias = [
  {
    id: "doacaoMon1",
    nomeDoacao: "Miguel Castro",
    emailDoacao: "miguel.benfica112001@gmail.com",
    montanteDoacao: "50€",
    submissaoDataDoacao: "27/05/2024, 01:31:59",
  },
  {
    id: "doacaoMon2",
    nomeDoacao: "Miguel Castro",
    emailDoacao: "miguel.benfica112001@gmail.com",
    montanteDoacao: "20€",
    submissaoDataDoacao: "27/05/2024, 01:32:02",
  },
  {
    id: "doacaoMon3",
    nomeDoacao: "GoHelp Organização",
    emailDoacao: "gohelporganizacao@gmail.com",
    montanteDoacao: "45€",
    submissaoDataDoacao: "27/05/2024, 01:32:21",
  },
];

// ------------------------------------------------------------------------------------- //
// ------------------- ARRAY EVENTOS - LOCAL STORAGE ------------------------------------//
// --------------------------------------------------------------------------------------//

const eventos = [
  {
    id: "ev1",
    tituloEvento: "Concerto GNR.",
    descricaoEvento: "Abertura do espaço protagonizada pelo grupo nacional.",
    localEvento: "Theatro Circo",
    duracaoEvento: "2",
    tipo: "Concerto",
    dataEvento: "2024-05-29T15:00",
    imagemEvento: "concertos_carosel.png",
    precoInscricaoEvento: "5",
    inscricoes: [
      {
        nome: "GoHelp Organização",
        email: "gohelporganizacao@gmail.com",
        dataInscricao: "2024-05-09T11:54:50",
        status: "naoPresente",
        doacoesLivros: [
          {
            tituloLivro: "O velho e o mar",
            autorLivro: "Ernest Hemingway",
            anoLivro: "1952",
            statusLivro: "naoEntregue",
            condicaoLivro: "1",
          },
          {
            tituloLivro: "Apenas miúdos",
            autorLivro: "Patti Smith",
            anoLivro: "2010",
            statusLivro: "naoEntregue",
            condicaoLivro: "2",
          },
          {
            tituloLivro: "O Estrangeiro",
            autorLivro: "Albert Camus",
            anoLivro: "1942",
            statusLivro: "naoEntregue",
            condicaoLivro: "1",
          },
        ],
        doacoesMateriais: [
          {
            descricaoMaterial: "Luzes LED",
            tipoMaterial: "Iluminação",
            quantidadeMaterial: 1,
            statusMaterial: "naoEntregue",
            condicaoMaterial: "3",
          },
          {
            descricaoMaterial: "Câmeras de vídeo",
            tipoMaterial: "Equipamento de Vídeo",
            quantidadeMaterial: 2,
            statusMaterial: "naoEntregue",
            condicaoMaterial: "1",
          },
        ],
      },
      {
        nome: "Miguel Castro",
        email: "miguel.castroo1115@gmail.com",
        dataInscricao: "29/05/2024, 11:05:55",
        status: "naoPresente",
        doacoesLivros: [],
        doacoesMateriais: [],
      },
    ],
    colaboradores: [
      {
        email: "jorgegohelp@gmail.com",
        password: "jorgegohelp",
      },
      {
        email: "joaogohelp@gmail.com",
        password: "joaogohelp",
      },
    ],
    materiais: [
      {
        id: 1,
        designacao: "Mesa Redonda",
        qtd: 1,
        status: "naoConfirmado",
      },
      {
        id: 2,
        designacao: "Estante",
        qtd: 2,
        status: "naoConfirmado",
      },
    ],
    ficheiros: [],
    comentarios: [],
    status: "a Realizar",
  },
  {
    id: "ev2",
    tituloEvento: "Teatro Rural.",
    descricaoEvento: "Evento teste",
    localEvento: "Altice Forum Braga",
    duracaoEvento: "2",
    tipo: "Teatro",
    dataEvento: "2024-04-29T15:00",
    imagemEvento: "teatro_carosel.png",
    precoInscricaoEvento: "10",
    inscricoes: [
      {
        nome: "GoHelp Organização",
        email: "gohelporganizacao@gmail.com",
        dataInscricao: "2024-05-29T15:20:00",
        status: "naoPresente",
        doacoesLivros: [
          {
            tituloLivro: "Romeu e Julieta",
            autorLivro: "William Shakespeare",
            anoLivro: "1597",
            statusLivro: "naoEntregue",
            condicaoLivro: "1",
          },
          {
            tituloLivro: "O Estrangeiro",
            autorLivro: "Albert Camus",
            anoLivro: "1942",
            statusLivro: "naoEntregue",
            condicaoLivro: "1",
          },
        ],
        doacoesMateriais: [
          {
            descricaoMaterial: "Geradores",
            tipoMaterial: "Acessórios e Diversos",
            quantidadeMaterial: 2,
            statusMaterial: "naoEntregue",
            condicaoMaterial: "3",
          },
          {
            descricaoMaterial: "Decorações temáticas",
            tipoMaterial: "Acessórios e Diversos",
            quantidadeMaterial: 2,
            statusMaterial: "naoEntregue",
            condicaoMaterial: "1",
          },
        ],
      },
    ],
    colaboradores: [
      {
        email: "simaogohelp@gmail.com",
        password: "simaogohelp",
      },
    ],
    materiais: [
      {
        id: 1,
        designacao: "Mesa Redonda",
        qtd: 1,
        status: "naoConfirmado",
      },
      {
        id: 2,
        designacao: "Estante",
        qtd: 2,
        status: "naoConfirmado",
      },
    ],
    ficheiros: [],
    comentarios: [],
    status: "a Realizar",
  },
  {
    id: "ev3",
    tituloEvento: "Feira do Livro.",
    descricaoEvento: "Feira do Livro",
    localEvento: "Casa das Artes",
    duracaoEvento: "2",
    tipo: "Feira do Livro",
    dataEvento: "2024-06-02T13:00",
    imagemEvento: "livros_carosel.png",
    precoInscricaoEvento: "15",
    inscricoes: [
      {
        nome: "GoHelp Organização",
        email: "gohelporganizacao@gmail.com",
        dataInscricao: "2024-05-09T01:01:07",
        status: "naoPresente",
        doacoesLivros: [
          {
            tituloLivro: "Livro 1",
            autorLivro: "José Machado",
            anoLivro: "1876",
            statusLivro: "naoEntregue",
            condicaoLivro: "3",
          },
          {
            tituloLivro: "Livro 2",
            autorLivro: "Simão Castro",
            anoLivro: "2013",
            statusLivro: "naoEntregue",
            condicaoLivro: "2",
          },
        ],
        doacoesMateriais: [
          {
            descricaoMaterial: "Mesa de mistura",
            tipoMaterial: "Equipamento de Som",
            quantidadeMaterial: 1,
            statusMaterial: "naoEntregue",
            condicaoMaterial: "5",
          },
          {
            descricaoMaterial: "Cadeiras",
            tipoMaterial: "Mobiliário",
            quantidadeMaterial: 2,
            statusMaterial: "naoEntregue",
            condicaoMaterial: "4",
          },
          {
            descricaoMaterial: "Luzes LED",
            tipoMaterial: "Iluminação",
            quantidadeMaterial: 3,
            statusMaterial: "naoEntregue",
            condicaoMaterial: "3",
          },
        ],
      },
    ],
    colaboradores: [
      {
        email: "jorgegohelp@gmail.com",
        password: "jorgegohelp",
      },
      {
        email: "joaogohelp@gmail.com",
        password: "joaogohelp",
      },
    ],
    materiais: [],
    ficheiros: [],
    comentarios: [],
    status: "por Realizar",
  },
  {
    id: "ev4",
    tituloEvento: "Concerto de Verão",
    descricaoEvento: "Concerto ao ar livre com bandas locais.",
    localEvento: "Praça da República (Arcada)",
    duracaoEvento: "2",
    tipo: "Concerto",
    dataEvento: "2024-07-05T18:00",
    imagemEvento: "concertos_carosel.png",
    precoInscricaoEvento: "20",
    inscricoes: [],
    colaboradores: [],
    materiais: [],
    ficheiros: [],
    comentarios: [],
    status: "por Realizar",
  },
  {
    id: "ev5",
    tituloEvento: "Noite de Teatro Clássico",
    descricaoEvento: "Apresentação de peças teatrais clássicas.",
    localEvento: "Theatro Circo",
    duracaoEvento: "2",
    tipo: "Teatro",
    dataEvento: "2024-07-12T20:00",
    imagemEvento: "teatro_carosel.png",
    precoInscricaoEvento: "15",
    inscricoes: [],
    colaboradores: [],
    materiais: [],
    ficheiros: [],
    comentarios: [],
    status: "por Realizar",
  },
  {
    id: "ev6",
    tituloEvento: "Feira do Livro Infantil",
    descricaoEvento: "Feira dedicada aos livros infantis.",
    localEvento: "Braga Parque",
    duracaoEvento: "3",
    tipo: "Feira do Livro",
    dataEvento: "2024-08-03T10:00",
    imagemEvento: "livros_carosel.png",
    precoInscricaoEvento: "5",
    inscricoes: [],
    colaboradores: [],
    materiais: [],
    ficheiros: [],
    comentarios: [],
    status: "por Realizar",
  },
  {
    id: "ev7",
    tituloEvento: "Concerto de Outono",
    descricaoEvento: "Concerto temático de outono.",
    localEvento: "Altice Forum Braga",
    duracaoEvento: "2",
    tipo: "Concerto",
    dataEvento: "2024-04-15T17:00",
    imagemEvento: "concertos_carosel.png",
    precoInscricaoEvento: "30",
    inscricoes: [],
    colaboradores: [],
    materiais: [],
    ficheiros: [],
    comentarios: [],
    status: "Concluido",
  },
  {
    id: "ev8",
    tituloEvento: "Teatro de Inverno",
    descricaoEvento: "Peças de teatro inspiradas no inverno.",
    localEvento: "Casa das Artes",
    duracaoEvento: "2",
    tipo: "Teatro",
    dataEvento: "2024-11-20T19:00",
    imagemEvento: "teatro_carosel.png",
    precoInscricaoEvento: "10",
    inscricoes: [],
    colaboradores: [],
    materiais: [],
    ficheiros: [],
    comentarios: [],
    status: "por Realizar",
  },
  {
    id: "ev9",
    tituloEvento: "Feira do Livro de Natal",
    descricaoEvento: "Feira de livros com temas natalinos.",
    localEvento: "Centro Cultural Vila Flor",
    duracaoEvento: "4",
    tipo: "Feira do Livro",
    dataEvento: "2024-12-05T14:00",
    imagemEvento: "livros_carosel.png",
    precoInscricaoEvento: "20",
    inscricoes: [],
    colaboradores: [],
    materiais: [],
    ficheiros: [],
    comentarios: [],
    status: "por Realizar",
  },
  {
    id: "ev10",
    tituloEvento: "Concerto de Primavera",
    descricaoEvento: "Concerto comemorativo da primavera.",
    localEvento: "GNRation",
    duracaoEvento: "2",
    tipo: "Concerto",
    dataEvento: "2024-03-21T16:00",
    imagemEvento: "concertos_carosel.png",
    precoInscricaoEvento: "25",
    inscricoes: [],
    colaboradores: [],
    materiais: [],
    ficheiros: [],
    comentarios: [],
    status: "Concluido",
  },
  {
    id: "ev11",
    tituloEvento: "Teatro de Verão",
    descricaoEvento: "Apresentação de peças teatrais leves e divertidas.",
    localEvento: "Auditório Vita",
    duracaoEvento: "2",
    tipo: "Teatro",
    dataEvento: "2024-06-15T18:00",
    imagemEvento: "teatro_carosel.png",
    precoInscricaoEvento: "10",
    inscricoes: [],
    colaboradores: [],
    materiais: [],
    ficheiros: [],
    comentarios: [],
    status: "por Realizar",
  },
  {
    id: "ev12",
    tituloEvento: "Feira do Livro de Outono",
    descricaoEvento: "Feira de livros com temas de outono.",
    localEvento: "Auditório Municipal de Barcelos",
    duracaoEvento: "3",
    tipo: "Feira do Livro",
    dataEvento: "2024-10-12T14:00",
    imagemEvento: "livros_carosel.png",
    precoInscricaoEvento: "10",
    inscricoes: [],
    colaboradores: [],
    materiais: [],
    ficheiros: [],
    comentarios: [],
    status: "por Realizar",
  },
  {
    id: "ev13",
    tituloEvento: "Concerto de Inverno",
    descricaoEvento: "Concerto com músicas inspiradas no inverno.",
    localEvento: "Paço dos Duques de Bragança",
    duracaoEvento: "2",
    tipo: "Concerto",
    dataEvento: "2024-12-21T17:00",
    imagemEvento: "concertos_carosel.png",
    precoInscricaoEvento: "40",
    inscricoes: [],
    colaboradores: [],
    materiais: [],
    ficheiros: [],
    comentarios: [],
    status: "por Realizar",
  },
  {
    id: "ev14",
    tituloEvento: "Teatro de Primavera",
    descricaoEvento: "Apresentação de peças teatrais inspiradas na primavera.",
    localEvento: "Centro Cultural Vila Flor",
    duracaoEvento: "2",
    tipo: "Teatro",
    dataEvento: "2024-04-10T18:00",
    imagemEvento: "teatro_carosel.png",
    precoInscricaoEvento: "15",
    inscricoes: [],
    colaboradores: [],
    materiais: [],
    ficheiros: [],
    comentarios: [],
    status: "Concluido",
  },
  {
    id: "ev15",
    tituloEvento: "Feira do Livro Internacional",
    descricaoEvento: "Feira com livros de autores internacionais.",
    localEvento: "Theatro Circo",
    duracaoEvento: "3",
    tipo: "Feira do Livro",
    dataEvento: "2024-05-05T10:00",
    imagemEvento: "livros_carosel.png",
    precoInscricaoEvento: "30",
    inscricoes: [],
    colaboradores: [],
    materiais: [],
    ficheiros: [],
    comentarios: [],
    status: "Concluido",
  },
  {
    id: "ev16",
    tituloEvento: "Concerto de Ano Novo",
    descricaoEvento: "Concerto comemorativo do Ano Novo.",
    localEvento: "Praça da República (Arcada)",
    duracaoEvento: "2",
    tipo: "Concerto",
    dataEvento: "2025-01-01T20:00",
    imagemEvento: "concertos_carosel.png",
    precoInscricaoEvento: "50",
    inscricoes: [],
    colaboradores: [],
    materiais: [],
    ficheiros: [],
    comentarios: [],
    status: "por Realizar",
  },
  {
    id: "ev17",
    tituloEvento: "Teatro Infantil",
    descricaoEvento: "Peças de teatro para crianças.",
    localEvento: "Auditório Municipal de Barcelos",
    duracaoEvento: "2",
    tipo: "Teatro",
    dataEvento: "2024-05-20T15:00",
    imagemEvento: "teatro_carosel.png",
    precoInscricaoEvento: "10",
    inscricoes: [],
    colaboradores: [],
    materiais: [],
    ficheiros: [],
    comentarios: [],
    status: "Concluido",
  },
  {
    id: "ev18",
    tituloEvento: "Feira do Livro Regional",
    descricaoEvento: "Feira com livros de autores regionais.",
    localEvento: "GNRation",
    duracaoEvento: "4",
    tipo: "Feira do Livro",
    dataEvento: "2024-11-10T10:00",
    imagemEvento: "livros_carosel.png",
    precoInscricaoEvento: "20",
    inscricoes: [],
    colaboradores: [],
    materiais: [],
    ficheiros: [],
    comentarios: [],
    status: "por Realizar",
  },
  {
    id: "ev19",
    tituloEvento: "Concerto de Rock",
    descricaoEvento: "Concerto com bandas de rock.",
    localEvento: "Altice Forum Braga",
    duracaoEvento: "2",
    tipo: "Concerto",
    dataEvento: "2024-10-05T19:00",
    imagemEvento: "concertos_carosel.png",
    precoInscricaoEvento: "35",
    inscricoes: [],
    colaboradores: [],
    materiais: [],
    ficheiros: [],
    comentarios: [],
    status: "por Realizar",
  },
  {
    id: "ev20",
    tituloEvento: "Teatro Moderno",
    descricaoEvento: "Apresentação de peças teatrais modernas.",
    localEvento: "Braga Parque",
    duracaoEvento: "2",
    tipo: "Teatro",
    dataEvento: "2024-08-25T18:00",
    imagemEvento: "teatro_carosel.png",
    precoInscricaoEvento: "20",
    inscricoes: [],
    colaboradores: [],
    materiais: [],
    ficheiros: [],
    comentarios: [],
    status: "por Realizar",
  },
  {
    id: "ev21",
    tituloEvento: "Feira do Livro Antigo",
    descricaoEvento: "Feira com livros antigos e raros.",
    localEvento: "Casa das Artes",
    duracaoEvento: "3",
    tipo: "Feira do Livro",
    dataEvento: "2024-07-01T10:00",
    imagemEvento: "livros_carosel.png",
    precoInscricaoEvento: "50",
    inscricoes: [],
    colaboradores: [],
    materiais: [],
    ficheiros: [],
    comentarios: [],
    status: "por Realizar",
  },
  {
    id: "ev22",
    tituloEvento: "Concerto Clássico",
    descricaoEvento: "Concerto com música clássica.",
    localEvento: "Centro Cultural Vila Flor",
    duracaoEvento: "2",
    tipo: "Concerto",
    dataEvento: "2024-09-20T19:00",
    imagemEvento: "concertos_carosel.png",
    precoInscricaoEvento: "45",
    inscricoes: [],
    colaboradores: [],
    materiais: [],
    ficheiros: [],
    comentarios: [],
    status: "por Realizar",
  },
  {
    id: "ev23",
    tituloEvento: "Teatro ao Ar Livre",
    descricaoEvento: "Peças de teatro ao ar livre.",
    localEvento: "Praça da República (Arcada)",
    duracaoEvento: "2",
    tipo: "Teatro",
    dataEvento: "2024-06-20T20:00",
    imagemEvento: "teatro_carosel.png",
    precoInscricaoEvento: "25",
    inscricoes: [],
    colaboradores: [],
    materiais: [],
    ficheiros: [],
    comentarios: [],
    status: "por Realizar",
  },
  {
    id: "ev24",
    tituloEvento: "Feira do Livro de Poesia",
    descricaoEvento: "Feira dedicada aos livros de poesia.",
    localEvento: "Auditório Vita",
    duracaoEvento: "3",
    tipo: "Feira do Livro",
    dataEvento: "2024-04-15T10:00",
    imagemEvento: "livros_carosel.png",
    precoInscricaoEvento: "15",
    inscricoes: [],
    colaboradores: [],
    materiais: [],
    ficheiros: [],
    comentarios: [],
    status: "Concluido",
  },
  {
    id: "ev25",
    tituloEvento: "Concerto de Jazz",
    descricaoEvento: "Concerto com bandas de jazz.",
    localEvento: "GNRation",
    duracaoEvento: "2",
    tipo: "Concerto",
    dataEvento: "2024-05-10T20:00",
    imagemEvento: "concertos_carosel.png",
    precoInscricaoEvento: "30",
    inscricoes: [],
    colaboradores: [],
    materiais: [],
    ficheiros: [],
    comentarios: [],
    status: "Concluido",
  },
  {
    id: "ev26",
    tituloEvento: "Teatro Musical",
    descricaoEvento: "Apresentação de teatro musical.",
    localEvento: "Altice Forum Braga",
    duracaoEvento: "2",
    tipo: "Teatro",
    dataEvento: "2024-10-10T18:00",
    imagemEvento: "teatro_carosel.png",
    precoInscricaoEvento: "35",
    inscricoes: [],
    colaboradores: [],
    materiais: [],
    ficheiros: [],
    comentarios: [],
    status: "por Realizar",
  },
  {
    id: "ev27",
    tituloEvento: "Feira do Livro de Histórias",
    descricaoEvento: "Feira dedicada aos livros de histórias.",
    localEvento: "Auditório Municipal de Barcelos",
    duracaoEvento: "3",
    tipo: "Feira do Livro",
    dataEvento: "2024-09-05T10:00",
    imagemEvento: "livros_carosel.png",
    precoInscricaoEvento: "25",
    inscricoes: [],
    colaboradores: [],
    materiais: [],
    ficheiros: [],
    comentarios: [],
    status: "por Realizar",
  },
  {
    id: "ev28",
    tituloEvento: "Concerto Acústico",
    descricaoEvento: "Concerto com música acústica.",
    localEvento: "Paço dos Duques de Bragança",
    duracaoEvento: "2",
    tipo: "Concerto",
    dataEvento: "2024-11-15T19:00",
    imagemEvento: "concertos_carosel.png",
    precoInscricaoEvento: "40",
    inscricoes: [],
    colaboradores: [],
    materiais: [],
    ficheiros: [],
    comentarios: [],
    status: "por Realizar",
  },
  {
    id: "ev29",
    tituloEvento: "Teatro de Rua",
    descricaoEvento: "Apresentação de teatro de rua.",
    localEvento: "Braga Parque",
    duracaoEvento: "2",
    tipo: "Teatro",
    dataEvento: "2024-05-25T18:00",
    imagemEvento: "teatro_carosel.png",
    precoInscricaoEvento: "20",
    inscricoes: [],
    colaboradores: [],
    materiais: [],
    ficheiros: [],
    comentarios: [],
    status: "Concluido",
  },
  {
    id: "ev30",
    tituloEvento: "Feira do Livro Independente",
    descricaoEvento: "Feira com livros de autores independentes.",
    localEvento: "Casa das Artes",
    duracaoEvento: "4",
    tipo: "Feira do Livro",
    dataEvento: "2024-12-01T10:00",
    imagemEvento: "livros_carosel.png",
    precoInscricaoEvento: "30",
    inscricoes: [],
    colaboradores: [],
    materiais: [],
    ficheiros: [],
    comentarios: [],
    status: "por Realizar",
  },
  {
    id: "ev31",
    tituloEvento: "Concerto Beneficente",
    descricaoEvento: "Concerto para arrecadar fundos para caridade.",
    localEvento: "Praça da República (Arcada)",
    duracaoEvento: "2",
    tipo: "Concerto",
    dataEvento: "2024-12-10T19:00",
    imagemEvento: "concertos_carosel.png",
    precoInscricaoEvento: "50",
    inscricoes: [],
    colaboradores: [],
    materiais: [],
    ficheiros: [],
    comentarios: [],
    status: "por Realizar",
  },
  {
    id: "ev32",
    tituloEvento: "Teatro de Comédia",
    descricaoEvento: "Peças de teatro de comédia.",
    localEvento: "Auditório Vita",
    duracaoEvento: "2",
    tipo: "Teatro",
    dataEvento: "2024-06-10T18:00",
    imagemEvento: "teatro_carosel.png",
    precoInscricaoEvento: "15",
    inscricoes: [],
    colaboradores: [],
    materiais: [],
    ficheiros: [],
    comentarios: [],
    status: "por Realizar",
  },
  {
    id: "ev33",
    tituloEvento: "Feira do Livro de Ficção.",
    descricaoEvento: "Feira dedicada aos livros de ficção científica.",
    localEvento: "GNRation",
    duracaoEvento: "3",
    tipo: "Feira do Livro",
    dataEvento: "2024-11-01T14:00",
    imagemEvento: "livros_carosel.png",
    precoInscricaoEvento: "20",
    inscricoes: [],
    colaboradores: [],
    materiais: [],
    ficheiros: [],
    comentarios: [],
    status: "por Realizar",
  },
  {
    id: "ev34",
    tituloEvento: "Concerto Gospel",
    descricaoEvento: "Concerto com grupos de música gospel.",
    localEvento: "Altice Forum Braga",
    duracaoEvento: "2",
    tipo: "Concerto",
    dataEvento: "2024-04-20T18:00",
    imagemEvento: "concertos_carosel.png",
    precoInscricaoEvento: "35",
    inscricoes: [],
    colaboradores: [],
    materiais: [],
    ficheiros: [],
    comentarios: [],
    status: "Concluido",
  },
  {
    id: "ev35",
    tituloEvento: "Feira do Livro de História",
    descricaoEvento: "Feira dedicada aos livros de história.",
    localEvento: "Centro Cultural Vila Flor",
    duracaoEvento: "3",
    tipo: "Feira do Livro",
    dataEvento: "2024-06-05T14:00",
    imagemEvento: "livros_carosel.png",
    precoInscricaoEvento: "20",
    inscricoes: [],
    colaboradores: [],
    materiais: [],
    ficheiros: [],
    comentarios: [],
    status: "por Realizar",
  },
  {
    id: "ev36",
    tituloEvento: "Teatro de Rir",
    descricaoEvento: "Peças de teatro de comédia.",
    localEvento: "Auditório Vita",
    duracaoEvento: "2",
    tipo: "Teatro",
    dataEvento: "2024-08-10T18:00",
    imagemEvento: "teatro_carosel.png",
    precoInscricaoEvento: "15",
    inscricoes: [],
    colaboradores: [],
    materiais: [],
    ficheiros: [],
    comentarios: [],
    status: "por Realizar",
  },
];

// ------------------------------------------------------------------------------------- //
// ------------------- ARRAY COLABORADORES ORG - LOCAL STORAGE ------------------------- //
// --------------------------------------------------------------------------------------//

const colaboradoresORG = [
  {
    iddColaborador: 1,
    nomeColaborador: "Jorge",
    contactoColaborador: "912 337 111",
    emailColaborador: "jorgegohelp@gmail.com",
    passwordColaborador: "jorgegohelp",
    descricaoColaborador: "Colaborador Jorge",
    tipoColaborador: "Interno",
    funcaoColaborador: "Colaborador",
    dataCriacao: "23/05/2024",
  },
  {
    iddColaborador: 2,
    nomeColaborador: "Rodrigo",
    contactoColaborador: "912 373 747",
    emailColaborador: "rodrigogohelp@gmail.com",
    passwordColaborador: "",
    descricaoColaborador: "Segurança Rodrigo",
    tipoColaborador: "Externo",
    funcaoColaborador: "Segurança",
    dataCriacao: "23/05/2024",
  },
  {
    iddColaborador: 3,
    nomeColaborador: "João",
    contactoColaborador: "912 373 749",
    emailColaborador: "joaogohelp@gmail.com",
    passwordColaborador: "joaogohelp",
    descricaoColaborador: "Colaborador João",
    tipoColaborador: "Interno",
    funcaoColaborador: "Colaborador",
    dataCriacao: "23/05/2024",
  },
  {
    iddColaborador: 4,
    nomeColaborador: "Simão",
    contactoColaborador: "912 373 249",
    emailColaborador: "simaogohelp@gmail.com",
    passwordColaborador: "simaogohelp",
    descricaoColaborador: "Colaborador Simão",
    tipoColaborador: "Interno",
    funcaoColaborador: "Colaborador",
    dataCriacao: "23/05/2024",
  },
];

// ------------------------------------------------------------------------------------- //
// ----------------------- ARRAY WARNINGS DATA - LOCAL STORAGE ------------------------- //
// --------------------------------------------------------------------------------------//

const warningsData = [
  {
    id: 1716941034275,
    eventId: "ev1",
    titulo: "Falta um Colaborador",
    descricao: "Precisamos de um Colaborador",
    selectedOption: "Ausência de Pessoal",
    author: "jorgegohelp@gmail.com",
  },
  {
    id: 1716941300989,
    eventId: "ev1",
    titulo: "Agressão grave",
    descricao: "Agressão no recinto junto ao WC",
    selectedOption: "Agressão Física",
    author: "joaogohelp@gmail.com",
  },
  {
    id: 1716941519103,
    eventId: "ev1",
    titulo: "Furto PC",
    descricao: "Furto de um computador",
    selectedOption: "Furto",
    author: "jorgegohelp@gmail.com",
  },
];

// Função para salvar os arrays na Local Storage apenas se não existirem
function saveToLocalStorage() {
  if (!localStorage.getItem("materiais")) {
    localStorage.setItem("materiais", JSON.stringify(materiais));
  }
  if (!localStorage.getItem("locais")) {
    localStorage.setItem("locais", JSON.stringify(locais));
  }
  if (!localStorage.getItem("utilizadoresFrontOffice")) {
    localStorage.setItem(
      "utilizadoresFrontOffice",
      JSON.stringify(utilizadoresFrontOffice)
    );
  }
  if (!localStorage.getItem("pedidosEventos")) {
    localStorage.setItem("pedidosEventos", JSON.stringify(pedidosEventos));
  }
  if (!localStorage.getItem("doacoesMonetarias")) {
    localStorage.setItem(
      "doacoesMonetarias",
      JSON.stringify(doacoesMonetarias)
    );
  }
  if (!localStorage.getItem("pedidosTrabalho")) {
    localStorage.setItem("pedidosTrabalho", JSON.stringify(pedidosTrabalho));
  }
  if (!localStorage.getItem("eventos")) {
    localStorage.setItem("eventos", JSON.stringify(eventos));
  }
  if (!localStorage.getItem("colaboradoresORG")) {
    localStorage.setItem("colaboradoresORG", JSON.stringify(colaboradoresORG));
  }
  if (!localStorage.getItem("utilizadoresApp")) {
    localStorage.setItem("utilizadoresApp", JSON.stringify(utilizadoresApp));
  }
  if (!localStorage.getItem("warningsData")) {
    localStorage.setItem("warningsData", JSON.stringify(warningsData));
  }
}

// Chamando a função para salvar os dados na Local Storage quando a página é carregada
window.onload = function () {
  saveToLocalStorage();
};
