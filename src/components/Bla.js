import style from "./../css/test.module.css";

const Bla = () => {
  return (
    <div>
      Dk Ttcy
      <div className={style.grand_bloc}>
        <div>A</div>
        <div>B</div>
        <div>C</div>
      </div>
      <p className={style.test}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        facilis distinctio minima alias recusandae repellendus possimus, omnis
        mollitia dolores, totam sequi ipsa suscipit. Nemo eaque dolorem atque
        fugit architecto quo.
      </p>
    </div>
  );
};

export default Bla;
