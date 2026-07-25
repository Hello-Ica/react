import { Header } from '../components/Header'
import './NotFound.css'
import { Link } from 'react-router'

export function NotFound({ cart}) {
  return (
    <>
    <Header cart = {cart}/>
      <div className="not-found">
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    </>
  )
}