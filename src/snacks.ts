// src/snacks.ts
import { animate } from "./animation";

export const snacks: string[] = [
  "chips",             
  "Carrots and Hummus",
  "Mango",
  "pretzels",
  "seaweed snacks",
  "rice crackers",
];

export function printSnacks() {
  animate("Snacks Time");
  for (const s of snacks) console.log(s);
}
