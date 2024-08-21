import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Contacts Welcome Page &nbsp;
        <span role="img" aria-label="Greeting icon">💁‍♀️</span>
      </h1>
    </div>
  );
}
