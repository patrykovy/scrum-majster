import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals'
import Calculator from './calculator/Calculator'
import Container from 'react-bootstrap/Container'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <Container>
      <div>
        <h2 className="text-center">Scrum Majster</h2>
      </div>
      <Calculator />
    </Container>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
