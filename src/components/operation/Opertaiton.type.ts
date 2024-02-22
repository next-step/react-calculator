export const OPERATION_TYPE_VARIANT = {
    DIVIDE: 'divide',
    MULTIPLE: 'multiple',
    SUBTRACT: 'subtract',
    EQUAL: 'equal',
    ADD: 'add'
} as const;

export type OperationType =
  (typeof OPERATION_TYPE_VARIANT)[keyof typeof OPERATION_TYPE_VARIANT];