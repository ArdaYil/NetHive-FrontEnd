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

    if (birthdate.getMonth() < currentDate.getMonth()) age++;
    if (birthMonth === currentMonth && today >= birthday) age++;

    return age;
  }

  public static isMinor(birthdate: Date) {
    const ageLimit = 18;

    return this.getAge(birthdate) < ageLimit;
  }
}

export default Time;
