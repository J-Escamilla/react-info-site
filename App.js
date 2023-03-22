import React from 'react'
import ReactDOM from 'react-dom'
import Title from './components/Title'
import Info from './components/Info'
import Footer from './components/Footer'

export default function App() {
    return (
        <main>
            <div className="container">
                <Title />
                <Info />
                <Footer />
            </div>
        </main>
    )
}