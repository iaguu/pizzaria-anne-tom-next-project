export default {
  break: (num1: number) => `@media screen and (min-width: ${num1}rem)`,
  breakMax: (num2: number) => `@media screen and (max-width: ${num2}rem)`
  // breakMinMax: ({ param1, param2 }: BreakValues) =>
  //  `@media screen and (max-width: ${param2}) and (min-width: ${param1})`
}
