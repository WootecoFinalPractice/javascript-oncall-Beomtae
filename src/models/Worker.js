class Worker {
  static matchWorker(calendar, normal, holiday) {
    const workerCalendar = [...calendar];
    let normalCount = 0;
    let holidayCount = 0;
    workerCalendar.forEach((data, index) => {
      if (data === 0) {
        workerCalendar[index] = normal[normalCount % normal.length];
        normalCount += 1;
        if (index > 0 && workerCalendar[index] === workerCalendar[index - 1]) {
          const temp = workerCalendar[index];
          workerCalendar[index] = normal[normalCount % normal.length];
          normal[normalCount % normal.length] = temp;
        }
      } else {
        workerCalendar[index] = holiday[holidayCount % holiday.length];
        holidayCount += 1;
        if (index > 0 && workerCalendar[index] === workerCalendar[index - 1]) {
          const temp = workerCalendar[index];
          workerCalendar[index] = holiday[holidayCount % holiday.length];
          holiday[holidayCount % holiday.length] = temp;
        }
      }
    });
    return workerCalendar;
  }
}

export default Worker;
