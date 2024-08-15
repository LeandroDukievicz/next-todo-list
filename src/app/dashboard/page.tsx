
import styles from "./dashboard.module.css"
import Head from "next/head"


export default function Dashboard(){
    return(
    
        <div className={styles.container}>
            <Head>
                <title>Painel de Tarefas</title>
            </Head>
           
            <h1>Meu painel </h1>
        </div>
    
    )
}