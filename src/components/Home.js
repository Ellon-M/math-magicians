import styles from './styles/home.module.css';

const Home = () => (
  <div className={styles.homeContainer}>
    <h3 className={styles.welcomeHeading}>Welcome</h3>
    <div className={styles.about}>
      <p className={styles.aboutText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Morbi sit amet tincidunt lorem.
        Quisque suscipit non elit et consequat.
        Class aptent taciti sociosqu ad litora torquent per conubia nostra,
        per inceptos himenaeos. Quisque euismod sodales massa quis viverra.
        Pellentesque porta porta cursus.
        Ut sollicitudin, ex quis pharetra sagittis, augue sapien auctor dui,
        molestie blandit justo velit sed eros. Proin a felis massa.
        Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Vivamus eu neque congue, mollis dolor quis, rhoncus est.
        Suspendisse vel odio in nisl aliquet interdum sit amet sit amet ante.
        Curabitur fermentum sem a ex commodo molestie.
      </p>
    </div>
  </div>
);

export default Home;
