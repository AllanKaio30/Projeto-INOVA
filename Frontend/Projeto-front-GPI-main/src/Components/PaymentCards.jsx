import React from 'react';
import '../Paginas/Payments.css';

export default function PaymentCards() {
  const cards = [
    { label: 'Pagamentos Pendentes', value: 3, amount: 'R$ 3.000,00', icon: '⏳', bg: '#ece7fc' },
    { label: 'Pagamentos Realizados', value: 17, amount: 'R$ 9.500,00', icon: '✅', bg: '#e9fbe6' },
    { label: 'Pagamentos Atrasados', value: 5, amount: 'R$ 950,00', icon: '⚠️', bg: '#ffe8e8' },
    { label: 'Total de Pagamentos', value: 25, amount: 'R$ 13.450,00', icon: '💰', bg: '#f7ecfc' },
  ];

  return (
    <div className="cards-wrapper">
      {cards.map((card, index) => (
        <div className="payment-card" key={index} style={{ backgroundColor: card.bg }}>
          <span className="icon">{card.icon}</span>
          <div>
            <h3>{card.label}</h3>
            <p>{card.value} — <strong>{card.amount}</strong></p>
          </div>
        </div>
      ))}
    </div>
  );
}
