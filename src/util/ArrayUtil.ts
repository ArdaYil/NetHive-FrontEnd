class ArrayUtil {
  public static getArrayFromRange(min: number, max: number) {
    const array = [];

    if (min <= max) {
      for (let i = min; i <= max; i++) {
        array.push(i);
      }
    } else {
      for (let i = min; i >= max; i--) {
        array.push(i);
      }
    }

    return array;
  }
}

export default ArrayUtil;
