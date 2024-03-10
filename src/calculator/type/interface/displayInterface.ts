import {OperationType} from "../enum/operationType.ts";

export interface DisplayInterface {
    prev: string;
    after: string;
    operation: OperationType;
}