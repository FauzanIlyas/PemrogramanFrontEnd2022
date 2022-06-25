import styles from "./Hello.module.css";
import StyledHello, { Container } from "./Hello.styled";

function Hello() {
  return (
    <Container>
      <StyledHello>
        <div className="hello__left">
          <h2>COVID ID</h2>
          <h3>Monitoring Perkembangan Covid</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            cum accusamus quisquam earum velit ea nobis maiores exercitationem
            nam temporibus.
          </p>
          <button className={styles.hello__button}>Vaccine</button>
        </div>
        <div className="hello__right">
          <img
            src="https://dinkes.acehprov.go.id/uploads/Ilustrasi_Vaksinasi1.jpg"
            alt="placeholder"
          />
        </div>
      </StyledHello>
    </Container>
  );
}

export default Hello;
