import { FunctionType, UtcDate } from "kleinsendelbach-website-library";
import { Newsletter } from "./newsletter";

export type NewsletterGetAllFunctionType = FunctionType<Record<string, never>, Newsletter.Overview.Flatten[], Newsletter.Overview[]>;

export namespace NewsletterGetAllFunctionType {
    export function mapReturnValue(returnValue: FunctionType.FlattenReturnType<NewsletterGetAllFunctionType>): FunctionType.ReturnType<NewsletterGetAllFunctionType> {
        return returnValue.map(newsletter => ({
            ...newsletter,
            date: UtcDate.decode(newsletter.date)
        }));
    }
}

export type NewsletterGetFunctionType = FunctionType<{
    id: string;
}, Newsletter.Flatten | null, Newsletter | null>;


export namespace NewsletterGetFunctionType {
    export function mapReturnValue(returnValue: FunctionType.FlattenReturnType<NewsletterGetFunctionType>): FunctionType.ReturnType<NewsletterGetFunctionType> {
        if (returnValue === null)
            return null;
        return Newsletter.concrete(returnValue);
    }
}
