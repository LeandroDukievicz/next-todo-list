"use client";

import { getSession, useSession } from "next-auth/react";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import styles from "./dashboard.module.css";
import Head from "next/head";
import { Textarea } from "../../components/textArea";
import { FiShare2 } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";

export default function Dashboard() {
    const { data: session, status } = useSession();
    const [input, setInput] = useState("");
    const [publicTask, setPublicTask] = useState(false);

    function handleChangePublic(event: ChangeEvent<HTMLInputElement>) {
        setPublicTask(event.target.checked);
    }

    function handleRegisterTask(event: FormEvent){
        event.preventDefault();
        

    }

    if (status === "loading") {
        return <p>Carregando...</p>;
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Painel de Tarefas</title>
            </Head>
            <main className={styles.main}>
                <section className={styles.content}>
                    <div className={styles.contentForm}>
                        <h1 className={styles.title}>Qual sua Tarefa?</h1>

                        <form onSubmit={handleRegisterTask}>
                            <Textarea
                                placeholder="Digite qual é sua tarefa..."
                                value={input}
                                onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                                    setInput(event.target.value)
                                }
                            />

                            <div className={styles.checkboxArea}>
                                <input
                                    type="checkbox"
                                    className={styles.checkbox}
                                    checked={publicTask}
                                    onChange={handleChangePublic}
                                />
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
                                <FiShare2 size={23} color="#6463e3" />
                            </button>
                        </div>
                        <div className={styles.taskContent}>
                            <p></p>
                            <button className={styles.trashButton}>
                                <FaTrash size={24} color="#ea3140" />
                            </button>
                        </div>
                    </article>
                </section>
            </main>
        </div>
    );
}
