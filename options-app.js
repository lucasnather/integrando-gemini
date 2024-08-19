import readline from 'readline/promises'

export async function optionsApp() {

    const rl = readline.createInterface({
        input:  process.stdin,
        output: process.stdout,
    })

    const answer = await rl.question("1 - Faça uma pergunta para a IA \n 2 - Encerrar Sistema \n ")
    rl.close()

    return answer;
}