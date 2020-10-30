import { compose, curry, not, when } from "rambda";

export const tryCatch = curry(
  async (left: Function, right: Function, body: any) => {
    try {
      return await left(body);
    } catch (error) {
      return right(error);
    }
  }
);

export const isError = (x: any) => x instanceof Error;

export const ifError = when(isError);

export const ifNotError = compose(not, isError);
