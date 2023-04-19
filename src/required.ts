import type { GetValidator } from './validate';

const required: GetValidator<string, string> = (message = 'Обязательное поле') => {
  return async (value) => (value ? null : message);
};

export default required;
