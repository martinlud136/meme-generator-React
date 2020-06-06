import React, { Component } from 'react';

class MemeGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            topText: '',
            bottomText: '',
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response=> response.json())
            .then(response=>{
                const {memes} = response.data
                this.setState({
                    allMemeImgs: memes
                })
            })
    }

    render() { 
        return ( 
            <h1>MEME GENERATOR</h1>
         );
    }
}
 
export default MemeGenerator;