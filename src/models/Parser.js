class Parser {
  static parseMonthAndDay(startMonth) {
    const result = startMonth.split(',');
    const month = result[0];
    const day = result[1];
    return [month, day];
  }
}

export default Parser;
