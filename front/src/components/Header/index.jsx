import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { useState } from 'react'
import Modal from '../Modal/modal'
import { FaHandHoldingHeart } from "react-icons/fa6"
import { FaHeartPulse } from "react-icons/fa6"
import { useNavigate } from "react-router-dom";


function Header() {
    const [openModal, setOpenModal] = useState(false)
    const navigate = useNavigate();

    return (
        <header className={styles.header}>
            <div className={styles.navcontent}>
                <div className={styles.divBrand}>
                    <Link to="/" className={styles.brand}>
                        <img src="./src/assets/logo.png" alt="Logo" />
                    </Link>
                </div>
                <nav className={styles.navBar}>
                    <Link to="/">Home</Link>
                    <Link to="/faq">Perguntas</Link>
                    <Link to="/quemsomos">Quem Somos</Link>

    
                </nav>
            </div>
            <button onClick={() => setOpenModal(true)}>Login/Cadastro</button>

            <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
                <h3>
                    Para visualizar suas consultas e agendar, <br />
                    acesse sua conta:
                </h3>
                <div>
                    <div className={styles.modalIcones}>
                        <FaHandHoldingHeart />
                        <h4>Cliente</h4>
                    </div>
                    <Link to="/login">Entrar</Link> <br />
                    <Link to="/cliente">Criar Conta</Link>
                </div>
                <div>
                    <div className={styles.modalIcones}>
                        <FaHeartPulse />
                        <h4>Profissional da Saúde</h4>
                    </div>
                    <Link to="/login">Entrar</Link> <br />
                    <Link to="/cadastroespecialista">Criar Conta</Link> <br /> <br />
                </div>
            </Modal>
        </header>
    )
}

export default Header