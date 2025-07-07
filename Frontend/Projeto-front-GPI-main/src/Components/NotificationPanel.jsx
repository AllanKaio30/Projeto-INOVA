import React from 'react';

export default function NotificationPanel() {
  return (
    <div className="w-80 bg-white p-4 shadow-md border-l border-gray-200">
      <div className="mb-4">
        <p className="font-bold">Administrador</p>
        <p className="text-sm text-gray-500">email@email.com</p>
        <button className="text-red-500 mt-2 text-sm">Sair</button>
      </div>

      <hr className="my-4" />

      <div className="flex justify-between items-center mb-2">
        <p className="font-bold text-sm">Notificações</p>
        <button className="text-purple-600 text-xs">Marcar todas como lidas</button>
      </div>

      <div className="space-y-4 text-sm">
        <div className="border-l-4 border-red-400 pl-2">
          <p className="font-semibold">Prazo se aproximando</p>
          <p className="text-gray-500">Submissão do PI 123456 vence em 3 dias.</p>
          <span className="text-xs text-gray-400">⏱️ Há 2 horas</span>
        </div>

        <div className="border-l-4 border-green-400 pl-2">
          <p className="font-semibold">Nova PI cadastrada</p>
          <p className="text-gray-500">Sistema de Reconhecimento Facial foi cadastrado com sucesso.</p>
          <span className="text-xs text-gray-400">✅ Há 5 horas</span>
        </div>

        <div className="border-l-4 border-blue-400 pl-2">
          <p className="font-semibold">Status atualizado</p>
          <p className="text-gray-500">Seu status alterado para "Em análise".</p>
          <span className="text-xs text-gray-400">📅 Há 1 dia</span>
        </div>
      </div>
    </div>
  );
}
