import dayjs from "dayjs";

export const anHourAgoTime = () => {
  let currentDate = new Date();
  let timeInMilliSeconds = 60 * 60 * 1 * 1000;
  let aDayAgoTime = new Date(currentDate.getTime() - timeInMilliSeconds);

  return aDayAgoTime;
};

export const aDayAgoTime = () => {
  let currentDate = new Date();
  let timeInMilliSeconds = 60 * 60 * 24 * 1 * 1000;
  let aDayAgoTime = new Date(currentDate.getTime() - timeInMilliSeconds);

  return aDayAgoTime;
};

export const aWeekAgoTime = () => {
  let currentDate = new Date();
  let timeInMilliSeconds = 60 * 60 * 24 * 7 * 1000;
  let aWeekAgoTime = new Date(currentDate.getTime() - timeInMilliSeconds);

  return aWeekAgoTime;
};

export const aMonthAgoTime = () => {
  let currentDate = new Date();
  let timeInMilliSeconds = 60 * 60 * 24 * 31 * 1000;
  let aWeekAgoTime = new Date(currentDate.getTime() - timeInMilliSeconds);

  return aWeekAgoTime;
};

export const threeMonthsAgoTime = () => {
  let currentDate = new Date();
  let timeInMilliSeconds = 60 * 60 * 24 * 31 * 3 * 1000;
  let aWeekAgoTime = new Date(currentDate.getTime() - timeInMilliSeconds);

  return aWeekAgoTime;
};

export const currentDate = () => {
  return new Date();
};

export const isTimeDifferenceValid = (startTime, endTime) => {
  let difInMilliseconds = new Date(endTime) - new Date(startTime);

  let hours = difInMilliseconds / (60000 * 60);

  return hours > 24 ? true : false;
};

export const convertToUTCTime = time => {
  return new Date(time).getTime();
};

export const validateStartTime = time => {
  if (time) {
    return isNaN(new Date(parseInt(time)))
      ? anHourAgoTime()
      : new Date(parseInt(time));
  } else {
    return anHourAgoTime();
  }
};

export const validateEndTime = time => {
  if (time) {
    return isNaN(new Date(parseInt(time)))
      ? currentDate()
      : new Date(parseInt(time));
  } else {
    return currentDate();
  }
};

export const formatTimestamp = time => {
  let formattedDate = new Date(time).toLocaleDateString(`en-GB`, {
    timeStyle: "medium",
    dateStyle: "short"
  });

  return formattedDate ? formattedDate.replace(",", "  ") : time;
};

export const setTimestampFormat = time => {
  try {
    if (new Date(time)) {
      let formattedDate = dayjs(new Date(time)).format("YYYY-MM-DD HH:mm:ss");

      return formattedDate;
    } else {
      return null;
    }
  } catch (e) {
    return null;
  }
};

export const userTimezone = () => {
  //it returns GMT-0400 (EST)
  let timeZoneFormatted = new Date().toString().match(/([A-Z]+[+-][0-9]+)/)[1];

  return timeZoneFormatted;
};
