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

## TODO LIST

- [x] 버튼 컴포넌트 구현하기
  - 해당 프로젝트에서 버튼 컴포넌트는 어떤 것이 필요할까? -> onClick, value
  - value
    - [x] 입력 받은 value가 화면상에 잘 출력되는가?
      - ?: 계산기의 숫자 버튼 같은 간단한 컴포넌트도 style이 제대로 적용되었는지 테스트 코드가 필요한지 궁금합니다.
  - onClick
    - [x] 버튼을 클릭할 때 버튼의 value가 h1에 입력되는가?
- [x] "=" 버튼을 클릭하면 계산하기
  - [x] 사칙연산 계산
    - 사칙연산을 관리하는 함수가 있으면 좋을 것 같다.
    - 개발자 도구로 조작했을 때 발생하는 오류는 어떻게 테스트 코드로 잡아내는게 좋을지?
    - alert 테스트는 어떻게 하는게 베스트인지?
    - [x] 더하기
    - [x] 빼기
    - [x] 나누기
    - [x] 곱하기
    - [x] 연속으로 계산하기

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
