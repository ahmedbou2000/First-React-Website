import { Component } from "react";
import './App.css'
import { Header, Container, Footer, Hero} from './components/componentsExporter'

class App extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <Header />
                <Container >
                    <Hero />
                </Container>
                <Footer />
            </div>
        )
    }
}

export default App