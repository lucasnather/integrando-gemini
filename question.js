import readline from 'readline/promises'

export async function question() {
    const rl = readline.createInterface({
        input:  process.stdin,
        output: process.stdout,
    })

    const answer = await rl.question("Qual pergunta você deseja fazer? ")
    rl.close()

    return answer;
}