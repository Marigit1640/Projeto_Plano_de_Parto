
export const DEMO_QUESTIONS = [
  {
  id: 'presentation',
  type: 'info',
  image: 'assets/P2 i2.png',
  text: 'Este aplicativo foi criado com base em informações científicas sobre gestação e plano de parto.\n\nAqui, você encontra orientações para se sentir mais segura, informada e preparada para o nascimento do seu bebê.',
  audioUrl: '/audio/A2.m4a'
},
  
  {
    id: 'intro',
    type: 'info',
    title: 'VOCÊ SABE O QUE É UM PLANO DE PARTO?',
    image: 'assets/P7 i7.png',
    posicao: {
    bottom: '20px',
    left: '0px',
    width: '140px'
  },
    text: 'O Plano de parto é um jeito simples de você gestante conversar com a equipe de saúde. Nele, você pode dizer o que quer, o que espera e como prefere que seja o seu parto e o pós-parto. Assim, você participa das decisões sobre o seu corpo e do seu bebê, tendo suas escolhas respeitadas.',
    audioUrl: '/audio/A7.2.m4a',
    autoAudioUrl: '/audio/A7.1.m4a'
  },
  {
    id: 'why',
    type: 'info',
    title: 'POR QUE FAZER UM PLANO DE PARTO?',
    image: 'assets/P7 i7.png',
    posicao: {
    bottom: '20px',
    left: '0px',
    width: '140px'
  },
    text: 'Fazer um plano de parto ajuda você a se sentir mais segura, informada e preparada para esse momento tão especial. Ele permite que você conheça melhor seus direitos, pense sobre como gostaria que fosse o nascimento do seu bebê e converse com a equipe de saúde sobre suas vontades, dúvidas e preferências. Além disso, o plano de parto contribui para que seu parto seja mais humanizado, respeitoso e com menos intervenções desnecessárias. Essa prática é recomendada pela Organização Mundial da Saúde desde 1996, justamente por ajudar a garantir que você participe ativamente das decisões sobre o seu parto e se torne protagonista desse momento.',
    audioUrl: '/audio/A8.2.m4a',
    autoAudioUrl: '/audio/A8.1.m4a'
  },
  {
    id: 'personal_info',
    type: 'form',
    title: 'INFORMAÇÕES PESSOAIS',
    autoAudioUrl: '/audio/A4.1.m4a',
    fields: [
      { id: 'name', label: 'NOME', type: 'text', audioUrl: '/audio/A4.2.m4a' },
      { id: 'dob', label: 'DATA DE NASCIMENTO', type: 'date', audioUrl: '/audio/A4.3.m4a' },
      { id: 'cpf', label: 'CPF', type: 'text', audioUrl: '/audio/A4.4.m4a' },
      { id: 'phone', label: 'TELEFONE', type: 'tel', audioUrl: '/audio/A4.5.m4a' }
    ],
    image: 'assets/P4 i4.png',
    width: '140px',
    left: '0px',
    top: '20px'
  },
  {
    id: 'baby_info',
    type: 'form',
    title: 'INFORMAÇÕES DO BEBÊ',
    autoAudioUrl: '/audio/A5.1.m4a',
    image: 'assets/P5 i5.png',
    width: '100%',
    left: '0px',
    top: '20px',
    fields: [
      { id: 'babyName', label: 'NOME', type: 'texto', audioUrl: '/audio/A5.2.m4a' },
      { id: 'babySex', label: 'SEXO', type: 'texto', audioUrl: '/audio/A5.3.m4a' }
    ]
  },
  {
  id: 'maternity_intro',
  type: 'info',
  title: 'AGORA É O MOMENTO DE CONSTRUIR SEU PLANO DE PARTO!',
  text: 'Registre suas preferências e escolhas para viver esse momento de forma segura, respeitosa e de acordo com o que é importante para você.',
  audioUrl: '/audio/A10.2.m4a',
  autoAudioUrl: '/audio/A10.1.m4a'
},

  {
    id: 'maternity',
    type: 'choice',
    title: 'DESEJA CONHECER A MATERNIDADE?',
    autoAudioUrl: '/audio/A11.1.m4a',
    image:'assets/P6 i6.png',
    width: '45%',
    left: '0px',
    top: '20px',
    options: [
      { texto: 'SIM', audioUrl: '/audio/A11.2.m4a' },
      { texto: 'NÃO', audioUrl: '/audio/A11.3.m4a' }
    ]
  },
  {
    id: 'companion',
    type: 'choice',
    title: 'DESEJA ACOMPANHANTE DURANTE SEU PARTO?',
    multiple: true,
    options: [{ texto: 'PARCEIRO (A)' }, { texto: 'MÃE' }, { texto: 'FILHO(A) MAIOR DE 18 ANOS' }, { texto: 'PAI DO BEBÊ' }, { texto: 'AMIGO (A)' }, { texto: 'NENHUM' }, { texto: 'OUTRO' }]
  },
  {
    id: 'procedures_informed',
    type: 'choice',
    title: 'DESEJAM SER INFORMADOS SOBRE OS PROCEDIMENTOS A SEREM REALIZADOS COM VOCÊ E COM O BEBÊ?',
    image: 'assets/P13 i13.png',
    width: '100%',
    options: [
      { texto: 'SIM' },
      { texto: 'NÃO' }
    ]
  },
  {
    id: 'doula',
    type: 'choice',
    title: 'TEREI UMA DOULA ME ACOMPANHANDO?',
    image: 'assets/P14 i14.png',
    options: [
      { texto: 'SIM' },
      { texto: 'NÃO' }
    ]
  },
  {
    id: 'photo',
    type: 'choice',
    title: 'DESEJA QUE SEU PARTO SEJA FOTOGRAFADO?',
    image: 'assets/P15 i 15.png',
    options: [
      { texto: 'SIM' },
      { texto: 'NÃO' }
    ]
  },
  {
    id: 'pain_relief',
    type: 'choice',
    title: 'DESEJA TER COMO OPÇÃO OS SEGUINTES MÉTODOS PARA ALÍVIO DA DOR?',
    multiple: true,
    options: [
      {
        texto: 'MASSAGENS (REALIZADA PELO ACOMPANHANTE OU PELA DOULA)',
        imagem: 'assets/P16 i161.png',
        width: '180px',
        left: '80px',
        top: '-10px'
      },
      {
        texto: 'TÉCNICAS DE RESPIRAÇÃO',
        imagem: 'assets/P16 i162.png'
      },
      {
        texto: 'MOVIMENTAR E/OU ANDAR CASO EU QUEIRA',
        imagem: 'assets/P17 i171.png'
      },
      {
        texto: 'EXERCÍCIO DE RELAXAMENTO COM BOLA',
        imagem: 'assets/P17 i172.png'
      },
      {
        texto: 'BANHO DE CHUVEIRO',
        imagem: 'assets/P18 i181.png'
      },
      {
        texto: 'ANALGESIA MEDICAMENTOSA POR ANESTESIA',
        imagem: 'assets/P18 i182.png'
      },
      {
        texto: 'OUTRO'
      }
    ]
  },

  {
    id: 'positions',
    type: 'choice',
    title: 'NO TRABALHO DE PARTO É RECOMENDADO QUE A MULHER MOVIMENTE-SE LIVREMENTE E A POSIÇÃO DEITADA DE COSTAS DEVE SER EVITADA.',
    subtitle: 'GOSTARIA DE TER LIBERDADE DE ESCOLHER DIVERSAS POSIÇÕES DURANTE O SEU TRABALHO DE PARTO?',
    options: [
      { texto: 'SIM' },
      { texto: 'NÃO' }
    ],
    image: 'assets/P19 i19.jpg'
  },
  {
    id: 'food',
    type: 'choice',
    title: 'DURANTE O TRABALHO DE PARTO, DESEJA INGERIR ALIMENTOS LEVES, TAIS COMO (ASSINALE UM OU MAIS ITENS):',
    multiple: true,
    options: [{ texto: 'ÁGUA' }, { texto: 'SUCO DE FRUTAS' }, { texto: 'GELATINA' }, { texto: 'CHÁS' }, { texto: 'OUTROS' }],
    image: 'assets/P20 i20.jpg'
  },
  {
    id: 'care',
    type: 'choice',
    title: 'DESEJA, SE POSSÍVEL, OS SEGUINTES CUIDADOS?(ASSINALE UM OU MAIS ITENS):',
    multiple: true,
    options: [
      { texto: 'AMBIENTE COM POUCA LUMINOSIDADE' },
      { texto: 'OUVIR MÚSICA DE MINHA ESCOLHA' },
      { texto: 'POUCO BARULHO E CONVERSA' },
      { texto: 'PRIVACIDADE' }
    ]
  },
  {
    id: 'interventions',
    type: 'choice',
    title: 'DESEJA QUE COMUNIQUEM A VOCÊ EAO SEU ACOMPANHANTE SOBRE QUALQUER INTERVENÇÃO NECESSÁRIA DURANTE O TRABALHO DE PARTO ? (SORO, OXIGÊNIO,  ROMPIMENTO DE BOLSA, OCITOCINA OU CESÁRIA)',
    options: [
      { texto: 'SIM' },
      { texto: 'NÃO' }
    ]
  },
  {
    id: 'positions_options',
    type: 'choice',
    title: 'DURANTE O PARTO, A MULHER PODE ESCOLHER A POSIÇÃO EM QUE SE SENTE MAIS CONFORTÁVEL. ',
    subtitle: 'GOSTARIA DE TER AS SEGUINTES OPÇÕES:',
    multiple: true,
    options: [
      {
        texto: 'POSIÇÃO DE CÓCORAS (AGACHADA)',
        imagem: 'assets/P23 i231.png'
      },
      {
        texto: 'POSIÇÃO DE CÓCORAS ASSISTIDA (COM APOIO OU BARRA DE PARTO)',
        imagem: 'assets/P23 i232.png'
      },
      {
        texto: 'POSIÇÃO EM QUATRO APOIOS (GENUPEITORAL)',
        imagem: 'assets/P24 i241.png'
      },
      {
        texto: 'POSIÇÃO AJOELHADA(VERTICAL APOIADA)',
        imagem: 'assets/P24 i242.png'
      },
      {
        texto: 'POSIÇÃO SENTADA',
        imagem: 'assets/P25 i251.png'
      },
      {
        texto: 'POSIÇÃO EM PÉ(ORTOSTÁTICA)',
        imagem: 'assets/P25 i252.png'
      },
      {
        texto: 'POSIÇÕES HORIZONTAIS OU SEMI-RECLINADAS',
        imagem: 'assets/p26 i261.png'
      },
      {
        texto: 'POSIÇÃO LATERAL(DECÚBITO LATERAL ESQUERDO)',
        imagem: 'assets/p26 i262.png'
      },
      {
        texto: 'POSIÇÃO SEMI-SENTADA (SEMI-FOWLER)',
        imagem: 'assets/P27 i271.png'
      },
      {
        texto: 'POSIÇÃO LITOTÔMICA(SUPINA, COM PERNAS ELEVADAS)',
        imagem: 'assets/P27 i272.png'
      }
    ]
  }, 
  {
    id: 'parto_agua',
    type: 'choice',
    title: 'GOSTARIA DE TENTAR O PARTO NA ÁGUA',
    options: [
      { texto: 'SIM' },
      { texto: 'NÃO' }
    ],
    image: 'assets/P28 i28.png',
    width: '90%'
  },
  {
    id: 'tempo_toque',
    type: 'choice',
    title: 'DESEJA QUE O TOQUE VAGINAL SEJA REALIZADO A CADA 4 HORAS, CONFORME PRECONIZA O MINISTÉRIO DA SAÚDE?',
    subtitle: 'SE NECESSÁRIO O TOQUE COM MAIS FREQUÊNCIA, DESEJA QUE COMUNIQUEM A VOCÊ E AO SEU ACOMPANHANTE?',
    options: [
      { texto: 'SIM' },
      { texto: 'NÃO' }
    ],
  },

  {
    id: 'episiotomy',
    type: 'choice',
    title: 'DESEJA QUE, NA HORA DO NASCIMENTO, SEJAM EVITADAS TANTO A MANIPULAÇÃO DO SEU PERÍNEO QUANTO A REALIZAÇÃO DE EPISIOTOMIA?',
    options: [
      { texto: 'SIM' },
      { texto: 'NÃO' }
    ],
    image: 'assets/P30 i30.png'
  },
  {
    id: 'cesarean_companion',
    type: 'choice',
    title: 'CASO SEJA NECESSÁRIA A CESÁRIA DESEJA A PRESENÇA DO SEU ACOMPANHANTE CONFORME LEI 11.108/2005?',
    options: [
      { texto: 'SIM' },
      { texto: 'NÃO' }
    ],
    image: 'assets/P31 i31.png'
  },
  {
    id: 'after_birth',
    type: 'choice',
    title: 'ASSIM QUE O BEBÊ NASCER, GOSTARIA DE:',
    multiple: true,
    options: [
      { texto: 'PEGAR MEU BEBÊ NO COLO IMEDIATAMENTE' },
      { texto: 'RECEBER MEU BEBÊ QUANDO EU ME SENTIR PRONTA' },
      { texto: 'INICIAR A AMAMENTAÇÃO O MAIS RÁPIDO POSSÍVEL E DENTRO DA PRIMEIRA HORA DE VIDA' },
      { texto: 'TER PELO MENOS UMA HORA CONTÍNUA COM MEU BEBÊ NO COLO, SE ESTIVER TUDO BEM' }
    ],
    image: 'assets/P32 i32.png'
  },
  {
    id: 'cord_cutting',
    type: 'choice',
    title: 'QUANTO AO CORTE DO CORDÃO UMBILICAL, DESEJO QUE SEJA FEITO EM TEMPO OPORTUNO PELO:',
    options: [{ texto: 'PROFISSIONAL' },
    { texto: 'POR MIM MESMA' },
    { texto: 'MARIDO / PARCEIRO(A) / ACOMPANHANTE / PAI DO BEBÊ' }
    ],
    image: 'assets/P33 i33.png'
  },
  {
    id: 'baby_care',
    type: 'choice',
    title: 'GOSTARIA QUE TODOS OS CUIDADOS COM MEU BEBÊ SEJAM REALIZADOS APÓS A 1ª HORA DE VIDA, CONFORME DIRETRIZES DA ORGANIZAÇÃO MUNDIAL DE SAÚDE E DO MINISTÉRIO DA SAÚDE?',
    options: [
      { texto: 'SIM' },
      { texto: 'NÃO' }
    ]
  },
  {
    id: 'diu',
    type: 'choice',
    title: 'DESEJA, SE POSSÍVEL, A INSERÇÃO DO DIU DE COBRE OU HORMONAL(CONFORME CRITÉRIOS CLÍNICOS) NO PÓS-PARTO IMEDIATO, PARA APROVEITAR A INTERNAÇÃO E GARANTIR SUA CONTRACEPÇÃO?',
    options: [
      { texto: 'SIM' },
      { texto: 'NÃO' }
    ],
    image: 'assets/P35 i35.png'
  }
];
