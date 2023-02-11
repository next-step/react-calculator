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

- [x] 2개의 숫자에 대해 덧셈이 가능하다.
- [x] 2개의 숫자에 대해 뺄셈이 가능하다.
- [x] 2개의 숫자에 대해 곱셈이 가능하다.
- [x] 2개의 숫자에 대해 나눗셈이 가능하다.
- [ ] AC(All Clear)버튼을 누르면 0으로 초기화 한다.
- [ ] 숫자는 한번에 최대 3자리 수까지 입력 가능하다.
- [x] 계산 결과를 표현할 때 소수점 이하는 버림한다.
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
    - [x] 기호가 숫자보다 먼저 들어갈 경우 오류 발생
    - 중첩 if를 사용하는 것보다 같은 조건이 포함되어있더라도 빼는게 좋은지?
    - else문을 제거하는게 좋을지?
    - 벨리데이션을 함수 외부로 빼야하는지 빼야한다면 어떻게 빼는게 좋을지?
- [x] 지금까지 작업 리팩토링하기 -> 커스텀 훅으로 expression 관련 처리 옮기기
  - [x] writeExpression 함수를 만들어서 expression을 이용해 식이 만들어지는 로직 부분 옮기기
  - [x] resetExpression 함수를 만들어서 식이 초기화되는 로직 부분 옮기기
  - 커스텀 훅으로 로직을 옮겼지만 아직 존재하는 벨리데이션 처리들은 어떻게 해야할까? 추가로 옮겨줘야 할까? 옮겨줘야한다면 어떻게? 아니면 그대로 놔두어도 괜찮은가?
  - 이제 한가지만 하는 함수가 된 것인지...?
  - 확실히 리펙터링에 안정감이 생김 리펙터링을 진행해도 내 코드가 기존 프로젝트의 동작이 제대로 동작하지 않을지의 대한 걱정이 완전히 사라짐 ㄸ..

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
