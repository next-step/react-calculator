const CalculateUnitRegex = new RegExp(/\d+|[+\-/X]/g);

export const separateCalculateUnits = (formula: string) =>
  formula.match(CalculateUnitRegex);
