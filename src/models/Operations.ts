import {OPERATIONS} from "../constants/Calcurator";

export type OperatorionsType = typeof OPERATIONS[keyof typeof OPERATIONS];
