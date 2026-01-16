import React from 'react';
import { OrderStatus } from '../../types';

interface OrderStatusTrackerProps {
  currentStatus: OrderStatus;
}

const OrderStatusTracker: React.FC<OrderStatusTrackerProps> = ({ currentStatus }) => {
  const statuses: { status: OrderStatus; label: string; icon: string }[] = [
    { status: OrderStatus.RECEIVED, label: 'Pedido Recebido', icon: 'fa-solid fa-receipt' },
    { status: OrderStatus.IN_PRODUCTION, label: 'Em Produção', icon: 'fa-solid fa-fire-burner' },
    { status: OrderStatus.OUT_FOR_DELIVERY, label: 'Saiu para Entrega', icon: 'fa-solid fa-motorcycle' },
    { status: OrderStatus.DELIVERED, label: 'Pedido Entregue', icon: 'fa-solid fa-flag-checkered' },
  ];

  const currentStatusIndex = statuses.findIndex(s => s.status === currentStatus);

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <div className="text-green-400 text-5xl mb-4">
          <i className="fa-solid fa-circle-check"></i>
        </div>
        <h2 className="brand-font text-2xl font-bold uppercase text-white">Pagamento Aprovado!</h2>
        <p className="text-gray-400 text-sm">Seu pedido já está sendo preparado.</p>
      </div>

      <div className="flex flex-col items-start space-y-2">
        {statuses.map((item, index) => {
          const isCompleted = index < currentStatusIndex;
          const isActive = index === currentStatusIndex;

          return (
            <div key={item.status} className="flex items-center gap-4 w-full">
              <div className={`relative flex flex-col items-center`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10
                  ${isActive ? 'bg-chama-orange animate-pulse' : isCompleted ? 'bg-green-500' : 'bg-gray-600'}
                `}>
                  <i className={`${item.icon} text-white text-sm`}></i>
                </div>
                {index < statuses.length - 1 && (
                  <div className={`absolute top-8 h-12 w-0.5 ${isCompleted ? 'bg-green-500' : 'bg-gray-600'}`}></div>
                )}
              </div>
              <div className={`font-bold ${isActive ? 'text-chama-orange' : isCompleted ? 'text-green-400' : 'text-gray-500'}`}>
                {item.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderStatusTracker;