/**
 * 원하는 객체의 value들을 타입으로 뽑아냅니다.
 */
type ValueOf<T extends object> = T[keyof T];

export type { ValueOf };
