'use client'

import React from 'react';
import { Document, Page, Text } from 'react-pdf';

const ReportPDF = ({ userData, tourData, transactionData }) => {
  return (
    <div>
      <Document>
        <Page>
          <Text>User Data:</Text>
          <Text>{JSON.stringify(userData, null, 2)}</Text>

          <Text>Tour Data:</Text>
          <Text>{JSON.stringify(tourData, null, 2)}</Text>

          <Text>Transaction Data:</Text>
          <Text>{JSON.stringify(transactionData, null, 2)}</Text>
        </Page>
      </Document>
    </div>
  );
};

export default ReportPDF;
