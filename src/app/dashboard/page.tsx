

import { getSession } from "next-auth/react";
import Link from "next/link";
import styles from "./dashboard.module.css";
import Head from "next/head";

import { Textarea } from "../../components/textArea"




export default async function Dashboard() {
    const session = await getSession();

    {session?.user && status === "authenticated" ? (
        
        
        <Link className={styles.myPanel} href="/dashboard">
            Meu Painel
        </Link>
    ) : (
        <p>Carregando...</p>
    )}
    
    return (
        <div className={styles.container}>
            <Head>
                <title>Painel de Tarefas</title>
            </Head>

            <main className={styles.main}>
                <section className={styles.content}>
                    <div className={styles.contentForm}>
                        <h1 className={styles.title}>   
                            Qual sua Tarefa?
                        </h1>
                        <form>
                            <Textarea placeholder="Digite qual é sua tarefa..."/>
                            <div className = {styles.checkboxArea}>
                                <input type="checkbox" className={styles.checkbox} />
                                <label>Deixar esta tarefa pública?</label>
                            </div>
                            <button className={styles.button} type="submit">
                                Registrar Tarefa
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
}
