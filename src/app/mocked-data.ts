export interface TodoItems {
    text: string;
    category: string;
    isDone: boolean;
}

export const TODO_ITEMS: TodoItems[] = [
    {text: "Zjeść śniadanie", category:"jedzenie", isDone: false},
    {text: "Nakarmić kota", category:"jedzenie", isDone: false},
    {text: "Zrobić zakupy", category:"zakupy", isDone: false},
    {text: "Iść na spacer", category:"zdrowie", isDone: false},
    {text: "Kupić chleb", category:"zakupy", isDone: false},
    {text: "Zetrzeć ser", category:"jedzenie", isDone: false}
];