import { Component } from "react";
import './App.css'
import { Header, Container, Footer, Hero ,MostPopular} from './components/componentsExporter'

class App extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <>
                <Header />
                <Container >
                    <Hero />
                    <MostPopular />
                </Container>
                <Footer />
            </>
        )
    }
}

export default App