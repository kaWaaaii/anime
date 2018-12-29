const initialState = {
    anime: {
        info: [
            {
                name: 'Fairy Tail',
                image: 'https://moe.shikimori.org/system/animes/original/35972.jpg'
            },
            {
                name: 'Sword Art Online',
                image: 'https://dere.shikimori.org/system/animes/original/36474.jpg'
            },
            {
                name: 'JoJo Part 5',
                image: 'https://kawai.shikimori.org/system/animes/original/37991.jpg'
            },
            {
                name: 'Karakuri Circus',
                image: 'https://moe.shikimori.org/system/animes/original/37447.jpg'
            },
            {
                name: 'Toaru Majutsu no Index III ',
                image: 'https://moe.shikimori.org/system/animes/original/36432.jpg'
            }
        ]

    }

}

export default function rootReducer(state = initialState, action) {
    return state
}