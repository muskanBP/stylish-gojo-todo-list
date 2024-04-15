#! /usr/bin/env node
import inquirer from 'inquirer';
let todos = [];
let condition = true;
const main = async () => {
    while (condition) {
        const todoQuestions = await inquirer.prompt([
            {
                name: "questionFirst",
                type: "list",
                message: "Would you like to add to your todos? Please select your favorite category:",
                choices: ["clothes", "vegetables", "shoes", "gamebox", "MOBILE PHONES", "fruits"],
            },
        ]);
        let types = [];
        switch (todoQuestions.questionFirst) {
            case "clothes":
                types = await promptTypes(['t-shirt', 'jeans', 'dress', 'jacket', 'sweater', 'shorts']);
                break;
            case "vegetables":
                types = await promptTypes(['carrot', 'broccoli', 'tomato', 'spinach', 'cucumber', 'potato']);
                break;
            case "shoes":
                types = await promptTypes(['sneakers', 'boots', 'sandals', 'flats', 'heels', 'loafers']);
                break;
            case "gamebox":
                types = await promptTypes(['PlayStation', 'Xbox', 'Nintendo Switch', 'PC', 'VR Headset', 'Handheld Console']);
                break;
            case "MOBILE PHONES":
                types = await promptTypes(['iPhone', 'Samsung Galaxy', 'Google Pixel', 'OnePlus', 'Huawei', 'Xiaomi']);
                break;
            case "fruits":
                types = await promptTypes(['apple', 'banana', 'orange', 'grape', 'strawberry', 'watermelon']);
                break;
            default:
                console.log(`You selected: ${todoQuestions.questionFirst}`);
                break;
        }
        console.log(`You selected the following types: ${types.join(', ')}`);
        const todoQuest = await inquirer.prompt([
            {
                name: "questionSecond",
                type: "confirm",
                message: "Would you like to add more in your todos?",
                default: true,
            },
            {
                name: "lastAction",
                type: "confirm",
                message: "Is this task completed?",
                default: false,
                when: (answers) => answers.questionFirst && answers.questionFirst.length > 0,
            },
        ]);
        todos.push(...types);
        console.log(todos);
        condition = todoQuest.questionSecond;
    }
    console.log("Here is your complete shopping list!! Thank you for purchasing. Come back soon!");
};
try { }
catch (error) {
    console.error('An error occurred:', error);
}
;
const promptTypes = async (choices) => {
    const result = await inquirer.prompt([
        {
            name: "types",
            type: "checkbox",
            message: `Please select one or more types:`,
            choices: choices,
        },
    ]);
    return result.types;
};
main().catch((error) => {
    console.error('An error occurred:', error);
});
