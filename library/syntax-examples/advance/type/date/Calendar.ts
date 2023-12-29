// Tạo ra lịch theo tháng năm bất kì
export class Calendar {
  private currentDate: Date;

  constructor() {
    this.currentDate = new Date();
  }

  isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  displayCalendar(month: number, year: number): void {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();

    console.log(`\nCalendar for ${this.getMonthName(month)} ${year}\n`);

    // Display day names
    console.log("Sun Mon Tue Wed Thu Fri Sat");

    // Display leading spaces
    for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
      process.stdout.write("    ");
    }

    // Display days
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDay = new Date(year, month, day);
      process.stdout.write(this.formatDay(currentDay));

      // New line after Saturday
      if (currentDay.getDay() === 6) {
        console.log();
      }
    }

    console.log(); // Separate calendar from additional information
  }

  getMonthName(month: number): string {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthNames[month];
  }

  private formatDay(day: Date): string {
    const isCurrentMonth = day.getMonth() === this.currentDate.getMonth();
    const isToday =
      isCurrentMonth && day.getDate() === this.currentDate.getDate();
    return `${isToday ? "[" : ""}${day.getDate().toString().padStart(2, "0")}${
      isToday ? "]" : ""
    } `;
  }
}

// Example usage:
const calendar = new Calendar();
const yearToCheck = 2023;
const monthToCheck = 12;
if (calendar.isLeapYear(yearToCheck)) {
  console.log(`${yearToCheck} is a leap year.`);
  calendar.displayCalendar(monthToCheck-1, yearToCheck); // Display calendar for February of a leap year
} else {
  console.log(`${yearToCheck} is not a leap year.`);
  calendar.displayCalendar(monthToCheck-1, yearToCheck); // Display calendar for February of a non-leap year
}
