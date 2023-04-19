type ValidationResult = string | null;
type Validator<T> = (params: T) => Promise<ValidationResult>;
type GetValidator<Options, Params> = (options?: Options) => Validator<Params>;

const validate = async <T>(value: T, validators: Validator<T>[]): Promise<ValidationResult> => {
  let validationResult: ValidationResult = null;
  let i = 0;

  while (validationResult === null && i < validators.length) {
    const res = await validators[i](value);

    if (res) {
      validationResult = res;
    }

    i++;
  }

  return validationResult;
};

export { default as required } from './validators/required';
export { default as maxLength } from './validators/max-length';
export { default as minLength } from './validators/min-length';
export { default as fileMaxSize } from './validators/file-max-size';
export { default as imageMaxResolution } from './validators/image-max-resolution';

export type { ValidationResult, Validator, GetValidator };
export default validate;
