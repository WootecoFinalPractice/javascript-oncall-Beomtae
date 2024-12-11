import { Console } from '@woowacourse/mission-utils';
import Day from '../models/Day.js';

class OutputView {
  static print(input) {
    Console.print(input);
  }

  static printCalendar(month, day, calendar, workerCalendar) {
    calendar.forEach((data, index) => {
      Console.print(`${month}월 ${index + 1}일 ${this.getKeyByValue(Day, (day + index) % 7)}${this.printHoliday(calendar, index)} ${workerCalendar[index]}`);
    });
  }

  static getKeyByValue(obj, value) {
    return Object.keys(obj).find(key => obj[key] === value);
  }

  static printHoliday(calendar, index) {
    const holi = ['', '(휴일)'];
    if (calendar[index] === 2) {
      const result = holi[1];
      return result;
    }
    const result = holi[0];
    return result;
  }
}

export default OutputView;
