import React, {Component} from 'react';
import './NewAnime.css'

export default class NewAnime extends Component {
    state = {
        images: [
            'https://moe.shikimori.org/system/animes/original/35972.jpg',
            'https://dere.shikimori.org/system/animes/original/36474.jpg',
            'https://kawai.shikimori.org/system/animes/original/37991.jpg',
            'https://nyaa.shikimori.org/system/animes/original/37430.jpg'
        ]
    }

    render() {

        const img = this.state.images.map((item, idx) => {
            return (
                <div key={idx}>
                    <img src={item} alt=""/>
                </div>
            )
        })

        return (
            <div className="NewAnime">
                <h1>New Anime</h1>
                <div className="NewAnime__images">
                    {img}
                </div>
            </div>
        )
    }
}