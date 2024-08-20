"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

import styles from "./style.module.css";

export function Header(){

    const { data:session, status } = useSession();

    return(
        <header className={styles.header}>
            <section  className={styles.content}>
                <nav className={styles.nav}>
                    <Link href="/">
                        <h1 className={styles.logo}>To Do
                            <span>+</span>
                        </h1>
                    </Link>
                    
                    {session?.user && (
                        <Link className={styles.myPanel} href="/dashboard">
                            Meu Painel
                        </Link>
                    )}
                </nav>
                
                { status ==="loading" ? (
                    <></>
                ) : session ? (
                    <button className={styles.loginButton} onClick={ ()=> signOut()}>
                        Olá,  {session?.user?.name}
                        
                    </button>
                ): (
                    <button className={styles.loginButton} onClick={ ()=> signIn("google")}>
                        Acessar
                    </button>
                   ) }

            </section>
        </header>
    );
};

