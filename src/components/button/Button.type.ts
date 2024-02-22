export const BUTTON_VARIANTS = {
    DIGIT: 'digit',
    OPERATION: 'operation',
    MODIFIER: 'modifier'
  } as const

  export type ButtonVariantType =
  (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];