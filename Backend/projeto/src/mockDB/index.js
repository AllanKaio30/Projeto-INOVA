let pis = [
    { id: 1, titulo: "Patente de Software", status: "pendente", protocolo: "BR20230001" },
    { id: 2, titulo: "Modelo de Utilidade", status: "aprovado", protocolo: "BR20230002" }
  ];
  
  module.exports = {
    // Métodos existentes
    findAll: () => Promise.resolve(pis),
    create: (data) => {
      const newPI = { id: pis.length + 1, ...data };
      pis.push(newPI);
      return Promise.resolve(newPI);
    },
  
    // NOVOS MÉTODOS PARA COMPLETAR O CRUD
    findById: (id) => {
      const pi = pis.find(p => p.id === parseInt(id));
      return Promise.resolve(pi || null);
    },
    delete: (id) => {
      const index = pis.findIndex(p => p.id === parseInt(id));
      if (index !== -1) {
        const deleted = pis.splice(index, 1);
        return Promise.resolve(deleted[0]);
      }
      return Promise.resolve(null);
    }
  };