import React, { useState } from "react";
import Sidebar from "../Components/Sidebar"; // ajuste o caminho conforme sua estrutura
import "./PI.css"; 
import "../Tela2.css"; // para garantir que o layout seja aplicado




import { useNavigate } from "react-router-dom";


function PropriedadesIntelectuais() {
  const [showEditarPI, setShowEditarPI] = useState(false);
  const toggleEditarPI = () => setShowEditarPI(!showEditarPI);
const navigate = useNavigate(); // 👈 define a função de navegação

  const irParaDetalhes = (id) => {
    
    navigate(`/detalhes/${id}`);
  };
  return (
    <div className="container">
      <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <img src="public/Sistema-Logo.png" alt="UERN inova" width="150" />
        <nav className="nav">
           <button onClick={() => navigate("/dashboard")}>
          Inicio
        </button>
        <button onClick={() => navigate("/propriedade-intelectual")}>
          Propriedade Intelectual
        </button>
<button onClick={() => navigate("/autores")}>
                        Autores
                    </button>         
                    <button onClick={() => navigate("/pagamentos")}>
        Pagamentos
      </button>
          <button>Configurações</button>
        </nav>
        <img src="imagens/Inova-Rodape.png" alt="Rodapé" width="150" />
      </div>  
      </div>

      {/* Conteúdo principal */}
      <div className="main">
        <div className="container-pi">
          <div className="conteudo-pi">
            <h2>Propriedades Intelectuais</h2>

            <div className="filtros-topo">
              <input type="text" placeholder="Buscar por nome, tipo, autor ou protocolo" />
              <button className="btn-filtro">🔍 Filtros</button>
<button
  className="btn-novo-pi" // Sua classe CSS para estilização
  onClick={() => navigate('/cadastro-pi')} // Faz o botão navegar para a rota /cadastro-pi
  style={{ // Estilos inline para visualização rápida, considere mover para Detalhe1.css
    backgroundColor: '#7E22CE', // Roxo
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '16px',
    // Adicione outros estilos se necessário para o seu layout específico
  }}
>
  ➕ Cadastrar Nova PI
</button>            </div>

            <table className="tabela-pi">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Tipo</th>
                  <th>Status</th>
                  <th>Autor</th>
                  <th>Data de Registro</th>
                  <th>Protocolo</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>Propriedade Intelectual</td>
                  <td>Patente</td>
                  <td><span className="badge green">Registrado</span></td>
                  <td>Fulano de Tal</td>
                  <td>02/02/2022</td>
                  <td>001124154</td>
                  <td><button onClick={() => irParaDetalhes(1)} className="btn-acao">👀</button></td>
                  <td><button onClick={toggleEditarPI} className="btn-acao">✏️</button></td>
                </tr>
                <tr>
                  <td>02</td>
                  <td>Propriedade Intelectual</td>
                  <td>Marca</td>
                  <td><span className="badge orange">Em análise</span></td>
                  <td>Fulano de Tal</td>
                  <td>02/02/2022</td>
                  <td>001124154</td>
                  <td><button onClick={() => irParaDetalhes(1)} className="btn-acao">👀</button></td>
<td><button onClick={toggleEditarPI} className="btn-acao">✏️</button></td>     
           </tr>
                <tr>
                  <td>03</td>
                  <td>Propriedade Intelectual</td>
                  <td>Registro de Software</td>
                  <td><span className="badge gray">Pendente</span></td>
                  <td>Fulano de Tal</td>
                  <td>02/02/2022</td>
                  <td>001124154</td>
                  <td><button onClick={() => irParaDetalhes(1)} className="btn-acao">👀</button></td>
                 <td><button onClick={toggleEditarPI} className="btn-acao">✏️</button></td>
                </tr>
              </tbody>
            </table>

            <p className="legenda">Exibindo 4 de 25 propriedades intelectuais</p>
            <div className="paginacao">
              <button>Anterior</button>
              <span className="pagina-atual">1</span>
              <button>Próxima</button>
            </div>
          </div>

          {/* Painel de Edição */}
          {showEditarPI && (
            <div className="editar-pi">
              <h3>Editar Propriedade Intelectual</h3>
              <form>
                <label>Título</label>
                <input type="text" placeholder="Título da PI" />
                <label>Status</label>
                <select>
                  <option>Registrado</option>
                  <option>Em análise</option>
                  <option>Pendente</option>
                </select>
                <label>Data de Entrada</label>
                <input type="date" />
                <label>Tipo</label>
                <select>
                  <option>PATENTE DE INVENÇÃO</option>
                  <option>MARCA</option>
                  <option>REGISTRO DE SOFTWARE</option>
                </select>
                <label>Termo de Cessão</label>
                <select>
                  <option>Sim</option>
                  <option>Não</option>
                </select>
                <label>Nome do Autor</label>
                <input type="text" />
                <label>Depositante</label>
                <input type="text" />
                <label>Nome do Parceiro</label>
                <input type="text" />
                <label>Titular</label>
                <input type="text" />
                <label>Responsável</label>
                <input type="text" />
                <label>E-mail</label>
                <input type="email" />
                <label>Telefone</label>
                <input type="text" />
                <label>Endereço</label>
                <input type="text" />
                <button type="submit">Salvar</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PropriedadesIntelectuais;
