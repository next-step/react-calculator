// 가정
// 1. 입력 값은 오로지 숫자와 연산자다
// 2. 그 외 입력이나 만들어낼 수 없는 입력은 신경쓰지 말자

// operators를 기준으로 split 한다
// const tokens =  input.split(operators)
// operators 포함여부 확인 -> [operatos.test(input)]
// 1. 비포함 -> 무조건 숫자일 것이므로 "세자리 이하 숫자인지"만 확인

// 2. 포함
// 2-1. 연산자 하나만 있는 문자열("+", "-" 등) 인지 확인 -> 숫자 입력 요구
// 2-2. 연산자가 여러개 들어가 있나 확인하기(split 했을때 ''가 여러개면 안된다) -> 숫자 입력 요구

// 2-3. split 했을때 길이가 모두 2인 경우
// 2-3-1. 하나라도 숫자면 일단 통과
// - '60-' -> ['60', '']
// - '-60' -> ['', '60']
// - '60-60' -> ['60', '60']

// 2-3-2 그 외에는 실패 -> 숫자입력 요구
// - '12--' -> ['12', '', '']
// - '-12-' -> ['', '12', '']

// 3. 피연산자 세자리 이하 여부 확인
// split한 배열에서 '' 필터하면 그게 모든 피연산자
// 각각을 숫자로 변환했을때 -999 ~ 999 사이인지 확인

const operators = /[+\-*/]/

export const THREE_DIGIT_LIMIT_ERROR = '숫자는 세자리 까지만!'

export const INPUT_NUMBER_FIRST_ERROR = '숫자를 먼저 입력하세요'

const isOnlyNumber = (input: string) => !operators.test(input)

const isSuccessiveOperators = (input: string) => {
  const splitResult = input.split(operators)
  return splitResult.some(
    (value, index) => value === '' && index > 0 && splitResult[index - 1] === '',
  )
}

const isInvalidNumberRange = (input: string) => {
  return parseInt(input) < -999 && parseInt(input) > 999
}

const isSingleNegativeNumber = (input: string) => {
  return input[0] === '-' && input.split(operators).length === 2
}

export const checkValidInput = (input: string) => {
  if (isOnlyNumber(input)) {
    if (isInvalidNumberRange(input)) {
      throw new Error(THREE_DIGIT_LIMIT_ERROR)
    }
  } else {
    if (input === '-' || input === '+' || input === '*' || input === '/') {
      throw new Error(INPUT_NUMBER_FIRST_ERROR)
    } else if (isSuccessiveOperators(input)) {
      throw new Error(INPUT_NUMBER_FIRST_ERROR)
    } else if (isSingleNegativeNumber(input) && isInvalidNumberRange(input)) {
      throw new Error(THREE_DIGIT_LIMIT_ERROR)
    }
  }
  return true
}
