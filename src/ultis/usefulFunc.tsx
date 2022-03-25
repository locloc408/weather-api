export const covertToTime = (value: number) => {
  if (value) {
    const time = new Date(value);
    return time.getTime();
  }
};
export const formatHourly = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  const hours24 = date.getHours();
  const hours = hours24 > 12 ? hours24 % 12 : hours24;
  const amOrPm = hours24 > 12 ? "PM" : "AM";
  return `${hours} ${amOrPm}`;
};

export const celsiusToFahrenheit = (value: number) => (value * 9) / 5 + 32;

export const KenvinToC = (value: number) => {
  if (value) {
    return Math.round(value - 273);
  }
};
export const KenvinToF = (value: number) => {
  if (value) {
    return Math.round(1.8 * (value - 273) + 32);
  }
};

export const Days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const findDay = (day: number) => {
  return Days[day];
};
