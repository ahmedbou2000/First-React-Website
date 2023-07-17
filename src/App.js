import { Component } from "react";
import './App.css'
import { Header, Container, Footer} from './components/componentsExporter' 

class App extends Component {
    constructor(){
        super()
    }

    render(){
        return (
            <>
                <Header/>
                <Container />
                <Footer />
            </>
        )
    }
}

export default App