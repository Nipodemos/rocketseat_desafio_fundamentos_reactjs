const formatValue = (value: number): string => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  const formatted = formatter.format(value);
  return formatted;
}; // TODO

export default formatValue;
