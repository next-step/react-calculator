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

## ⛳️ 고려한 사항

# 1. Object.freeze() vs as const

두 방식은 런타임 환경에서 객체의 불변성 여부에 차이를 보입니다. 어떤 것을 언제 써야하는지 1달 정도 고민해왔습니다. 이번에도 동일한 고민이 발생하여, 기회가 있을 때 추가적인 학습을 진행했습니다.

고민의 핵심은 `클라이언트 측에서 개발자 도구를 이용해 소프트코딩된 값을 변경해 어뷰징을 진행할 수 있는가?`였습니다. 이 부분을 알아야 어디까지 Object.freeze를 적용할 지, 알 수 있었기 때문입니다.

```ts
export const BUTTON = {
  DIGIT: {
    key: 'digit',
    // ...props
  },

  MODIFIER: {
    key: 'modifier',
    // ...props
  },

  OPERATION: {
    key: 'operation',
    // ...props
  },
} as const;
```

위의 예시 코드를 이용해 실제 코드에서 이용해 로컬, 배포 환경에서 테스트 해보았습니다.

> console.log(BUTTON)

```shell
VM97:1 Uncaught ReferenceError: BUTTON is not defined
    at <anonymous>:1:13
```

실제 배포 환경 뿐 아니라, localhost에서도 소프트코딩 된 변수를 참조할 수 없었습니다. 배포 및 로컬 환경의 코드는 번들링 되어, 익명 함수로 캡슐화 되었기 때문입니다.

---

|           | 번들링 된 코드 | 번들링 되지 않은 코드 |
| --------- | -------------- | --------------------- |
| 로컬 환경 | 변경 불가능    | 변경 가능             |
| 배포 환경 | 변경 불가능    | 변경 가능             |

---

따라서, 클라이언트는 애플리케이션에 소프트코딩 된 값을 개발자 도구를 이용해 변경할 수 없다고 결론을 짓고, as const를 채택하였습니다. 내부 코드 로직으로 변경될 수 있는 객체에 대해서만 Object.freeze를 적용하는 방향으로 결론을 지었는데, 해당 결론에 대한 피드백을 받고 싶습니다. :)

---

# 2. Source Map

위에서 언급했던 `클라이언트 측에서의 어뷰징`을 시도하다보니 source map에 대한 존재를 알게 되었습니다. source map은 번들링 된 코드를 디버깅할 때, 원본 코드로 매핑해주는 기능입니다. 다만, 이 기능을 이용해 애플리케이션의 취약점을 빠르게 찾아낼 수 있다는 것을 알게 되었습니다.

이를 방지하고자 vite 설정 파일에 다음과 같은 코드를 추가하였습니다.

```ts
export default defineConfig({
  build: {
    sourcemap: false,
  },
});
```

지금 가진 지식으로는, 클라이언트 측에 sourcemap을 제공하지 않는 것이 당연히 좋다고 생각합니다. 악의적 사용자에게 답안지를 알려줄 필요가 없다고 생각하기 때문입니다.
sourcemap을 제공하는 것이 좋은 경우가 있는지 궁금합니다! :)
