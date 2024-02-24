안녕하세요 민경님!

리뷰 잘 부탁드립니다. 😃

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

## 추가 기능 구현

계산기를 이리저리 만져보다가 추가로 구현하고 싶은 기능이 생겨서 추가로 구현해보았습니다.

- [x] = 버튼을 누르면 이전에 계산한 결과를 다시 계산한다. 

## 📄 컴포넌트 구조

합성 컴포넌트를 사용하여 Calculator 컴포넌트를 구성하였습니다.

```jsx
<Calculator>
  <Calculator.Display value={expression} />
  <Calculator.Reset onClick={reset} />
  <Calculator.Keypad onClick={handleInput} />
  <Calculator.Operators
    onClick={handleInput}
    onCalculate={calculateAndUpdateLastOperation}
  />
</Calculator>
```

<br/>

## 구현 중 고민한 부분

### 1. 비지니스 로직의 관리

요즘 디자인 패턴에 관심이 생겨서 Command 패턴을 사용하여 계산기를 구현하였습니다.
class에 기반한 Command 패턴을 사용하여 기본적인 사칙연산을 구현하였습니다.

고민이 들었던 부분은 엣지 케이스를 어떻게 처리할 것인가 였습니다. 
예를 들어 기본적인 사칙연산을 제외한
- `숫자는 한번에 최대 3자리 수까지 입력 가능하다.`
- `= 버튼을 누르면 이전에 계산한 결과를 다시 계산한다.`
같은 경우 이를 class 내부에서 모두 처리할 것인지, 아니면 외부에서 처리할 것인지 고민이 되었습니다.

현재 구현한 방식은 `useCalculator`라는 `custom hook`을 만들어서 비지니스 로직을 분리하였습니다.
이렇게 구현한 이유는 클래스 내부에서는 사칙연산만을 처리하고, 외부에서는 이를 조합하여
처리하는 것이 추후에 유지보수에 용이할 것이라고 생각했습니다.

이러한 경우 어떤 방식이 더 유지보수에 용이할지 궁금합니다!

### 2. 입력값에 대한 처리

현재 입력값을 처리하는 방식은 `useCalculator`에서 처리하고 있습니다.

다음과 같이 입력값을 처리하고 있습니다.

```tsx
const handleInput = (input: string) => {
  // 0으로 시작하는 숫자는 0을 제거하고 입력
  if (expression === "0" && !isOperator(input)) {
    setExpression(input);
    return;
  }

  // 음수 입력
  if (expression === "0" && input === "-") {
    setExpression(input);
    return;
  }

  // 연산자 이후 0을 입력하면 0을 제거하고 입력
  if (expression.slice(-1) === "0" && !isOperator(input)) {
    setExpression((prev) => prev.slice(0, -1) + input);
    return;
  }

  // 연산자가 연속으로 입력되는 경우를 방지 및 자리수 제한
  if (isValidExpressionAndUnderLimit(expression, input, 1000)) {
    setExpression((prev) => prev + input);
  } else {
    alert("입력은 3자리 숫자까지만 가능합니다.");
  }
};
```

이 함수가 모든 입력마다 호출이 되고 0에 대한 유효성 검사, 연산자 이후 0에 대한 유효성 검사, 연산자가 연속으로 입력되는 경우를 방지, 자리수 검증하는 로직을 모두 처리하고 있습니다.

요구사항 이나 사용자가 사용하는 측면에서 본다면 이러한 로직을 모두 검증하는게 맞다고 생각이 드는데 이 방식 보다 좀 더 좋은 방식이 있을까요?


