"use client"

import axios from 'axios';
import { useState, useEffect } from 'react';
import Loading from '@/app/components/Loading';
import ClientOnly from '@/app/components/ClientOnly';
import TransactionDetail from '../../components/DetailTransaction';

const DetailTourAdmin = ({ params: { id } }) => {
  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    const getTransactionDetail = async () => {
      try {
        const response = await axios.get(`/api/transaction/${id}`);
        setTransaction(response.data);
        console.log('Transaction Detail:', response.data);
      } catch (error) {
        console.error('Error fetching transaction details:', error);
      }
    };

    if (id) {
      getTransactionDetail();
    }
  }, [id]);

  return (
    <div>
      {transaction ? (
        <div>
          <TransactionDetail transaction={transaction} />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default DetailTourAdmin;
