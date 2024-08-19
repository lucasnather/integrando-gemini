import { chooseModel } from './model.js'
 
const model = await chooseModel("gemini-1.0-pro")

export async function checkTotalTokens(text) {
    const token = await model.countTokens(text)

    return token
}