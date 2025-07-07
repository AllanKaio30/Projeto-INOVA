import React from 'react';
import '../Paginas/Payments.css';

export default function UpcomingPayments({ onRegister }) {
  const payments = [
    { title: 'Anuidade - PI 0910083 0', sub: 'Algoritmo', value: 'R$ 800,00', due: '28/06/2023' },
    { title: 'Anuidade - PI 0910083 0', sub: 'Algoritmo', value: 'R$ 800,00', due: '28/06/2023' },
  ];

  return (
    <div className="upcoming-section">
      <div className="upcoming-header">
        <h2>📅 Próximos Pagamentos</h2>
      </div>

      {payments.map((p, i) => (
        <div className="upcoming-card" key={i}>
          <div>
            <h3>{p.title}</h3>
            <p>{p.sub}</p>
          </div>
          <div className="payment-right">
            <p><strong>{p.value}</strong></p>
            <span>Vencimento: {p.due}</span>
          </div>
        </div>
      ))}

      <button className="register-button" onClick={onRegister}>
        + Registrar Novo Pagamento
      </button>
    </div>
  );
}
