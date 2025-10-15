import { animateFeature } from "./animation.ts";

export const snacks: string[] = [
    "Carrots and Hummus",
    "Mango",
    "Rice Cake",
    "Chips",
    "Chocolate"
];


export function printSnacksArray(snacks: string[]) {
    console.log("Snacks Array: " );
    for(let i = 0; i < snacks.length; i++) {
        console.log("♡ " + snacks[i]);
    }
}




