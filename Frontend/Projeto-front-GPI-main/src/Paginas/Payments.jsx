import React, { useState } from 'react';
// Caminhos CORRIGIDOS para voltar uma pasta (..) e depois entrar em Components
import Sidebar from '../Components/Sidebar';
import PaymentCards from '../Components/PaymentCards';
import UpcomingPayments from '../Components/UpcomingPayments';
import PaymentTable from '../Components/PaymentTable';
import RegisterPaymentModal from '../Components/RegisterPaymentModal';
import UpdatePaymentModal from '../Components/UpdatePaymentModal';
import Calendar from '../Components/Calendar'; // NOVO: Componente Calendar
import PaymentList from '../Components/PaymentList'; // NOVO: Componente PaymentList

// Caminho CORRIGIDO para o CSS: se Payments.jsx está em src/Paginas, e Payments.css está em src/Paginas,
// o caminho deve ser relativo à própria pasta: './Payments.css'
import './Payments.css'; 

export default function Payments() {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [activeTab, setActiveTab] = useState('list'); // Estado para controlar a aba ativa: 'list' ou 'calendar'

  // Estado e dados para o calendário/lista de pagamentos
  const [calendarSelectedDate, setCalendarSelectedDate] = useState(new Date(2023, 5, 15)); 

  const allPayments = [
    { id: 1, description: 'Anuidade - PI 0910083 0', course: 'Algoritmo', dueDate: new Date(2023, 5, 3), amount: 800.00, status: 'Pago' },
    { id: 2, description: 'Anuidade - PI 0910083 0', course: 'Algoritmo', dueDate: new Date(2023, 5, 15), amount: 800.00, status: 'Atrasado' },
    { id: 3, description: 'Anuidade - PI 0910083 0', course: 'Algoritmo', dueDate: new Date(2023, 5, 28), amount: 800.00, status: 'Pendente' },
    { id: 4, description: 'Mensalidade - Inglês', course: 'Inglês Intermediário', dueDate: new Date(2023, 5, 10), amount: 150.00, status: 'Pago' },
    { id: 5, description: 'Anuidade - Marketing Digital', course: 'Marketing Online', dueDate: new Date(2023, 6, 5), amount: 600.00, status: 'Pendente' },
    { id: 6, description: 'Consultoria - Projeto X', course: 'Consultoria', dueDate: new Date(2023, 5, 15), amount: 1200.00, status: 'Pendente' },
    { id: 7, description: 'Parcela Carro', course: 'Financiamento', dueDate: new Date(2023, 5, 18), amount: 750.00, status: 'Pago' },
  ];

  const getPaymentsForCalendarMonth = (year, month) => {
    return allPayments.filter(payment =>
      payment.dueDate.getFullYear() === year &&
      payment.dueDate.getMonth() === month
    );
  };

  const currentMonthPayments = getPaymentsForCalendarMonth(
    calendarSelectedDate.getFullYear(),
    calendarSelectedDate.getMonth()
  );

  const handleOpenUpdateModal = (payment) => {
    setSelectedPayment(payment);
    setShowUpdateModal(true);
  };

  const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  return (
    <div className="payments-container">
      <Sidebar />

      <div className="content">
        <h1 className="title">Gestão de Pagamentos</h1>

        <PaymentCards />

        <header className="dashboard-header-payments">
          <button className="register-button-payments" onClick={() => setShowRegisterModal(true)}>
            <span className="plus-icon">+</span> Registrar Novo Pagamento
          </button>
        </header>

        <UpcomingPayments onRegister={() => setShowRegisterModal(true)} />

        <div className="tabs-container">
          <button
            className={activeTab === 'list' ? 'active-tab' : ''}
            onClick={() => setActiveTab('list')}
          >
            Lista de Pagamentos
          </button>
          <button
            className={activeTab === 'calendar' ? 'active-tab' : ''}
            onClick={() => setActiveTab('calendar')}
          >
            Calendário de Pagamentos
          </button>
        </div>

        {activeTab === 'list' ? (
          <PaymentTable onEdit={(payment) => handleOpenUpdateModal(payment)} />
        ) : (
          <div className="calendar-section">
            <div className="calendar-header">
              <span className="calendar-icon">📅</span>
              <h2>Calendário de Pagamentos</h2>
            </div>
            <div className="calendar-and-list-container">
              <Calendar
                selectedDate={calendarSelectedDate}
                setSelectedDate={setCalendarSelectedDate}
                payments={currentMonthPayments}
              />
              <PaymentList
                payments={currentMonthPayments}
                monthName={monthNames[calendarSelectedDate.getMonth()]}
                year={calendarSelectedDate.getFullYear()}
              />
            </div>
          </div>
        )}

        {showRegisterModal && (
          <RegisterPaymentModal onClose={() => setShowRegisterModal(false)} />
        )}
        {showUpdateModal && (
          <UpdatePaymentModal
            payment={selectedPayment}
            onClose={() => setShowUpdateModal(false)}
          />
        )}
      </div>
    </div>
  );
}