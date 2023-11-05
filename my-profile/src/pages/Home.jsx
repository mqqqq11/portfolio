import '../css/Home.css';
import '../Core.css'
import {Link} from 'react-router-dom'

import Html from '../images/html.svg'
import Css from '../images/css.svg'
import Js from '../images/javascript.svg'
import Sass from '../images/sass.svg'
import ReactImg from '../images/react.svg';
export const Home = () => {
    
    return (
        <main className="home">
            <div className="container">
                <div className="home_image"></div>

                <div className="core_blocks">
                    <div className="core_block">
                        <div className="home_content">
                            <div className="title"><h1>Front-end разработчик</h1></div>
                            <div className="content">
                                <h2>Привет!</h2>
                                <span>
                                    Расскажу немного о себе. Меня зовут Мустапакулов Азамат, и мне 17 лет. Я - Frontend-разработчик.
                                </span>
                                <span>
                                Мое место проживания: город Бишкек, село Новопавловка в районе Сокулук.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="core_block">
                        <div className="home_content">
                            <div className="content">
                                <span>
                                    Моя основная занятость - разработка и верстка веб-сайтов на заказ, с акцентом на создание адаптивных интерфейсов. Моя стек технологий включает в себя HTML, CSS, JavaScript, а также библиотеку React и препроцессор SASS. Я стараюсь создавать современные и удобные пользовательские интерфейсы, которые помогут компаниям и предпринимателям успешно представить свой бизнес в онлайн-среде.
                                </span>
                            </div>
                            <div className="icons">
                                <img src={Html} alt="html" />
                                <img src={Css} alt="css" />
                                <img src={Js} alt="javascript" />
                                <img src={Sass} alt="sass" />
                                <img src={ReactImg} alt="react" />
                            </div>
                        </div>
                    </div>
                    <div className="core_block">
                        <div className="home_content">
                            <div className="content">
                                <span>
                                    Мое портфолио включает в себя разнообразные проекты, которые демонстрируют мой опыт и навыки. Я горжусь своей работой и всегда стремлюсь к совершенствованию. Если вам нужен профессиональный фронтенд-разработчик для вашего проекта, не стесняйтесь связаться со мной. Я готов внести свой вклад в ваш успех!
                                </span>
                                <Link className='link' to='/projects'>Мои проекты</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}