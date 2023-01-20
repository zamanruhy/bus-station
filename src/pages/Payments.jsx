import visaImg from '../images/visa.png?png'
import sberbankOnlineImg from '../images/sberbank-online.png?png'
import sberbankTerminalImg from '../images/sberbank-terminal.png?png'
import sberbankImg from '../images/sberbank.png?png'

import Finder from '@/components/Finder'
import Intro from '@/components/Intro'
import Payment from '@/components/Payment'

import './Payments.css'

export default function Payments() {
  return (
    <>
      <Intro concise title="Как оплатить" />
      <Finder />
      <div className="payments">
        <div className="container">
          <div className="payments__layout">
            <div className="payments__main">
              <h2 className="payments__title title">
                Как оплатить забронированые билеты
              </h2>
              <div className="payments__list">
                <Payment
                  title={
                    <>
                      Оплатить картой Visa, MasterCard, МИР <br />
                      <span className="opacity-50">(карты любых банков)</span>
                    </>
                  }
                  text={`C использованием надёжного и безопасного сервиса от АО «Альфа банк» или ПАО «СберБанк»`}
                  src={visaImg}
                  hasDesc={true}
                />
                <Payment
                  title={
                    <>
                      Оплатить со счета ПАО «Сбербанк» с&nbsp;использованием
                      сервиса «Сбербанк Онлайн»
                    </>
                  }
                  text={`Любые карты выпущенные банком ПАО «СберБанк»: Visa, Mastercard, Maestro, МИР`}
                  src={sberbankOnlineImg}
                  hasDesc={true}
                />
                <Payment
                  title={
                    <>
                      Оплатить в ближайшем терминале самообслуживания ПАО
                      «СберБанк»
                    </>
                  }
                  text={`Подробная инструкция по оплате в терминалах ПАО «СберБанк» (с использованием карт, наличными)`}
                  src={sberbankTerminalImg}
                  hasDesc={true}
                />
                <Payment
                  title={
                    <>
                      Оплата в ближайших отделениях ПАО «СберБанк» через
                      оператора банка
                    </>
                  }
                  text={`Для оплаты заказа в отделениях ПАО «СберБанк» через оператора — вам необходимо предварительно
                  забронировать билет и запомнить номер заказа. Оплачивая заказ, сообщите оператору ИНН организации 3812119333
                  (ООО «онлайнСервис») и номер забронированного заказа`}
                  src={sberbankImg}
                  hasDesc={false}
                />
                <Payment
                  title={
                    <>
                      Оплата по средствам мобильного банка или водителю <br />
                      <span className="opacity-50">
                        (при наличии возможности)
                      </span>
                    </>
                  }
                  text={`Для оплаты заказа в отделениях ПАО «СберБанк» через оператора — вам необходимо предварительно
                  забронировать билет и запомнить номер заказа. Оплачивая заказ, сообщите оператору ИНН организации 3812119333
                  (ООО «онлайнСервис») и номер забронированного заказа`}
                  hasDesc={false}
                />
                <div className="payments__locations">
                  Нажмите <a href="#">сюда</a>, что бы ознакомиться с адресами
                  касс
                </div>
              </div>
            </div>
            <aside className="payments__side"></aside>
          </div>
        </div>
      </div>
    </>
  )
}
