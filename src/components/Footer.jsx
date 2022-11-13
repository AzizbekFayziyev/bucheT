import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className="footer-nav">
                <a href="#">О нас</a>
                <a href="#">Контакты</a>
                <a href="#">Пользовательское соглашение</a>
            </div>

            <div className="footer-bottom d-flex align-items-center">
                <p>Служба поддержки: +998 71 200 40 01</p>
                <p>
                    Ⓒ 2022 Express24
                </p>
            </div>
        </footer>
    )
}
