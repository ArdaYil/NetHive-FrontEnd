type Cache = {
  [key: string]: any;
};

const cache: Cache = {};

export const set = <T>(key: string, value: T) => (cache[key] = value);
export const get = <T>(key: string) => cache[key] as T;
