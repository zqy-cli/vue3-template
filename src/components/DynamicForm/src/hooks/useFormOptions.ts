import { ref } from 'vue';

const dynamicFormSetting = {};

export function useFormOptions(name) {
  const { rule, fApi, options } = dynamicFormSetting[name];

  return {
    rule: ref(rule),
    fApi: ref(fApi),
    options: ref(options),
  };
}
