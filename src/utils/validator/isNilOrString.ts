import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  isString,
  registerDecorator,
} from 'class-validator'
import { isNil } from 'lodash'

@ValidatorConstraint({ async: true })
class IsNilOrStringConstraint implements ValidatorConstraintInterface {
  validate(value: any, _args: ValidationArguments) {
    return isNil(value) || isString(value)
  }
}

export function IsNilOrString(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsNilOrStringConstraint,
    })
  }
}
