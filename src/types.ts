import { ARITHMETIC_OPERATORS } from '@/constants'

export type UnionFromTuple<T> = T extends ReadonlyArray<infer U> ? U : never
export type Operator = UnionFromTuple<typeof ARITHMETIC_OPERATORS>
