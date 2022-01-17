import styles from './List.module.scss'

const List = () => {
    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h1 className={styles.title}>Things to do <span>soon</span></h1>
            </header>
            <p className={styles.description}>Interesting things I want to check out</p>
            <section className={styles.columns}>
                <article>
                    <h1>Books</h1>
                </article>
                <article>
                    <h1>Movies</h1>
                </article>
                <article>
                    <h1>Games</h1>
                </article>
            </section>
        </div>
    )
};

export default List;