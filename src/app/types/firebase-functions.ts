import { FunctionType } from 'kleinsendelbach-website-library';
import { NewsletterGetAllFunctionType, NewsletterGetFunctionType } from './firebase-function-types';

export type FirebaseFunctions = {
    'newsletter-get': NewsletterGetFunctionType;
    'newsletter-getAll': NewsletterGetAllFunctionType;
}

function identity<T>(value: T): T {
    return value;
}

export const firebaseFunctionResultMappers: { [Key in keyof FirebaseFunctions]: (returnValue: FunctionType.FlattenReturnType<FirebaseFunctions[Key]>) => FunctionType.ReturnType<FirebaseFunctions[Key]> } = {
    'newsletter-get': NewsletterGetFunctionType.mapReturnValue,
    'newsletter-getAll': NewsletterGetAllFunctionType.mapReturnValue
};
