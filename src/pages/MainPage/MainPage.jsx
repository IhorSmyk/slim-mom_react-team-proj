import { Container } from 'components/Container/Container';
import CalculatorСaloriesForm from '../../components/CalculatorСaloriesForm/CalculatorСaloriesForm';
import css from './MainPage.module.css';

function MainPage() {
  return (
    <main className={css.main}>
      <Container>
        <section className={css.section}>
          <h1 className={css.headerCalculate}>
            Calculate your daily calorie intake right now
          </h1>
          <CalculatorСaloriesForm />
        </section>
      </Container>
    </main>
  );
}

export default MainPage;
