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
- [x] AC(All Clear)버튼을 누르면 0으로 초기화 한다.
- [x] 숫자는 한번에 최대 3자리 수까지 입력 가능하다.
- [x] 계산 결과를 표현할 때 소수점 이하는 버림한다.
- [x] 연산의 결과값이 `Infinity`일 경우 `오류`라는 문자열을 보여준다. (아이폰 참고)

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

## 생각해본것

관리해야할 State

- 현재 입력된 숫자
- 계산 결과
- 연산자

아래와 같이 바꿀수있을까? 혹은 바꾸는게 좋을까?

- 계산결과
- 입력된 숫자 및 연산자

UI 에 보여지는 상태만 관리하고 나머지는 ref로 관리하는게 좋은 것일까?
ref로 관리한 이유는 리렌더링이 되지 않아도 되는 값들이기 때문이다.

onClick 프로퍼티에서 () => handleClickNumber(1) 이런식으로 넘겨주는 방법이 적절할까?

-> 리렌더 될때마다 함수가 새로 생성되기 때문에 비효율적이다. 그러나 total 의 디펜던시가 있어서 항상 새로 생성해주긴해야한다.
