import Link from 'next/link'

import styles from "./style.module.css";

export function Header(){
    return(
        <header className={styles.header}>
            <section  className={styles.content}>
                <nav className={styles.nav}>
                    <Link href="/">
                        <h1 className={styles.logo}>To Do
                            <span>+</span>
                        </h1>
                    </Link>
                    
                    <Link className={styles.myPanel} href="/dashboard">
                                    Meu Painel
                    </Link>
                
                </nav>
                
                <button className={styles.loginButton}>Acessar</button>

            </section>
        </header>
    );
};

