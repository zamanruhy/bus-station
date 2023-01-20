import cardImg from '../images/card.jpg?jpg'
import CaretIcon from '../icons/caret.svg?component'

import percentImg from '../images/percent.svg?metadata'
import eyeImg from '../images/eye.svg?metadata'
import shieldImg from '../images/shield.svg?metadata'
import crossImg from '../images/cross.svg?metadata'

import Image from './Image'

import './Payment.css'

export default function Payment(props) {
  return (
    <article class="payment">
      <div className="payment__content">
        <div className="payment__head">
          <div class="payment__caption">
            <h2 className="payment__title">{props.title}</h2>
            <p className="payment__text">{props.text}</p>
          </div>
          {props.src ? (
            <Image class="payment__img" src={props.src} alt="" />
          ) : (
            <div class="payment__placeholder" />
          )}
        </div>
      </div>
      {props.hasDesc && (
        <details class="payment__detials group">
          <summary class="payment__pointer">
            <CaretIcon class="payment__pointer-icon" />
          </summary>
          <div>
            <hr class="payment__hr" />
            <div className="payment__expl">
              <div className="">
                <h3 className="payment__expl-title">
                  Порядок ввода данных банковской карты
                </h3>
                <p className="payment__expl-text">
                  Для корректного ввода необходимо внимательно и точно, соблюдая
                  последовательность цифр и букв, ввести данные так, как они
                  указаны на вашей карте:
                </p>
                <Image class="" src={cardImg} alt="" loading="lazy" />
              </div>
              <ul className="payment__expl-list">
                <li className="payment__expl-item">
                  <div className="payment__expl-num">1</div>
                  <div className="payment__expl-def">
                    <h3 className="payment__expl-subtitle">Номер карты</h3>
                    <p className="payment__expl-info">
                      Как правило, указан на лицевой стороне банковской карты и
                      состоит из 16-и цифр. Например: 0123 4567 8901 2345
                    </p>
                  </div>
                </li>
                <li className="payment__expl-item">
                  <div className="payment__expl-num">2</div>
                  <div className="payment__expl-def">
                    <h3 className="payment__expl-subtitle">
                      Срок действия карты
                    </h3>
                    <p className="payment__expl-info">
                      Как правило, указан на лицевой стороне банковской карты —
                      месяц и год, до которого действительна карта. Срок
                      действия карты вводится цифрами. Например, 11 (вводится в
                      поле месяца) и 17 (вводится в поле года), что означает,
                      что карта действительна до ноября 2017 года
                    </p>
                  </div>
                </li>
                <li className="payment__expl-item">
                  <div className="payment__expl-num">3</div>
                  <div className="payment__expl-def">
                    <h3 className="payment__expl-subtitle">Владелец карты</h3>
                    <p className="payment__expl-info">
                      Как правило, указан на лицевой стороне банковской карты на
                      английском языке заглавными буквами. Например, IVAN IVANOV
                    </p>
                  </div>
                </li>
                <li className="payment__expl-item">
                  <div className="payment__expl-num">4</div>
                  <div className="payment__expl-def">
                    <h3 className="payment__expl-subtitle">
                      CVV2 или CVC2 код карты
                    </h3>
                    <p className="payment__expl-info">
                      Как правило, указан на обратной стороне банковской карты и
                      состоит из 3-х цифр. Например, 123
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <hr class="payment__hr" />
            <div className="payment__facts">
              <div className="payment__fact">
                <Image class="payment__fact-img" src={percentImg} alt="" />
                <h3 className="payment__fact-title">
                  Оплата предоставляется без комиссии
                </h3>
                <p>
                  Платежи осуществляются перечислением денежных средств с
                  банковских карт Visa и Mastercard при наличии возможности
                  совершения интернет-платежей, предоставленных Вашим банком,
                  выпустившим банковскую карту. <br />О наличии возможности
                  совершения интернет-платежей с использованием банковской
                  карты, вы можете узнать, обратившись в банк. Услуга оплаты
                  осуществляется в соответствии с Правилами международных
                  платежных систем на принципах соблюдения конфиденциальности и
                  безопасности совершения платежа, для чего используются самые
                  современные методы проверки, шифрования и передачи данных по
                  закрытым каналам связи. Ввод данных банковской карты
                  осуществляется на защищенной платежной странице банка —
                  партнера, предоставляющего услугу. Банком-партнером
                  Автовокзал-онлайн.РФ является ОАО «Альфа-Банк» и ПАО
                  «СберБанк».
                </p>
              </div>

              <div className="payment__fact">
                <Image class="payment__fact-img" src={eyeImg} alt="" />
                <h3 className="payment__fact-title">Конфиденциальность</h3>
                <p>
                  Услуга оплаты через интернет предоставляется в соответствии с
                  Правилами международных платежных систем на принципах
                  соблюдения конфиденциальности и безопасности совершения
                  платежа, для чего используются самые современные методы
                  проверки, шифрования и передачи данных по закрытым каналам
                  связи. Ввод данных банковской карты осуществляется на
                  защищенной платежной странице банка ОАО «Альфа-Банк» и ПАО
                  «СберБанк».
                </p>
              </div>

              <div className="payment__fact">
                <Image class="payment__fact-img" src={shieldImg} alt="" />
                <h3 className="payment__fact-title">Безопасность</h3>
                <p>
                  Если ваша банковская карта поддерживает технологию 3D Secure,
                  для осуществления платежа, вам необходимо будет пройти
                  дополнительную проверку в банке, выпустившем Вашу карту. Вид
                  проверки зависит от банка, как правило (но не всегда) это
                  дополнительный пароль, который отправляется в СМС на номер
                  телефона, привязанный к карте.
                </p>
              </div>

              <div className="payment__fact">
                <Image class="payment__fact-img" src={crossImg} alt="" />
                <h3 className="payment__fact-title">
                  Случаи отказа в совершении платежа:
                </h3>
                <ul class="payment__content-list">
                  <li>
                    Банковская карта не предназначена для совершения платежей
                    через интернет, о чем можно узнать, осведомившись в Вашем
                    банке
                  </li>
                  <li>Данные банковской карты введены неверно</li>
                  <li>
                    Истек срок действия банковской карты. Срок действия карты,
                    как правило, указан на лицевой стороне карты (это месяц и
                    год, до которого действительна карта). Подробнее о сроке
                    действия карты вы можете узнать, обратившись в банк,
                    выпустивший банковскую карту
                  </li>
                  <li>
                    Недостаточно средств для оплаты на банковской карте.
                    Подробнее о наличии средств на банковской карте вы можете
                    узнать, обратившись в банк, выпустивший банковскую карту
                  </li>
                  <li>
                    Превышен установленный лимит операций за день. Сумма
                    ежедневного лимита для всех операций определяется
                    банком-партнером
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </details>
      )}
    </article>
  )
}
