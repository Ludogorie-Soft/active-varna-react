import { Link } from "react-router-dom";
import fundImg from "../../images/Active-citizens-fund.png";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-container-info">
          <h1>Информация</h1>
          <p>
            Този сайт е създаден по проект "Механизъм за кризисно реагиране на
            гражданския сектор в община Варна" с финансовата подкрепа на
            Исландия, Лихтенщайн и Норвегия по Фонд Активни граждани България в
            рамките на Финансовия механизъм на Европейското икономическо
            пространство.
          </p>
          <h1>
            Цялата отговорност за съдържанието се носи от Фондация "Социалната
            чайна".
          </h1>
        </div>
        <div className="footer-container-address">
          <h1>Адрес</h1>
          <Link to="www.activecitizensfund.bg">www.activecitizensfund.bg</Link>
          <img src={fundImg} alt="Active citizens fund" />
        </div>
      </div>
      <div className="footer-contacts">
        <ul>
          <li>Контакт</li>
          <li>Политика за поверителност</li>
          <li>Условия за ползване</li>
        </ul>
      </div>
      <p>Copyright ©2024 All rights reserved</p>
    </footer>
  );
};
