import ms from "ms";

type TimeUnit = "SECONDS" | "MINUTES" | "HOURS" | "DAYS" | "MONTHS" | "YEARS";

class Time {
  public static getAge(birthdate: Date) {
    const currentDate = new Date();
    const birthYear = birthdate.getFullYear();
    const currentYear = currentDate.getFullYear();
    const birthMonth = birthdate.getMonth();
    const currentMonth = currentDate.getMonth();
    const birthday = birthdate.getDate();
    const today = currentDate.getDate();
    let age = currentYear - birthYear - 1;
    console.log(currentYear, birthYear);
    console.log(today, birthday);
    console.log(birthMonth, currentMonth);
    if (birthdate.getMonth() < currentDate.getMonth()) age++;
    if (birthMonth === currentMonth && today >= birthday) age++;
    console.log(age);
    return age;
  }

  public static isMinor(birthdate: Date) {
    const ageLimit = 18;

    return this.getAge(birthdate) < ageLimit;
  }

  public static dateFormat(date: Date) {
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);

    return `${year}-${month}-${day}`;
  }

  public static getNumbersOfDaysFromMonth(month: number) {
    const data = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    return data[month];
  }
}

export default Time;
