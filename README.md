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

## 🏃🏻‍♂️ Milestone (planning)

### Step 0

- [x] Project setup (vite, vitest, typescript, testing-library)
- [x] 요구사항 채우고 점검하기

### Step 1

#### requirements

- [ ] 최초 렌더링 시 0을 표시
- [ ] 숫자를 누르면 해당 숫자표시(한자리, 여러자리)
  - [ ] 숫자는 한번에 최대 3자리까지만 입력 가능
- [ ] 2개의 숫자에 대해 덧셈이 가능하다.
- [ ] 2개의 숫자에 대해 뺄셈이 가능하다.
- [ ] 2개의 숫자에 대해 곱셈이 가능하다.
- [ ] 2개의 숫자에 대해 나눗셈이 가능하다.
- [ ] AC를 누르면 숫자가 0으로 초기화 된다

#### TO-DO

- [ ] 주어진 입력 값에 피연산자 유효성 검사(숫자 입력 테스트)
  - [ ] 세자리 까지만 입력 가능 하게 로직 구성

- [ ] 연산시의 유효성 검사
  - [ ] 연산자/피연산자 입력의 종류를 별도로 정의
  - [ ] 연산 실행 로직 정의
    - [ ] 주어진 입력에 대해서 (oprator/operand/operator)를 유효한 형식으로 간주하고 유효성 검사를 진행한다.
  - [ ] 음수에 대해서 예외 처리

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
