/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard"],
  rules: {
    "font-family-name-quotes": "always-where-recommended",
    "at-rule-empty-line-before": "always",
    "rule-empty-line-before": "always-multi-line",
    "custom-property-empty-line-before": "always",
    "alpha-value-notation": "percentage",
    "selector-class-pattern": [
      "^[a-z][a-z0-9]*(-[a-z0-9]+)*(__[a-z][a-z0-9]*(-[a-z0-9]+)*)?(_[a-z][a-z0-9]*(-[a-z0-9]+)*)?$",
      {
        message:
          "Имя класса должно соответствовать паттерну: блок__элемент_модификатор (например: my-block__element_modifier)",
      },
    ],
  },
};
