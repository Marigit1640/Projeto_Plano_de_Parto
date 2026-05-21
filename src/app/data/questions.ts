export const DEMO_QUESTIONS = [
  {
    id: 'intro',
    type: 'info',
    title: 'SAIBA O QUE É O PLANO DE PARTO',
    text: 'O Plano de parto é um jeito simples de você gestante conversar com a equipe de saúde. Nele, você pode dizer o que quer, o que espera e como prefere que seja o seu parto e o pós-parto. Assim, você participa das decisões sobre o seu corpo e do seu bebê, tendo suas escolhas respeitadas.',
    audioUrl: '/audio/saiba-mais.mp3',
    videoUrl: '/video/intro.mp4'
  },
  {
    id: 'why',
    type: 'info',
    title: 'POR QUE FAZER UM PLANO DE PARTO?',
    text: 'Fazer um plano de parto ajuda você a se sentir mais segura, informada e preparada para esse momento tão especial. Ele permite que você conheça melhor seus direitos... Essa prática é recomendada pela Organização Mundial da Saúde desde 1996.',
    audioUrl: '/audio/por-que.mp3'
  },
  {
    id: 'personal_info',
    type: 'form',
    title: 'INFORMAÇÕES PESSOAIS',
    fields: [
      { id: 'name', label: 'NOME', type: 'text' },
      { id: 'dob', label: 'DATA DE NASCIMENTO', type: 'date' },
      { id: 'cpf', label: 'CPF', type: 'text' },
      { id: 'phone', label: 'TELEFONE', type: 'tel' }
    ]
  },
  {
    id: 'baby_info',
    type: 'form',
    title: 'INFORMAÇÕES DO BEBÊ',
    fields: [
      { id: 'babyName', label: 'NOME', type: 'text' },
      { id: 'babySex', label: 'SEXO', type: 'text' }
    ]
  },
  {
    id: 'maternity',
    type: 'choice',
    title: 'DESEJA CONHECER A MATERNIDADE?',
    options: ['SIM', 'NÃO']
  },
  {
    id: 'companion',
    type: 'choice',
    title: 'DESEJA ACOMPANHANTE DURANTE SEU PARTO?',
    multiple: true,
    options: ['PARCEIRO (A)', 'MÃE', 'FILHO(A) MAIOR DE 18 ANOS', 'PAI DO BEBÊ', 'AMIGO (A)', 'NENHUM', 'OUTRO']
  },
  {
    id: 'procedures_informed',
    type: 'choice',
    title: 'DESEJAM SER INFORMADOS SOBRE OS PROCEDIMENTOS A SEREM REALIZADOS COM VOCÊ E COM O BEBÊ?',
    options: ['SIM', 'NÃO']
  },
  {
    id: 'doula',
    type: 'choice',
    title: 'TEREI UMA DOULA ME ACOMPANHANDO?',
    options: ['SIM', 'NÃO']
  },
  {
    id: 'photo',
    type: 'choice',
    title: 'DESEJA QUE SEU PARTO SEJA FOTOGRAFADO?',
    options: ['SIM', 'NÃO']
  },
  {
    id: 'pain_relief',
    type: 'choice',
    title: 'DESEJA TER COMO OPÇÃO OS SEGUINTES MÉTODOS PARA ALÍVIO DA DOR?',
    multiple: true,
    options: [
      'MASSAGENS (REALIZADA PELO ACOMPANHANTE OU PELA DOULA)',
      'TÉCNICAS DE RESPIRAÇÃO',
      'MOVIMENTAR E/OU ANDAR CASO EU QUEIRA',
      'EXERCÍCIO DE RELAXAMENTO COM BOLA',
      'BANHO DE CHUVEIRO',
      'ANALGESIA MEDICAMENTOSA POR ANESTESIA',
      'OUTRO'
    ]
  },
  {
    id: 'positions',
    type: 'choice',
    title: 'NO TRABALHO DE PARTO É RECOMENDADO QUE A MULHER MOVIMENTE-SE LIVREMENTE.',
    subtitle: 'GOSTARIA DE TER LIBERDADE DE ESCOLHER DIVERSAS POSIÇÕES DURANTE O SEU TRABALHO DE PARTO?',
    options: ['SIM', 'NÃO']
  },
  {
    id: 'positions_options',
    type: 'choice',
    title: 'DURANTE O PARTO, A MULHER PODE ESCOLHER A POSIÇÃO...',
    subtitle: 'GOSTARIA DE TER AS SEGUINTES OPÇÕES:',
    multiple: true,
    options: [
      'POSIÇÃO DE CÓCORAS',
      'POSIÇÃO DE CÓCORAS ASSISTIDA',
      'POSIÇÃO EM QUATRO APOIOS',
      'POSIÇÃO AJOELHADA',
      'POSIÇÃO SENTADA',
      'POSIÇÃO EM PÉ',
      'POSIÇÕES HORIZONTAIS OU SEMI-RECLINADAS',
      'POSIÇÃO LATERAL'
    ]
  },
  {
    id: 'food',
    type: 'choice',
    title: 'DURANTE O TRABALHO DE PARTO, DESEJA INGERIR ALIMENTOS LEVES?',
    multiple: true,
    options: ['ÁGUA', 'SUCO DE FRUTAS', 'GELATINA', 'CHÁS', 'OUTROS']
  },
  {
    id: 'care',
    type: 'choice',
    title: 'DESEJA, SE POSSÍVEL, OS SEGUINTES CUIDADOS?',
    multiple: true,
    options: [
      'AMBIENTE COM POUCA LUMINOSIDADE',
      'OUVIR MÚSICA DE MINHA ESCOLHA',
      'POUCO BARULHO E CONVERSA',
      'PRIVACIDADE'
    ]
  },
  {
    id: 'interventions',
    type: 'choice',
    title: 'DESEJA QUE COMUNIQUEM A VOCÊ E AO SEU ACOMPANHANTE SOBRE QUALQUER INTERVENÇÃO NECESSÁRIA?',
    options: ['SIM', 'NÃO']
  },
  {
    id: 'episiotomy',
    type: 'choice',
    title: 'DESEJA QUE, NA HORA DO NASCIMENTO, SEJAM EVITADAS TANTO A MANIPULAÇÃO DO SEU PERÍNEO QUANTO A REALIZAÇÃO DE EPISIOTOMIA?',
    options: ['SIM', 'NÃO']
  },
  {
    id: 'cesarean_companion',
    type: 'choice',
    title: 'CASO SEJA NECESSÁRIA A CESÁRIA DESEJA A PRESENÇA DO SEU ACOMPANHANTE?',
    options: ['SIM', 'NÃO']
  },
  {
    id: 'after_birth',
    type: 'choice',
    title: 'ASSIM QUE O BEBÊ NASCER, GOSTARIA DE:',
    multiple: true,
    options: [
      'PEGAR MEU BEBÊ NO COLO IMEDIATAMENTE',
      'RECEBER MEU BEBÊ QUANDO EU ME SENTIR PRONTA',
      'INICIAR A AMAMENTAÇÃO O MAIS RÁPIDO POSSÍVEL',
      'TER PELO MENOS UMA HORA CONTÍNUA COM MEU BEBÊ NO COLO'
    ]
  },
  {
    id: 'cord_cutting',
    type: 'choice',
    title: 'QUANTO AO CORTE DO CORDÃO UMBILICAL, DESEJO QUE SEJA FEITO EM TEMPO OPORTUNO PELO:',
    options: ['PROFISSIONAL', 'POR MIM MESMA', 'MARIDO / PARCEIRO(A) / ACOMPANHANTE']
  },
  {
    id: 'baby_care',
    type: 'choice',
    title: 'GOSTARIA QUE TODOS OS CUIDADOS COM MEU BEBÊ SEJAM REALIZADOS APÓS A 1ª HORA DE VIDA?',
    options: ['SIM', 'NÃO']
  },
  {
    id: 'diu',
    type: 'choice',
    title: 'DESEJA, SE POSSÍVEL, A INSERÇÃO DO DIU DE COBRE OU HORMONAL NO PÓS-PARTO IMEDIATO?',
    options: ['SIM', 'NÃO']
  }
];
