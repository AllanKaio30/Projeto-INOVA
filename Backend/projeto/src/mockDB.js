const piMockData = [
    { id: 1, titulo: "Patente Mock 1", status: "pendente" },
    { id: 2, titulo: "Patente Mock 2", status: "aprovada" }
  ];
  
  module.exports = {
    findAll: () => Promise.resolve(piMockData),
    create: (data) => {
      const newPI = { id: piMockData.length + 1, ...data };
      piMockData.push(newPI);
      return Promise.resolve(newPI);
    }
  };