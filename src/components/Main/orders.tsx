import React from 'react';
import cprofile from '../../assets/clientprofile.jpg'
import Image from 'next/image';

type Order = {
  customer: string;
  orderNumber: number;
  amount: string;
  status: 'Delivered' | 'Cancelled' | 'Pending';
};

const orders: Order[] = [
  { customer: 'Wade Warren', orderNumber: 15478256, amount: '$124.00', status: 'Delivered' },
  { customer: 'Jane Cooper', orderNumber: 48965786, amount: '$365.02', status: 'Delivered' },
  { customer: 'Guy Hawkins', orderNumber: 78958215, amount: '$45.88', status: 'Cancelled' },
  { customer: 'Kristin Watson', orderNumber: 20965732, amount: '$65.00', status: 'Pending' },
  { customer: 'Cody Fisher', orderNumber: 95715620, amount: '$545.00', status: 'Delivered' },
  { customer: 'Savannah Nguyen', orderNumber: 78514568, amount: '$128.20', status: 'Delivered' },
];

const statusClass = (status: Order['status']) => {
  switch (status) {
    case 'Delivered':
      return 'tabledelivered';
    case 'Cancelled':
      return 'tablerject';
    case 'Pending':
      return 'tablerject';
    default:
      return '';
  }
};

const RecentOrders: React.FC = () => {
  return (
      <table className="">
        <thead>
          <tr>
            <th className="py-2">Customer</th>
            <th className="py-2">Order No.</th>
            <th className="py-2">Amount</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="border-b border-gray-700">
              <td className="py-2 gap-2 d-flex flex-row"><Image src={cprofile} height={25} width={25} alt='profile' className='clientimage'></Image>{order.customer}</td>
              <td className="py-2 ">{order.orderNumber}</td>
              <td className="py-2 ">{order.amount}</td>
              <td className={`py-2 ${statusClass(order.status)}`}>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
  );
};

export default RecentOrders;
