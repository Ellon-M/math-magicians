import styles from './styles/quote.module.css';

const quotes = [
  {
    quote: '"As far as the laws of mathematics refer to reality, they are not certain, and as far as they are certain, they do not refer to reality."',
    author: 'Albert Einstein',
  },
  {
    quote: '"Mathematics as an expression of the human mind reflects the active will, the contemplative reason, and the desire for aesthetic perfection"',
    author: 'Richard Courant',
  },
  {
    quote: '"There should be no such thing as boring mathematics"',
    author: 'Edsger W. Dijkstra',
  },
  {
    quote: '"What is mathematics? It is only a systematic effort of solving puzzles posed by nature"',
    author: 'Shakuntala Devi',
  },
  {
    quote: '"Mathematics is the most beautiful and most powerful creation of the human spirit."',
    author: 'Stefan Banach',
  },
  {
    quote: '"Pure mathematics is in its way, the poetry of logical ideas"',
    author: 'Albert Einstein',
  },
];

const Quote = () => {
  const quoteIndex = Math.floor(Math.random() * quotes.length) + 1;
  return (
    <div className={styles.quoteContainer}>
      <h3 className={styles.quote}>{quotes[quoteIndex].quote}</h3>
      <span>{quotes[quoteIndex].author}</span>
    </div>
  );
};

export default Quote;
