import styles from "./footer.module.css";
import twitter from "../../../assets/photos/twitter.png";
import vk from "../../../assets/photos/vk.png";
import f_logo from "../../../assets/photos/f_logo.png";

export const Footer = () => {
  return (
    <>
      <footer
        className={`text-center text-lg-start text-muted ${styles.bg_footer}`}
      >
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 fs-5 text-black">
                  NFT
                </h6>
                <p className={styles.f_text}>Что такое NFT</p>
                <p className={styles.f_text}>Создайте NFT с нами</p>
                <p>
                  <span className="me-2">
                    <img src={twitter} alt="" />
                  </span>
                  <span>
                    <img src={vk} alt="" />
                  </span>
                </p>
              </div>

              <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 fs-5 text-black">
                  Компания
                </h6>
                <p className={styles.f_text}>О нас</p>
                <p className={styles.f_text}>Отправить запрос</p>
              </div>

              <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 fs-5 text-black">
                  Другое
                </h6>
                <p className={styles.f_text}>Условия использования</p>
                <p className={styles.f_text}>Политика конфиденциальности</p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4 d-flex flex-column justify-content-center align-items-center border-top border-black container mx-auto">
            <img className="w-auto " src={f_logo} alt="" />
        @ tnft.ru Company, Inc
        </div>
      </footer>
    </>
  );
};
