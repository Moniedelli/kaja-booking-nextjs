export function numberToRupiah(amount) {
  // Replace this with the actual exchange rate

  // Format the amount with commas as thousands separators and remove decimal places if they are zero
  const formattedRupiah = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);

  // Convert the formattedRupiah back to a number
  const numberRupiah = Number(formattedRupiah.replace(/[^0-9.-]+/g, ''));

  return numberRupiah;
}
