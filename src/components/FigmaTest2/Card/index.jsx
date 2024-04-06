import styles from "./card.module.css";
import star from "../../../assets/photos/star.png";
import litlestar from "../../../assets/photos/litlestar.png";
import check from "../../../assets/photos/check.png";

export const Card = () => {
  return (
    <>
        <div className="col">
          <div className="card h-auto border-2">
            <img src={star} className="card-img-top pt-2 px-2" alt="..." />
            <div className="card-body">
              <span className="card-title fw-bold">Без слов</span>
              <div className="d-flex gap-2 align-items-center mb-2">
                <img src={litlestar} alt="" />
                <div className={`card-text ${styles.text}`}>
                  Настя Ивлеева Вячеславовна
                  <p className={`card-text ${styles.textsm}`}>
                    проверено <img src={check} alt="" />
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <span>Редкость:</span>
                <span className={styles.btn_rare}>уникальная</span>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <span>Цена</span>
                <span className={styles.price}>от 500 ₽</span>
              </div>
            </div>
            <button className={styles.btn}>Купить</button>
          </div>
        </div>
    </>
  );
};
