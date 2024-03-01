import { MAX_DIGIT_LENGTH } from './app'

export const REGEXP = {
  MAX_LENGTH_NUMBER: new RegExp(`\\d${MAX_DIGIT_LENGTH}`),
  END_WITH_NUMBER: /\d+$/,
  OPERATOR: /([+\-x/])/
}
