const autoresMock = [
  {
    id: 1,
    nome: "Autor Exemplo",
    pais: "BR",
    tipo: "pessoa_fisica",
    documento: "123.456.789-00",
    percentual: 100,
    contato: "autor@exemplo.com"
  },
  {
    id: 102, // ID correspondente ao segundo titular da PI
    nome: "Titular Buscado no Banco",
    pais: "US",
    tipo: "pessoa_juridica"
  }
];

module.exports = {
  // Operações CRUD completas
  findAll: () => Promise.resolve(autoresMock),
  
  findById: (id) => 
    Promise.resolve(autoresMock.find(a => a.id === parseInt(id)) || null),
  
  create: (autor) => {
    const newId = autoresMock.length > 0 
      ? Math.max(...autoresMock.map(a => a.id)) + 1 
      : 1;
    const novoAutor = { id: newId, ...autor };
    autoresMock.push(novoAutor);
    return Promise.resolve(novoAutor);
  },
  
  update: (id, data) => {
    const index = autoresMock.findIndex(a => a.id === parseInt(id));
    if (index !== -1) {
      autoresMock[index] = { ...autoresMock[index], ...data };
      return Promise.resolve(autoresMock[index]);
    }
    return Promise.resolve(null);
  },
  
  delete: (id) => {
    const index = autoresMock.findIndex(a => a.id === parseInt(id));
    if (index !== -1) {
      return Promise.resolve(autoresMock.splice(index, 1)[0]);
    }
    return Promise.resolve(null);
  }
};

