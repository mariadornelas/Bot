const Twitter = require('twitter')
// Constante que guarda as funções da lib do Twitter
require('dotenv').config()
// Configuração das variáveis de ambiente


const tweet = new Twit({
    consumer_key: process.env.BOT_CONSUMER_KEY,
    consumer_secret: process.env.BOT_CONSUMER_SECRET,
    access_token: process.env.BOT_ACCESS_TOKEN,
    access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET,
    timeout_ms: 60 * 1000
});

const HalfDay = 43200000;


function action () {

    const phrases = [

        "Você é linda",
        "Sua risada é a coisa mais fofa",
        "Adoro seu jeitinho bravo e fofo",
        "Obg por ser assim",
        "A bailarina mais linda e talentosa do mundo",
        "Amo seus desenhos e seus quadros",
        "Sou apaixonada nos seus olhos",
        "Adoro seu jeito sociável",
        "Adoro como a gente combina",
        "Você é a pessoa mais gentil, carinhosa e incrível que eu já conheci",
        "When I see your face, there’s not a thing that I would change",
        "Cause you’re amazing just the way you are",
        "Adoro o jeitinho que você fica quando tá com vergonha",
        "You don’t understand how much you really mean to me",
        "Gostar de você é leve e fácil",
        "Adoro quando você fica boiolinha",
        "I think you’re perfect, even with your flaws",
        "Você é tão atenciosa",
        "Você é tão adorável",
        "Você é tão autêntica",
        "Você é tão compreensiva",
        "Você é tão criativa",
        "Você é tão divertida",
        "Você é tão exuberante",
        "Você é tão talentosa",
        "Você é tão inteligente",
        "Adoro seus áudios com voz de sono",
        "Seu abraço é o melhor de todos",
        "Quando tô contigo o tempo passa voando"
    ]

    const position = Math.floor(Math.random() * 23);

    tweet.post(
        'statuses/update',  // funcao de postar tweet
        { status: phrases[position] },  // post que será feito
        function (error, data, response) {
            if (error) {
                console.log("ERRO: " + error);
                return false;
            }

            console.log("Tweet postado com sucesso!");
        }
    )

}

setInterval(action, HalfDay);