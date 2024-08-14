import Image from "next/image";
import Head from "next/head";
import styles from "../../styles/page.module.css"

import todoProject from "../../public/assets/todoProject.png"

export default function Home(){
  return(
    <section className={styles.container}>
      <Head>
        <title>Projeto To Do List - Organizando tarefas de forma fácil
        </title>
      </Head>

      <main className={styles.main}>
        <div className={styles.logoContent}>
          <Image className={styles.todoProject}
                  alt="Logo Projeto to do list"
                  src={todoProject}
                  priority 
          />

          <h1 className={styles.title}>
            Projeto simples para você organizar <br /> Suas tarefas e estudos !
          </h1>

          <div className={styles.infoContent}>
            <section className={styles.box}>
              <span className={styles.plus}>+</span><span>17 Posts</span>
            </section>
            <section className={styles.box}>
            <span className={styles.plus}>+</span><span>53 Comentários</span>
            </section>
          </div>
        </div>
      </main>
    </section>
  )
}
