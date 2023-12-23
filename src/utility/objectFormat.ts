import { PASS_CODE } from "@/constant";

export const createArray = (length: number) =>
  Array.from({ length }, (_, i) => i);

export const verifyPassCode = (value: string) =>
  Object.values(PASS_CODE).includes(value);
