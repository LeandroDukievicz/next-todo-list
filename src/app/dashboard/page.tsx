

import { getSession } from "next-auth/react";
import Link from "next/link";
import styles from "./dashboard.module.css";
import Head from "next/head";

import { Textarea } from "../../components/textArea"
import { FiShare2 } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";




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

                <section className={styles.taskContainer}>
                    <h1>Minhas Tarefas</h1>

                    <article className={styles.task}>
                         <div className={styles.tagContainer}>
                            <label className={styles.tag}>PÚBLICO</label>
                            <button className={styles.shareButton}>
                                <FiShare2
                                    size = {23}
                                    color = "#6463e3"
                                />    
                            </button>
                        </div>
                        
                        <div className={styles.taskContent}>
                            <p>Primeira tarefa</p>
                            <button className={styles.trashButton}>
                                <FaTrash size = {24} color = "#ea3140" />
                            </button>      

                        </div>

                    </article> 
                </section>
            </main>
        </div>
    );
}
