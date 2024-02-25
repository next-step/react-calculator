import { OPERATION_SYMBOLS } from "@/constants/calculator";
import { Calculator } from "@/utils/calculator";

export type Operation = Exclude<keyof Calculator, 'getValue' | 'clear'>

export type Operator = typeof OPERATION_SYMBOLS[keyof typeof OPERATION_SYMBOLS]