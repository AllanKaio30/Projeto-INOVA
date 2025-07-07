import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Tela2.css';
import { Link } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login"); // Redireciona para a tela Login
  };

  return (
    <div className="container">
      {/* Sidebar */}
<div className="sidebar">
        <img src="imagens/Sistema-Logo.png" alt="UERN inova" width="150" />
        <nav className="nav">
           <button onClick={() => navigate("/dashboard")}>
          Inicio
        </button>
        <button onClick={() => navigate("/propriedade-intelectual")}>
          Propriedade Intelectual
        </button>
<button onClick={() => navigate("/autores")}>
                        Autores
                    </button><button onClick={() => navigate("/pagamentos")}>
        Pagamentos
      </button>
          <button>Configurações</button>
        </nav>
        <img src="imagens/Inova-Rodape.png" alt="Rodapé" width="150" />
      </div>       

      {/* Conteúdo principal */}
      <div className="main">
        <header className="topbar">
          <h2>Processos de Registro</h2>
        </header>

        <div className="cards">
          <div className="card ativo">Ativos<br /><strong>70</strong></div>
          <div className="card processo">Em processo<br /><strong>50</strong></div>
          <div className="card pendente">Pendentes<br /><strong>0</strong></div>
          <div className="card total">Total<br /><strong>120</strong></div>
        </div>

        <div className="graficos">
          <div className="grafico">Indicadores<br /><div className="grafico-pizza"></div></div>
          <div className="grafico">Indicadores<br /><div className="grafico-barra"></div></div>
        </div>
      </div>

      {/* Painel lateral direito */}
      <div className="painel-direito">
        <div className="usuario">
          <div><span>👤</span> Administrador</div>
          <small>email@email.com</small>
          <button className="sair" onClick={handleLogout}>Sair</button>
        </div>

        <div className="notificacoes">
          <div className="topo-notificacoes">
            <span>🔔</span>
            <h4>Notificações</h4><br />
          </div>
          <br /> <a href="#">Marcar todas como lidas</a>
          <br />
          <ul>
            <li className="nova">
              <strong>Prazo se aproximando</strong><br />
              O prazo para submissão do documento do PI 123456 vence em 3 dias.<br />
              <span>⏱️ Há 2 horas</span>
            </li>
            <li className="nova-pi">
              <strong>Nova PI cadastrada</strong><br />
              A patente Sistema de Reconhecimento Facial foi cadastrada com sucesso.<br />
              <span>🕒 Há 6 horas</span>
            </li>
            <li className="status">
              <strong>Status atualizado</strong><br />
              A PI cadastrada teve seu status alterado para "Em análise".<br />
              <span>📅 Há 1 dia</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
