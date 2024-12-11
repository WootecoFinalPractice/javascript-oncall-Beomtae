const validateMonth = month => {
  if (month < 1 || month > 12) {
    throw new Error('[ERROR] 올바르지 않은 월 입력입니다.');
  }
};
export default validateMonth;
