// Fungsi mengubah angka binary menjadi RP


const PriceFormatter = (price: number) => {
  const newFormat =   Intl.NumberFormat("id", {
                  style: "currency",
                  currency: "IDR",
                  maximumSignificantDigits: 3
                }).format(price);

  return newFormat;
}

export default PriceFormatter