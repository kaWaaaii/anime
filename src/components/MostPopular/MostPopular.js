import React, {Component} from 'react';
import {connect} from 'react-redux'
import './MostPopular.css'

class MostPopular extends Component {

    render() {
        console.log(this.props)

        const img = this.props.anime.info.map((item, idx) => {
            return (
                <div key={idx}>
                    <img src={item.image} alt=""/>
                    <h3>{item.name}</h3>
                </div>
            )
        })

        return (
            <div className="MostPopular">
                <h1>Most Popular</h1>
                    <div className="MostPopular__images">
                        {img}
                    </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        anime: state.anime
    }
}

export default connect(mapStateToProps)(MostPopular)