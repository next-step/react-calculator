안녕하세요!
이번 TDD, 클린 코드 with React 2기 수강생 김성찬입니다!

react-testing-library와 jest가 익숙하지 않은 채로 테스트 코드를 작성하면서 진행해보니 시간이 오래걸리더라구요 ㅠㅠ..

시간은 오래걸렸지만 재미있게 열심히 작업했습니다!
리뷰 잘 부탁드립니다!

<br/>

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

## 🤚 질문있습니다!

### style에 대한 테스트 코드가 필요할까요?

- 해당 프로젝트에서는 style에 대한 테스트 코드를 작성하지 않았는데 만약 state에 따라 background-color가 변하는 동작이 있을 경우에는 테스트 코드를 작성해도 괜찮지 않을까 생각하게 되었고 리뷰어께선 어떤 의견이 있으신지 궁금해서 질문 남깁니다!

### alert에 대한 테스트 코드는 어떻게 작성하는게 좋을까요?

- jest에서 alert에 대한 테스트 코드를 작성하는 방법을 찾아보니 `window.alert = jest.fn()` 같이 작성하여 jest.fn()을 임시로 window.alert에 할당하고 window.alert가 몇번 호출되었는지로 테스트 진행하더라구요.

- 그런데 위 방법으로 테스트를 진행하게 되면 alert에 들어가 있는 문구를 확인할 수 있는 방법이 없었습니다.

- 혹시 위 방법을 사용했을 때 문구를 확인할 수 있는 방법이 있는지 궁금합니다! 또는 더 좋은 방법이 있을지 궁금합니다! 계속 찾아봤는데...안보이더라구요

### else와 중첩 if 사용에 대하여...

```javascript
// 변경 전 if...else
if (isNaN(buttonValue)) {
  operation.push(buttonValue);
  counter = counter + 1;
} else {
  number[counter] = number[counter] ? number[counter] + buttonValue : buttonValue;
}

// 변경 후 if, if
if (isNaN(buttonValue)) {
  operation.push(buttonValue);
  counter = counter + 1;
}

// ...

if (!isNaN(buttonValue)) {
  number[counter] = number[counter] ? number[counter] + buttonValue : buttonValue;
}
```

- 많은 클론 코딩 관련 글을 찾아보면 else의 사용을 지양하라는 글을 많이 발견합니다.
- 저 또한 그래서 else를 사용하지 않으려고 위와 같이 수정을 진행하였습니다.
- 코드를 변경하고 보니 else를 사용함으로써 반대되는 케이스를 잡는 것이 의도를 전달하는데 더 유리해 보였습니다.
- 리뷰어께서는 else의 사용에 대해서 어떤 의견이 있으신지 궁금합니다!

<br/>

- 추가로 중첩 if에 대해서도 질문이 있습니다!

```javascript
// 변경 전
if (isNaN(buttonValue)) {
  if (!number[counter]) {
    alert(INPUT_NUMBER_FIRST_MESSAGE);
    return totalText;
  }
  operation.push(buttonValue);
  counter = counter + 1;
}

// 변경 후
if (isNaN(buttonValue) && !number[counter]) {
  alert(INPUT_NUMBER_FIRST_MESSAGE);
  return totalText;
}

if (isNaN(buttonValue)) {
  operation.push(buttonValue);
  counter = counter + 1;
}
```

- 중첩 if문 사용을 지양하기 위해 위와같이 중첩 if문을 단일 if문으로 분리하여 작성하였습니다.
- 중첩 if문을 사용하면 `!number[counter]`만 체크하면 되는데 단일if문으로 변경하고 보니 `isNaN(buttonValue)`라는 동일한 조건을 2번 체크하게 되었습니다.
- 리뷰어께서는 위에 상황에서 중첩 if문 사용에 대해서 어떻게 생각하는지 궁금합니다.

### validation 로직을 어떻게 분리하는게 좋을까요?

- 계산기에 입력된 식을 계산하는 로직을 커스텀 훅으로 옮겨주는 작업을 진행하였습니다.
- 옮겨주고 보니 로직의 반이 validation 로직이 차지하고 있었습니다.
- validation 처리를 하는 부분을 하나의 함수로 만들어서 boolean 값을 리턴하는 식으로 바꿔보면 어떨까하는 생각을 해봤습니다.
- validation 체크를 하는 로직을 분리하는게 좋을지? 아니면 그대로 유지해도 좋을지 궁금합니다.
