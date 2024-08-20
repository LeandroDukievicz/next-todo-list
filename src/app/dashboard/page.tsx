
import { GetServerSideProps } from "next"
import { getSession } from "next-auth/react"
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

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    
    const session = await getSession({req});

    if (!session?.user){
        return{
            redirect:{
                destination: "/",
                permanent: false,
            },
        };
    }

    return{
        props: {},
    };
};