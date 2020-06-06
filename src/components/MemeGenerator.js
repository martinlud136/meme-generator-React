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
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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

    handleChange(e){
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeUrl = this.state.allMemeImgs[randNum].url
        this.setState({
            randomImg: randMemeUrl
        })
    }

    render() { 
        return ( 
            <div>
                <form className='meme-form' onSubmit={this.handleSubmit}>
                    <input 
                        name='topText'
                        type='text'
                        placeholder= 'Top Text'
                        onChange={this.handleChange}
                        value={this.state.topText}
                    />
                    <input 
                        name='bottomText'
                        type='text'
                        placeholder= 'Bottom Text'
    // recibe el objeto evento como parametro, si quiero pasar otra cosa debo llamar la funcion onChange={()=> this.handleChange(otroValor)}
                        onChange={this.handleChange} 
                        value={this.state.bottomText}
                    />
                    <button>Gen</button>
                </form>
                <div className='meme'>
                    <img src={this.state.randomImg} alt='' />
                    <h2 className='top'>{this.state.topText}</h2>
                    <h2 className='bottom'>{this.state.bottomText}</h2>
                </div>
            </div>
         );
    }
}
 
export default MemeGenerator;