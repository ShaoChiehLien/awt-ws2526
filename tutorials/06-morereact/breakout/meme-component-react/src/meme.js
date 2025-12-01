import React, {Component} from 'react'
import './meme.css'

export default class Meme extends Component {
    render() {
        return (
            <div class="meme">
                <img src={this.props.url}/>
                <p class="caption captionTop">{this.props.captionTop}</p>
                <p class="caption captionBottom">{this.props.captionBottom}</p>
            </div>
        )
    }
}