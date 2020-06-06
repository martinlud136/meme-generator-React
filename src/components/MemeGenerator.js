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

    render() { 
        return ( 
            <form>
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
            </form>
         );
    }
}
 
export default MemeGenerator;