import { chooseModel } from './model.js'
import { optionsApp } from './options-app.js';
import { question } from './question.js';
import { checkTotalTokens } from './checkTotalTokens.js'
import { GoogleGenerativeAIResponseError } from '@google/generative-ai'
 
 async function run() {

    let options = ""

    while ( options != "2") {
        options = await optionsApp()

        if ( options === '1') {
            const prompt = await question()
            const model = await chooseModel("gemini-1.0-pro")
        
            const tokenPrompt = await checkTotalTokens(prompt)
            console.log(`Tokens de entrada ${tokenPrompt.totalTokens}`)
        
            try {
                const { response } = await model.generateContent(prompt);
                const text = response.text();
                const tokenTest = await checkTotalTokens(text)
                console.log(`Tokens de saída ${tokenTest.totalTokens}`)
            
                console.log(text);
            } catch(e) {
                if( e instanceof GoogleGenerativeAIResponseError) {
                    console.log(e.message)
                    return
                }

                console.log(e.message)
            }
        
        } else if ( options === '2') {
            console.log("Sistema Encerrado")
        } else {
            console.log("Opção Inválida")
        }
    }

}

run()
  