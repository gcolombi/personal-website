import styles from '@/styles/modules/Home.module.scss';
import MetaData from '@/components/MetaData';
import Next from '@/components/shared/svg/Next';
import Vercel from '@/components/shared/svg/Vercel';

export default function Home() {
    return (
        <>
            <MetaData />
            <section className={styles['c-home']}>
                <div className={styles['c-home__main']}>
                    <div className={styles['c-home__description']}>
                        <p>
                            Get started by editing&nbsp;
                            <code>pages/index.tsx</code>
                        </p>
                        <div className={styles['c-home__description--logo']}>
                            <a
                                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                By{' '}
                                <Vercel />
                            </a>
                        </div>
                    </div>

                    <div className={styles['c-home__center']}>
                        <Next />
                    </div>

                    <div className={styles['c-home__grid']}>
                        <a
                            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                            className={styles['c-home__grid--card']}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h2>
                                Docs <span>-&gt;</span>
                            </h2>
                            <p>
                                Find in-depth information about Next.js features and&nbsp;API.
                            </p>
                        </a>

                        <a
                            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                            className={styles['c-home__grid--card']}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h2>
                                Learn <span>-&gt;</span>
                            </h2>
                            <p>
                                Learn about Next.js in an interactive course with&nbsp;quizzes!
                            </p>
                        </a>

                        <a
                            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                            className={styles['c-home__grid--card']}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h2>
                                Templates <span>-&gt;</span>
                            </h2>
                            <p>
                                Discover and deploy boilerplate example Next.js&nbsp;projects.
                            </p>
                        </a>

                        <a
                            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                            className={styles['c-home__grid--card']}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h2>
                                Deploy <span>-&gt;</span>
                            </h2>
                            <p>
                                Instantly deploy your Next.js site to a shareable URL
                                with&nbsp;Vercel.
                            </p>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}