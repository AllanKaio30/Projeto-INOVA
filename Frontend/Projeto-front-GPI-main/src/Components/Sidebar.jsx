import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
    const navigate = useNavigate();

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
                    {/* CORREÇÃO AQUI: Adicionando o onClick para o botão Autores */}
                    <button onClick={() => navigate("/autores")}>
                        Autores
                    </button>
                    <button onClick={() => navigate("/pagamentos")}> {/* Ajustei para minúsculas 'pagamentos' para consistência, se sua rota for essa */}
                        Pagamentos
                    </button>
                    {/* Se você tiver uma rota para configurações, pode adicionar aqui também */}
                    <button onClick={() => navigate("/configuracoes")}>
                        Configurações
                    </button>
                </nav>
                <img src="imagens/Inova-Rodape.png" alt="Rodapé" width="150" />
            </div>
            {/* Parece que estas <br/> e <div> podem estar causando espaços desnecessários,
                se não forem intencionais, considere removê-los ou estilizá-los com CSS */}
            <div className="p-4 text-sm">
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        </div>
    );
}