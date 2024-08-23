

import { getSession } from "next-auth/react";
import Link from "next/link";
import styles from "./dashboard.module.css";
import Head from "next/head";
import { redirect } from 'next/navigation';



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
            <h1>Meu Painel</h1>
        </div>
    );
}
