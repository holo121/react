import React from "react"
import Product from './components/Product/Product'


class App extends React.Component {
    render() {
        return (
            <div id="main" className="container">
                <h2>Hello World!</h2>
                <p>Lorem Ipsum...</p>
                <Product />
                <Product />
                <Product />
            </div>
        )
    }

}

export default App