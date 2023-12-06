// pages/admin/dashboard.js (atau halaman lainnya)
'use client'
import React from 'react';
import InputForm from '../components/InputForm'
import PlaceCard from '../components/PlaceCard';

const Content = () => {
  return (
    <div>
      <InputForm />
      <PlaceCard />
    </div>
  );
};

export default Content;
