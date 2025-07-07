import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import RegisterAuthorModal from '../Components/RegisterAuthorModal'; // Importe o modal de cadastro
import UpdateAuthorModal from '../Components/UpdateAuthorModal';     // Importe o modal de edição
import './Autor.css'; // Seu CSS para a página de autores

export default function Autor() {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const authorsPerPage = 4;

    const [showRegisterModal, setShowRegisterModal] = useState(false); // Estado para o modal de cadastro
    const [showUpdateModal, setShowUpdateModal] = useState(false);     // Estado para o modal de edição
    const [selectedAuthor, setSelectedAuthor] = useState(null);       // Estado para o autor selecionado para edição

    // Dados fictícios dos autores (adicionei mais alguns para testar a paginação)
    const [allAuthors, setAllAuthors] = useState([
        { id: '01', name: 'Fulano de Tal', email: 'email@email.com', institution: 'Universidade do Estado do Rio Grande do Norte', registeredPIs: 2, bond: 'Docente', department: 'Departamento de Informática', campus: 'Mossoró', university: 'UERN' },
        { id: '02', name: 'Beltrano da Silva', email: 'beltrano@email.com', institution: 'Universidade Federal Rural do Semi-Árido', registeredPIs: 3, bond: 'Discente Graduação', department: 'Engenharia Civil', campus: 'Caraúbas', university: 'UFERSA' },
        { id: '03', name: 'Cicrano Santos', email: 'cicrano@email.com', institution: 'Universidade Federal do Rio Grande do Norte', registeredPIs: 4, bond: 'Técnico', department: 'Biblioteca Central', campus: 'Natal', university: 'UFRN' },
        { id: '04', name: 'Maria Oliveira', email: 'maria@email.com', institution: 'Universidade do Estado do Rio Grande do Norte', registeredPIs: 2, bond: 'Discente Pós-Graduação', department: 'Ciência da Computação', campus: 'Mossoró', university: 'UERN' },
        { id: '05', name: 'João Batista', email: 'joao@email.com', institution: 'Instituto Federal do Rio Grande do Norte', registeredPIs: 1, bond: 'Docente', department: 'Engenharia de Software', campus: 'Macau', university: 'IFRN' },
        { id: '06', name: 'Ana Costa', email: 'ana@email.com', institution: 'Universidade do Estado do Rio Grande do Norte', registeredPIs: 5, bond: 'Discente Graduação', department: 'Pedagogia', campus: 'Pau dos Ferros', university: 'UERN' },
        { id: '07', name: 'Pedro Souza', email: 'pedro@email.com', institution: 'Universidade Federal Rural do Semi-Árido', registeredPIs: 3, bond: 'Técnico', department: 'Contabilidade', campus: 'Mossoró', university: 'UFERSA' },
        { id: '08', name: 'Mariana Lima', email: 'mariana@email.com', institution: 'Universidade Federal do Rio Grande do Norte', registeredPIs: 2, bond: 'Docente', department: 'Artes', campus: 'Natal', university: 'UFRN' },
        { id: '09', name: 'Lucas Pereira', email: 'lucas@email.com', institution: 'Universidade do Estado do Rio Grande do Norte', registeredPIs: 6, bond: 'Discente Pós-Graduação', department: 'Química', campus: 'Assu', university: 'UERN' },
        { id: '10', name: 'Carla Nunes', email: 'carla@email.com', institution: 'Instituto Federal do Rio Grande do Norte', registeredPIs: 1, bond: 'Docente', department: 'Mecatrônica', campus: 'Apodi', university: 'IFRN' },
    ]);

    // Lógica de filtro pela barra de busca
    const filteredAuthors = allAuthors.filter(author =>
        author.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.institution.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Lógica de paginação
    const indexOfLastAuthor = currentPage * authorsPerPage;
    const indexOfFirstAuthor = indexOfLastAuthor - authorsPerPage;
    const currentAuthors = filteredAuthors.slice(indexOfFirstAuthor, indexOfLastAuthor);
    const totalPages = Math.ceil(filteredAuthors.length / authorsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    // Funções para abrir/fechar modais
    const handleOpenRegisterModal = () => setShowRegisterModal(true);
    const handleCloseRegisterModal = () => setShowRegisterModal(false);

    const handleOpenUpdateModal = (author) => {
        setSelectedAuthor(author);
        setShowUpdateModal(true);
    };
    const handleCloseUpdateModal = () => setShowUpdateModal(false);

    // Funções de callback para quando o modal de cadastro/edição tiver sucesso
    const handleRegisterSuccess = (newAuthor) => {
        // Gera um novo ID simples (em um app real, o backend faria isso)
        const newId = (parseInt(allAuthors[allAuthors.length - 1].id) + 1).toString().padStart(2, '0');
        setAllAuthors([...allAuthors, { ...newAuthor, id: newId }]);
        // Opcional: Redirecionar para a primeira página ou ajustar a paginação
        setCurrentPage(1);
    };

    const handleUpdateSuccess = (updatedAuthor) => {
        setAllAuthors(allAuthors.map(author =>
            author.id === updatedAuthor.id ? updatedAuthor : author
        ));
    };


    return (
        <div className="authors-container">
            <Sidebar />
            <div className="authors-content">
                <h1 className="authors-title">Autores</h1>

                {/* Header com busca e botões */}
                <div className="authors-header">
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Buscar por nome, sobrenome, instituição, etc."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="header-buttons">
                        <button className="filter-button">
                            <span className="filter-icon">⚙️</span> Filtros
                        </button>
                        {/* Botão para abrir o modal de CADASTRO */}
                        <button className="add-author-button" onClick={handleOpenRegisterModal}>
                            <span className="plus-icon">+</span> Cadastrar Autor
                        </button>
                    </div>
                </div>

                {/* Tabela de Autores */}
                <div className="authors-table-wrapper">
                    <table className="authors-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>E-mail</th>
                                <th>Instituição</th>
                                <th>PIs Registradas</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentAuthors.map(author => (
                                <tr key={author.id}>
                                    <td>{author.id}</td>
                                    <td>{author.name}</td>
                                    <td>{author.email}</td>
                                    <td>{author.institution}</td>
                                    <td>
                                        <span className="registered-pis-badge">
                                            {author.registeredPIs}
                                        </span>
                                    </td>
                                    <td>
                                        {/* Botão para abrir o modal de EDIÇÃO */}
                                        <button className="edit-author-button" onClick={() => handleOpenUpdateModal(author)}>
                                            ✏️
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Paginação */}
                <div className="authors-pagination">
                    <span className="pagination-info">
                        Exibindo {indexOfFirstAuthor + 1} de {Math.min(indexOfLastAuthor, filteredAuthors.length)} de {filteredAuthors.length} autores
                    </span>
                    <div className="pagination-controls">
                        <button
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="pagination-button"
                        >
                            Anterior
                        </button>
                        {pageNumbers.map(number => (
                            <button
                                key={number}
                                onClick={() => paginate(number)}
                                className={`pagination-button ${currentPage === number ? 'active' : ''}`}
                            >
                                {number}
                            </button>
                        ))}
                        <button
                            onClick={() => paginate(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="pagination-button"
                        >
                            Próxima
                        </button>
                    </div>
                </div>
            </div>

            {/* Renderizar o modal de CADASTRO apenas se showRegisterModal for true */}
            {showRegisterModal && (
                <RegisterAuthorModal
                    onClose={handleCloseRegisterModal}
                    onRegisterSuccess={handleRegisterSuccess}
                />
            )}

            {/* Renderizar o modal de EDIÇÃO apenas se showUpdateModal for true e um autor estiver selecionado */}
            {showUpdateModal && selectedAuthor && (
                <UpdateAuthorModal
                    onClose={handleCloseUpdateModal}
                    author={selectedAuthor}
                    onUpdateSuccess={handleUpdateSuccess}
                />
            )}
        </div>
    );
}