const piMockData = [
  {
    id: 1,  // ou UUID (recomendado)
    tipo_pi: "patente",  // valores fixos: "patente", "marca", "software"
    titulo: "Sistema de Gestão de PI",
    protocolo: "BR20230001",  // formato BR + ano + sequência
    cessao_assinada: true,  // campo renomeado para padronização
    depositante: "Empresa ABC",
    status: "pendente",  // valores fixos: "pendente", "concedida", "expirada", "negada"
    parceiro: null,  // campo renomeado (opcional, string ou null)
    data_entrada: "2023-01-15",  // ISO 8601 (YYYY-MM-DD)
    // --- Novos campos recomendados ---
    classificacao_ipc: "G06F16/9035",  // obrigatório para patentes
    resumo: "Descrição técnica resumida...",  // obrigatório
    titulares: [  // array de objetos (obrigatório)
      { nome: "Empresa ABC", pais: "BR", percentual: 100 }
    ],
    data_vencimento: "2043-01-15",  // calculada a partir da data_entrada
    documentos: ["termo_cessao.pdf", "relatorio_tecnico.pdf"]  // opcional
  }
];

module.exports = {
  findAll: () => Promise.resolve(piMockData),
  
  findById: (id) => {
    const pi = piMockData.find(p => p.id === parseInt(id));
    return Promise.resolve(pi || null);
  },

  create: (data) => {
    const newPI = {
      id: piMockData.length + 1,
      // Padronize os nomes dos campos:
      tipo_pi: data.tipo_pi || data.tipo_de_pi, // Compatibilidade com ambos
      titulo: data.titulo,
      protocolo: data.protocolo,
      cessao_assinada: data.cessao_assinada || data.termo_de_cessao || false,
      depositante: data.depositante,
      status: data.status || "pendente",
      parceiro: data.parceiro || data.nome_do_parceiro || null,
      data_entrada: data.data_entrada || new Date().toISOString().split('T')[0],
      
      // Adicione os novos campos:
      classificacao_ipc: data.classificacao_ipc || null,
      resumo: data.resumo || "",
      titulares: data.titulares || [],
      data_vencimento: data.data_vencimento || calcularVencimento(data.data_entrada),
      documentos: data.documentos || []
    };
    
    piMockData.push(newPI);
    return Promise.resolve(newPI);
  },

  update: (id, data) => {
    const index = piMockData.findIndex(p => p.id === parseInt(id));
    if (index !== -1) {
      piMockData[index] = {
        ...piMockData[index],
        ...data,
        id: piMockData[index].id // Mantém o ID original
      };
      return Promise.resolve(piMockData[index]);
    }
    return Promise.resolve(null);
  },

  delete: (id) => {
    const index = piMockData.findIndex(p => p.id === parseInt(id));
    if (index !== -1) {
      const deleted = piMockData.splice(index, 1);
      return Promise.resolve(deleted[0]);
    }
    return Promise.resolve(null);
  }
};

function calcularVencimento(dataEntrada) {
  if (!dataEntrada) return null;
  const ano = parseInt(dataEntrada.split('-')[0]);
  return `${ano + 20}${dataEntrada.slice(4)}`;
}