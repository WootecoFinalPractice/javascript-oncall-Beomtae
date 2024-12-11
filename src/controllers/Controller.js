import Calendar from '../models/Calendar.js';
import Parser from '../models/Parser.js';
import Worker from '../models/Worker.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import Day from '../models/Day.js';
import validateMonth from '../models/validators/validateMonth.js';

class Controller {
  static async run() {
    while (true) {
      try {
        const startMonth = await InputView.readMonth();
        const [month, day] = Parser.parseMonthAndDay(startMonth); // 입력값 월 과 일로 파싱
        validateMonth(month);
        const calendar = new Calendar(month);
        calendar.plusHoliday(day);
        calendar.plusSpecialHoliday(month);
        const normalDayWorkingList = await InputView.readNormalDay();
        const holidayDayWorkingList = await InputView.readHoliday();
        const parsedNormalList = Parser.parseList(normalDayWorkingList);
        const parsedHolidayList = Parser.parseList(holidayDayWorkingList);
        const workerCalendar = Worker.matchWorker(calendar.day, parsedNormalList, parsedHolidayList);
        console.log(calendar.day);
        console.log(workerCalendar);
        console.log(Day[day]);
        OutputView.printCalendar(month, Day[day], calendar.day, workerCalendar);
      } catch (error) {
        OutputView.print(error.message);
      }
    }
  }
}

export default Controller;

// 평일: 준팍,도밥,고니,수아,루루,글로,솔로스타,우코,슬링키,참새,도리
// 주말: 수아,루루,글로,솔로스타,우코,슬링키,참새,도리,준팍,도밥,고니
