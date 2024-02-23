<br/>
<br/>

<p align="middle" >
  <img width="100px;" src="public/images/calculator_icon.png"/>
</p>
<h2 align="middle">React 계산기</h2>
<p align="middle">계산기와 함께하는 Onboarding NEXTSTEP with React</p>
<p align="middle">
  <img src="https://img.shields.io/badge/version-1.0.0-blue?style=flat-square" alt="template version"/>
  <img src="https://img.shields.io/badge/language-html-red.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/language-css-blue.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/language-js-yellow.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square"/>
</p>

## 🔥 Projects!

<p align="middle">
  <img width="300" src="public/images/calculator_ui.png">
</p>

<p align="middle">
  <a href="https://next-step.github.io/js-calculator/">🖥️ 데모 링크</a>
</p>

## 🎯 기능 요구사항

- [ ] 2개의 숫자에 대해 덧셈이 가능하다.
- [ ] 2개의 숫자에 대해 뺄셈이 가능하다.
- [ ] 2개의 숫자에 대해 곱셈이 가능하다.
- [ ] 2개의 숫자에 대해 나눗셈이 가능하다.
- [ ] AC(All Clear)버튼을 누르면 0으로 초기화 한다.
- [ ] 숫자는 한번에 최대 3자리 수까지 입력 가능하다.
- [ ] 계산 결과를 표현할 때 소수점 이하는 버림한다.
- [ ] 연산의 결과값이 `Infinity`일 경우 `오류`라는 문자열을 보여준다. (아이폰 참고)

<br/>

## 📄 참고 사항

숫자 입력은 **클릭**으로만 가능하다.

<br/>

## 👏 Contributing

만약 미션 수행 중에 개선사항이 보인다면, 언제든 자유롭게 PR을 보내주세요.

<br/>

## 🐞 Bug Report

버그를 발견한다면, [Issues](https://github.com/next-step/react-calculator/issues)에 등록해주세요.

<br/>

## 📝 License

This project is [MIT](https://github.com/next-step/react-calculator/blob/master/LICENSE) licensed.

## 🏃🏻‍♂️ Records

### Day 0 (2/20)

- [x] Project setup (vite, vitest, typescript, testing-library)
- [x] 요구사항 채우고 점검하기

### Day 1 (2/21)

- [x] 유효성 검사 로직을 정규표현식으로 해결 하려다가 잘못된 시도임을 깨닫고 계획 백지화
- [x] 주어진 요구사항 부터 제대로 다시 이해하기 - Case Study, 유효성 검사 로직 구상


##  가정
 1. 입력 값은 오로지 숫자와 연산자다
 2. 그 외 입력이나 만들어낼 수 없는 입력은 신경쓰지 말자

## 유효성 검사 순서
- operators를 기준으로 split 한다
```js
  const operators = /[+\-*/]/
  const tokens = input.split(operators)
```

```js
if(연산자 없이 숫자만 존재하는 문자열)  // operators.test(input)
{
 // 세자리 이하 숫자인지 확인
 if(세자리 범위를 초과하는 숫자){
  // Error : 세자리 이하 숫자 요구
 }
}else{
  if(input === '+|-|*|/')  // 입력값이 단일 연산자와 일치하는 경우
  {
    // Error : 숫자 입력 요구
  }else if(연속해서 연산자가 발생하는 경우)
  {
    // Error : 숫자 입력 요구
  }else if(음의 정수 하나만 존재 하되, 유효하지 않는 숫자 범위) { // 아래 케이스 스터디 참고
    // Error: 세자리 이하 숫자 요구
  }
}
return true
```

- Case Study
  - split 했을때 길이가 모두 2인 경우
    - '60-' -> ['60', '']
    - '-60' -> ['', '60']
    - '60-60' -> ['60', '60']

  - 그 외에는 실패 -> 숫자입력 요구
    - '12--' -> ['12', '', '']
    - '-12-' -> ['', '12', '']


#### TO-DO

- [x] 주어진 입력에 대한 유효성 검증 로직 완성하기

- [x] 주어진 입력 값에 피연산자 유효성 검사(숫자 입력 테스트)
  - [x] 세자리 까지만 입력 가능 하게 로직 구성

- [x] 연산 기능 구현
  - [x] 수행 가능한 연산까지만 수행
  - [x] 나누기 소수점 예외 처리

- [ ] 마크다운 및 css 연결

- [ ] 입력 상태 정의 및 초기값 설정을 위한 관련 훅 정의 (`useCalculationState`)
  - [ ] 타입은 문자열인 상태 정의
  - [ ] 마우스 클릭 이벤트 바인딩
  - [ ] 유효성 검사 로직에 맞추어 상태 업데이트

### Step 2

- [ ] 리뷰사항 반영하기
- [ ] 계산결과에서 소수점 이하는 버린다
- [ ] 연산의 결과값이 Infinity일 경우 오류라는 문자열을 보여준다
- [ ] 리뷰 제출하기
