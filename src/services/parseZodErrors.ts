import { ZodError } from "zod";

const parseZodErrors = <T>(errors: ZodError) => {
  const errorMessages: { [key: string]: any & T } = {};

  for (const error of errors.errors) {
    if (error.path) {
      const path = error.path.join(".");

      errorMessages[path] = error.message;
    }
  }

  return errorMessages as T;
};

export default parseZodErrors;
