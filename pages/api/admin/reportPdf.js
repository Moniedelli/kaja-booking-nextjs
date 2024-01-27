// pages/report.js
import prisma from '@/app/libs/prismadb';
import ReportPage from '../components/ReportPDF';

export async function getServerSideProps() {
  const userData = await prisma.user.findMany();
  const tourData = await prisma.tour.findMany();
  const transactionData = await prisma.transaction.findMany();

  return {
    props: {
      userData,
      tourData,
      transactionData,
    },
  };
}

export default ReportPage;
