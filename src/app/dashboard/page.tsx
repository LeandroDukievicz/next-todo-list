

import { getSession } from "next-auth/react";
import styles from "./dashboard.module.css";
import Head from "next/head";
import { redirect } from 'next/navigation';

export default async function Dashboard() {
    const session = await getSession();

    if (!session?.user) {
        redirect('/');
        return null; 
    }
    
    return (
        <div className={styles.container}>
            <Head>
                <title>Painel de Tarefas</title>
            </Head>
            <h1>Meu painel</h1>
        </div>
    );
}
