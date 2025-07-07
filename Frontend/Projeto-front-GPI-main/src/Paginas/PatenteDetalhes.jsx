import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import AdicionarRPIModal from '../Components/AdicionarRPIModal'; // Ajustado o caminho
import './Detalhe1.css';
import Sidebar from '../Components/Sidebar';

export default function PatenteDetalhes() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('geral'); // Começa com "Informações gerais"

  // AGORA É UM ESTADO (useState)
  const [rpiEvents, setRpiEvents] = useState([
    {
      date: '22/02/2011',
      version: '2.1',
      description: 'Notificação de Depósito de Pedido de Patente ou de Certificado de Adição de Invenção.',
    },
    {
      date: '28/02/2012',
      version: '3.1',
      description: 'Publicação do Pedido de Patente ou de Certificado de Adição de Invenção',
    },
    {
      date: '26/06/2012',
      version: '11.1',
      description: 'Arquivamento - Art.33 da LPI. Arquivado o pedido, uma vez que não foi requerido o pedido de exame no prazo previsto no Art. 33 da LPI.',
    },
  ]);

  // DADOS PARA O HISTÓRICO DE EVENTOS
  const historyEvents = [
    {
      date: '22/04/2009',
      title: 'Depósito do Pedido de Patente',
      description: 'Pedido de patente depositado no INPI com o protocolo PI 0910083 0',
      status: 'pending' // Adicionado um status para o ícone de cor (roxo)
    },
    {
      date: '22/02/2011',
      title: 'Notificação de Depósito',
      description: 'Notificação de Depósito de Pedido de Patente ou de Certificado de Adição de Invenção',
      status: 'orange' // Laranja
    },
    {
      date: '28/02/2012',
      title: 'Publicação do Pedido',
      description: 'Publicação do Pedido de Patente ou de Certificado de Adição de Invenção',
      status: 'green' // Verde
    },
    {
      date: '26/06/2012',
      title: 'Arquivamento',
      description: 'Arquivamento - Art.33 da LPI. Arquivado o pedido, uma vez que não foi requerido o pedido de exame no prazo previsto no Art. 33 da LPI.',
      status: 'red' // Vermelho
    },
  ];

  // FUNÇÃO PARA ADICIONAR NOVA RPI
  const handleAddRPI = (newRPI) => {
    setRpiEvents((prevEvents) => [...prevEvents, newRPI]);
  };

  // Funções de estilo - MOVIDAS PARA DENTRO DO COMPONENTE
  function buttonStyle(active = false) {
    return {
      padding: "10px",
      borderRadius: "5px",
      backgroundColor: active ? "white" : "#7E22CE",
      color: active ? "#6B21A8" : "white",
      fontWeight: active ? "bold" : "normal",
      border: "none",
      cursor: "pointer"
    };
  }

  function badgeStyle() {
    return {
      backgroundColor: "#FED7AA",
      color: "#C2410C",
      padding: "4px 8px",
      borderRadius: "5px",
      fontSize: "12px",
      marginRight: "10px"
    };
  }

  function editButtonStyle() {
    return {
      backgroundColor: "#F97316",
      color: "white",
      padding: "8px 12px",
      border: "none",
      borderRadius: "5px",
      fontWeight: "bold",
      cursor: "pointer"
    };
  }

  function tabStyle(active) {
    return {
      backgroundColor: active ? "white" : "#E5E7EB",
      border: active ? "1px solid #D1D5DB" : "none", // Borda só na aba ativa
      borderBottom: "none", // Remove a borda de baixo para o efeito de aba
      padding: "10px 16px",
      borderRadius: "5px 5px 0 0",
      marginRight: "10px",
      cursor: "pointer",
      fontWeight: active ? "bold" : "normal",
      color: active ? "#6B21A8" : "#333", // Cor do texto para abas ativas/inativas
      outline: "none", // Remove o contorno de foco padrão
    };
  }

  return (
    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        {/* Lembre-se de corrigir o caminho das imagens como discutimos:
            Opção 1: Mover para public/imagens e usar src="/imagens/Sistema-Logo.png"
            Opção 2: Importar no topo do arquivo (import SistemaLogo from '../assets/Sistema-Logo.png';) e usar src={SistemaLogo}
        */}
        <img src="imagens/Sistema-Logo.png" alt="UERN inova" width="150" />
        <nav className="nav">
          <button onClick={() => navigate("/dashboard")}>
            Inicio
          </button>
          <button onClick={() => navigate("/propriedade-intelectual")}>
            Propriedade Intelectual
          </button>
          <button>Autores</button>
          <button>Programas</button>
          <button>Configurações</button>
        </nav>
        <img src="imagens/Inova-Rodape.png" alt="Rodapé" width="150" />
      </div>

      {/* Main Content */}
      <main style={{ flex: 1, backgroundColor: "white", padding: "30px" }}> {/* Fundo branco conforme solicitado */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              onClick={() => navigate(-1)} // Volta para a tela anterior
              style={{
                background: "none",
                border: "none",
                fontSize: "18px",
                cursor: "pointer",
                padding: "8px",
                borderRadius: "5px",
                transition: "background 0.2s",
              }}
              onMouseEnter={e => (e.target.style.background = "#E5E7EB")}
              onMouseLeave={e => (e.target.style.background = "none")}
            >
              ←
            </button>
            <h2 style={{ fontSize: "20px", color: "#6B21A8" }}>Detalhes da Propriedade Intelectual</h2>
          </div>
          <div>
            <span style={badgeStyle()}>Arquivada</span>
            <button style={editButtonStyle()}>Editar PI</button>
          </div>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <strong>Protocolo:</strong> PI 0910083 0
        </div>

        {/* Tabs */}
        <div style={{ marginBottom: "30px" }}>
          <button style={tabStyle(activeTab === 'geral')} onClick={() => setActiveTab('geral')}>Informações gerais</button>
          <button style={tabStyle(activeTab === 'historico')} onClick={() => setActiveTab('historico')}>Histórico</button>
        </div>

        {/* CONTEÚDO RENDERIZADO CONDICIONALMENTE */}
        {activeTab === 'geral' && (
          <>
            {/* Card de Informações */}
            <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "10px", marginBottom: "30px" }}>
              <h3 style={{ color: "#6B21A8", marginBottom: "15px" }}>Informações principais</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px", fontSize: "14px" }}>
                <div>
                  <strong>Título:</strong><br />
                  Agulha com duplo bisel para lise de micronizias e tetangiectasias
                </div>
                <div>
                  <strong>Status:</strong><br />
                  <span style={badgeStyle()}>Arquivada</span>
                </div>
                <div>
                  <strong>Protocolo:</strong><br />
                  PI 0910083 0
                </div>
                <div>
                  <strong>Data de Entrega:</strong><br />
                  22/04/09
                </div>
                <div>
                  <strong>Tipo:</strong><br />
                  PATENTE DE INVENÇÃO
                </div>
                <div>
                  <strong>Termo de Cessão:</strong><br />
                  NÃO
                </div>
                <div>
                  <strong>SEI:</strong><br />
                  ---
                </div>
              </div>
            </div>

            <div className="secao-autores">
              <div className="cabecalho-autores">
                <span className="icone-autores">👤</span>
                <h3>Autores</h3>
              </div>
              <div className="lista-autores">
                <div className="autor-item">
                  <div className="autor-icon">👤</div>
                  <span className="autor-nome">Raimundo Rosendo de Oliveira</span>
                </div>
                {/* Você pode repetir o bloco acima para mais autores */}
              </div>
            </div>

            <div className="secao-depositantes">
              <div className="secao-titulo">
                <i className="icone-titulo">📄</i>
                <h3>Depositantes e Titulares</h3>
              </div>
              <div className="conteudo-depositantes">
                <div className="coluna">
                  <p className="titulo-coluna">Depositante</p>
                  <p className="valor-coluna">PARCEIRO</p>
                </div>
                <div className="coluna">
                  <p className="titulo-coluna">Parceiro</p>
                  <p className="valor-coluna">UFPE</p>
                </div>
                <div className="coluna">
                  <p className="titulo-coluna">Titular</p>
                  <p className="valor-coluna">UFPE/UERN</p>
                </div>
              </div>
            </div>

            {/* INFORMAÇÕES DE RPI */}
            <div className="patente-detalhes-container">
              <div className="header">
                <div className="title-section">
                  <div className="info-icon">
                    <i className="fas fa-info-circle"></i>
                  </div>
                  <h1>Informações de RPI</h1>
                </div>
                <button className="add-rpi-button" onClick={() => setIsModalOpen(true)}>
                  <i className="fas fa-plus"></i> Adicionar RPI
                </button>
              </div>

              <div className="rpi-events-grid">
                {rpiEvents.map((event, index) => (
                  <div key={index} className="rpi-card">
                    <div className="card-header">
                      <i className="fas fa-calendar-alt"></i>
                      <span>{event.date} - {event.version}</span>
                    </div>
                    <p>{event.description}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* FIM DAS INFORMAÇÕES DE RPI */}
          </>
        )}

        {activeTab === 'historico' && (
          <div className="historico-eventos-container">
            <div className="historico-header">
              <div className="historico-icon">
                <i className="fas fa-history"></i> {/* Ícone de relógio */}
              </div>
              <h1>Histórico de Eventos</h1>
            </div>

            <div className="timeline">
              {historyEvents.map((event, index) => (
                <div key={index} className="timeline-item">
                  <div className={`timeline-icon ${event.status}`}></div> {/* Círculo colorido */}
                  <div className="timeline-content">
                    <span className="timeline-date">{event.date}</span>
                    <h3 className="timeline-title">{event.title}</h3>
                    <p className="timeline-description">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* O MODAL É RENDERIZADO AQUI */}
      <AdicionarRPIModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddRPI={handleAddRPI}
      />
    </div>
  );
}