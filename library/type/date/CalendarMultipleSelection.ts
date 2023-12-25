// Tạo ra lịch theo tháng năm bất kì
// Lấy các ngày được chọn
interface SelectedDate {
  year: number;
  month: number;
  day: number;
}

export class Calendar {
  private currentDate: Date;
  private selectedDates: SelectedDate[] = [];

  constructor() {
    this.currentDate = new Date();
  }

  selectDate(date: SelectedDate): void {
    this.selectedDates.push(date);
  }

  isDateSelected(year: number, month: number, day: number): boolean {
    return this.selectedDates.some(
      (selectedDate) =>
        selectedDate.year === year &&
        selectedDate.month === month &&
        selectedDate.day === day
    );
  }

  isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  getSelectedDates(): SelectedDate[] {
    return this.selectedDates;
  }

  getDatesInRange(startDate: SelectedDate, endDate: SelectedDate): SelectedDate[] {
    const datesInRange: SelectedDate[] = [];

    // Sắp xếp ngày bắt đầu và ngày kết thúc theo thứ tự tăng dần
    const startTimestamp = new Date(startDate.year, startDate.month, startDate.day).getTime();
    const endTimestamp = new Date(endDate.year, endDate.month, endDate.day).getTime();

    const [start, end] = startTimestamp < endTimestamp ? [startTimestamp, endTimestamp] : [endTimestamp, startTimestamp];

    // Lặp qua tất cả các ngày trong khoảng và thêm vào mảng
    for (let timestamp = start; timestamp <= end; timestamp += 24 * 60 * 60 * 1000) {
      const currentDay = new Date(timestamp);
      datesInRange.push({
        year: currentDay.getFullYear(),
        month: currentDay.getMonth(),
        day: currentDay.getDate(),
      });
    }

    return datesInRange;
  }


  displaySelectableCalendar(month: number, year: number): void {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    console.log("In File: CalendarMultipleSelection.ts, Line: 42",daysInMonth);
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
      const isSelected = this.isDateSelected(year, month, day);
      if (isSelected) {
        process.stdout.write("\x1b[42m"); // Set background color to green
        this.selectDate({ year, month, day });
      }
      process.stdout.write(this.formatDay(currentDay));

      if (isSelected) {
        process.stdout.write("\x1b[0m"); // Reset background color
      }

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
calendar.selectDate({ year: 2023, month: 0, day: 28 });
calendar.selectDate({ year: 2023, month: 2, day: 3 });
const selectedDates = calendar.getSelectedDates();
console.log('Selected Dates:', selectedDates);

const startDate: SelectedDate = selectedDates[0];
const endDate: SelectedDate = selectedDates[selectedDates.length - 1];

const datesInRange = calendar.getDatesInRange(startDate, endDate);
console.log('Dates in Range:', datesInRange);