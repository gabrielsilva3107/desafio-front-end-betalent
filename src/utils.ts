export const formatPhone = (phone: string) => {
  const cleaned = phone.replace(/\D/g, "");
  return cleaned.replace(
    /^(\d{2})(\d{2})(\d{5})(\d{4})$/,
    "+$1 ($2) $3-$4"
  );
};
