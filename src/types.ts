import { ComponentProps, ElementType } from 'react';

/**
 * T와 K에서 T의 프로퍼티를 제거한 타입을 병합합니다.
 */
type Combine<T, K> = T & Omit<K, keyof T>;
/**
 * 원하는 엘리먼트의 프로퍼티와 커스텀 프로퍼티를 병합합니다.
 */
type CombineElementProps<E extends ElementType, P = unknown> = Combine<P, ComponentProps<E>>;
/**
 * 원하는 객체의 value들을 타입으로 뽑아냅니다.
 */
type ValueOf<T extends object> = T[keyof T];

export type { Combine, CombineElementProps, ValueOf };
