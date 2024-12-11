import Parser from '../models/Parser.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class Controller {
  static async run() {
    try {
      const startMonth = await InputView.readMonth();
      const [month, day] = Parser.parseMonthAndDay(startMonth); // 입력값 월 과 일로 파싱
      const normalDayWorkingList = await InputView.readNormalDay();
      const holidayDayWorkingList = await InputView.readHoliday();
    } catch (error) {
      OutputView.print(error);
    }
  }
}

export default Controller;
