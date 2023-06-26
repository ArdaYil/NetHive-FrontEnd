const relativeUnit = (px: number) => px / 16;

const em = (px: number) => relativeUnit(px) + "em";
const rem = (px: number) => relativeUnit(px) + "rem";

export { em, rem };
