import styles from "./NavTop.module.css"

function NavTop() {
    return (
        <header>
            <nav>
                <h1 className={styles.nomeCalc}>
                    Calculadora de imc
                </h1>
            </nav>
            </header>
    )
}

export default NavTop