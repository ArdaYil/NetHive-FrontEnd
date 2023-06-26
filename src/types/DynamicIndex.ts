type DynamicIndex<T extends {}> = T & {
  [key: string]: any;
};

export default DynamicIndex;
