export const useCart = (price: number) => {
  const convertToString = () => {
    return price.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  return convertToString()
}
