import './Navigation.css'
import '../Core.css'
import {Link} from 'react-router-dom'

export const Navigation = () => {
    return (
        <header className='header'>
            <div className="container">
                <nav className='head_nav'>
                    <ul className='head_ul'>
                        <li><Link to='/' className='link'>Mustapakylov Azamat</Link></li>
                    </ul>
                    <ul className='head_ul'>
                        <li><Link to='/' className='link'>Главная</Link></li>
                        <li><Link to='/projects' className='link'>Проекты</Link></li>
                        <li><Link to='/contact' className='link'>Контакты</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}