import React, {Component} from 'react';
import './Ongoings.css'

export default class Ongoings extends Component {
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
            <div className="Ongoings">
                <h1>Ongoings</h1>
                <div className="Ongoings__images">
                    {img}
                </div>
            </div>
        )
    }
}