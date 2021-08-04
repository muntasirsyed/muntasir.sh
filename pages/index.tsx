import Head from "next/head"

import styles from "../styles/Home.module.css"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Muntasir Syed</title>
                <link rel="stylesheet" href="https://use.typekit.net/isd4ziu.css" />
                <meta name="description" content="Software Engineer based in London, UK" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Hi, I&apos;m Muntasir{" "}
                    <span role="img" className={styles.wave}>
                        👋
                    </span>
                </h1>
                <p className={styles.description}>
                    This is a little awkward... <br /> ...because I must say you&apos;re here just a
                    tad early.
                </p>
                <p className={styles.subdescription}>
                    Check back soon for my new website. <br /> In the meantime if you&apos;d just
                    like to get in touch, you can hit me up on{" "}
                    <a
                        href="https://twitter.com/_muntasirsyed"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        twitter.
                    </a>
                </p>
            </main>
        </div>
    )
}
