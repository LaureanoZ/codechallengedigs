export const getDayOfWeek = (dateString: string): string => {
  const date = new Date(dateString);
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  return days[date.getUTCDay()];
};

export const getDayOfMonth = (dateString: string): number => {
  const date = new Date(dateString);
  return date.getUTCDate();
};
