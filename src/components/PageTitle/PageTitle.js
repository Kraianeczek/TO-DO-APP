import styles from './PageTitle.module.scss'

const PageTitle = props => {
    return (
        <h1 className={styles.title} type="text">{props.children}</h1>
    )
}

export default PageTitle;