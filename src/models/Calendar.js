import Holiday from './Holiday.js';

class Calendar {
  constructor(month) {
    this.month = month;
    this.day = [];
    this.calculateFinalDay(month);
  }

  calculateFinalDay(month) {
    if (Number(month) === 2) {
      this.day = Array(28).fill(0);
      return this.day;
    }
    if (Number(month % 2) === 0) {
      this.day = Array(30).fill(0);
      return this.day;
    }
    if (Number(month % 2) === 1) {
      this.day = Array(31).fill(0);
    }
    return this.day;
  }

  plusHoliday(day) {
    if (day === '월') {
      this.day.forEach((data, index) => {
        if ((index + 1) % 7 === 0 || (index + 1) % 7 === 6) {
          this.day[index] = 1;
        }
      });
    }
    if (day === '화') {
      this.day.forEach((data, index) => {
        if ((index + 1) % 7 === 6 || (index + 1) % 7 === 5) {
          this.day[index] = 1;
        }
      });
    }
    if (day === '수') {
      this.day.forEach((data, index) => {
        if ((index + 1) % 7 === 5 || (index + 1) % 7 === 4) {
          this.day[index] = 1;
        }
      });
    }
    if (day === '목') {
      this.day.forEach((data, index) => {
        if ((index + 1) % 7 === 4 || (index + 1) % 7 === 3) {
          this.day[index] = 1;
        }
      });
    }
    if (day === '금') {
      this.day.forEach((data, index) => {
        if ((index + 1) % 7 === 3 || (index + 1) % 7 === 2) {
          this.day[index] = 1;
        }
      });
    }
    if (day === '토') {
      this.day.forEach((data, index) => {
        if ((index + 1) % 7 === 2 || (index + 1) % 7 === 1) {
          this.day[index] = 1;
        }
      });
    }
    if (day === '일') {
      this.day.forEach((data, index) => {
        if ((index + 1) % 7 === 1 || (index + 1) % 7 === 0) {
          this.day[index] = 1;
        }
      });
    }
  }

  plusSpecialHoliday(month) {
    Object.keys(Holiday).forEach(data => {
      if (data === month && this.day[Number(Holiday[data]) - 1] === 0) {
        this.day[Number(Holiday[data]) - 1] = 2;
      }
    });
    if (month === '10') {
      console.log('실행');
      if (this.day[2] === 0) {
        this.day[2] = 2;
      }
      if (this.day[8] === 0) {
        this.day[8] = 2;
      }
    }
  }
}
export default Calendar;
