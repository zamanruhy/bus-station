import Attention from '@/components/Attention'
import Finder from '@/components/Finder'
import Flight from '@/components/Flight'
import Intro from '@/components/Intro'
import Input from '@/components/Input'

import AttentionIcon from '../icons/attention.svg?component'
import GirlIcon from '../icons/girl.svg?component'
import LicenseIcon from '../icons/license.svg?component'
import BagIcon from '../icons/bag.svg?component'

import Radio from '@/components/Radio'
import Select from '@/components/Select'
import Button from '@/components/Button'
import BookingDone from '@/components/BookingDone'

import seatsImg from '../images/seats.jpg?jpg'

import './Booking.css'
import Image from '@/components/Image'
import Gallery from '@/components/Gallery'

export default function Booking() {
  return (
    <>
      <Intro concise title="Бронь" />
      <Finder />
      <div className="booking">
        <div className="container">
          <h2 className="booking__title title">Забронируйте билет online</h2>
          <div className="booking__layout">
            <div className="booking__main">
              <div className="booking__headline">
                <h3 className="booking__headline-title">
                  Маршрут № 260 Кяхта — Улан-Удэ, 01.11.2022, 07:00
                </h3>
              </div>
              <Flight />
              <hr className="mt-[30px] mb-[50px]" />
              <form action="#" className="">
                <h4 className="booking__subtitle">Данные пассажира:</h4>
                <div className="booking__fieldsets">
                  {Array.from({ length: 2 }).map((_, i) => (
                    <fieldset className="booking__fieldset">
                      <legend className="mb-[10px]">Пассажир № {i + 1}</legend>
                      <div className="booking__inputs">
                        <Input
                          variant="primary"
                          name="name"
                          required
                          placeholder="Имя"
                        />
                        <Input
                          variant="primary"
                          name="phone"
                          required
                          placeholder="Телефон"
                        />
                        <Select
                          variant="primary"
                          name="document"
                          required
                          placeholder="Документ"
                          items={[
                            { value: 1, text: 'Паспорт' },
                            { value: 2, text: 'ИНН' },
                            { value: 3, text: 'Снилс' }
                          ]}
                        />
                      </div>
                      <div className="booking__radios">
                        <Radio
                          name="age"
                          value="adult"
                          label={
                            <>
                              Взрослый{' '}
                              <span className="opacity-50">
                                (для пассажиров 12 лет и старше)
                              </span>
                            </>
                          }
                        />
                        <Radio
                          name="age"
                          value="child"
                          label={
                            <>
                              Детский{' '}
                              <span className="opacity-50">
                                (для пассажиров до 12 лет)
                              </span>
                            </>
                          }
                        />
                      </div>
                    </fieldset>
                  ))}
                </div>
                <div className="booking__add-wrap">
                  <a href="#" className="booking__add">
                    Добавить пассажира <span>+</span>
                  </a>
                </div>
                <hr className="my-[50px]" />

                <h4 className="booking__subtitle">Выбор места:</h4>
                <div className="booking__sel">
                  <div className="booking__sel-left">
                    <Input
                      variant="primary"
                      name="place"
                      type="number"
                      min={1}
                      required
                      placeholder="Место"
                    />
                  </div>
                  <div className="booking__seats">
                    <Image
                      src={seatsImg}
                      alt="#"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="booking__gallery">
                    <div className="booking__gallery-inner">
                      <Gallery />
                    </div>
                  </div>
                </div>
                <div className="booking__footer">
                  {/* onclick="bookingModal.showModal()" */}
                  <Button
                    class="booking__button"
                    type="submit"
                    variant="primary"
                    size="md"
                  >
                    Забронировать
                  </Button>
                </div>
              </form>
              <BookingDone />
            </div>
            <aside className="booking__side">
              <Attention Icon={AttentionIcon} variant="blue">
                <p>В одном заказе вы можете выбрать до 4-х мест</p>
                <p>
                  Перевозка детей производится только в сопровождении взрослых
                </p>
              </Attention>
              <Attention Icon={GirlIcon} variant="yellow">
                <p>
                  Приобретая детский билет, будьте готовы по первому требованию
                  предоставить водителю документ, подтверждающий возраст ребeнка
                  (свидетельство о рождении)
                </p>
              </Attention>
              <Attention Icon={LicenseIcon} variant="gray">
                <p>Указывать персональные данные необязательно.</p>
                <p>
                  Но если вам требуется предоставить билет для отчётности в
                  организацию, рекомендуем указать их
                </p>
              </Attention>
              <Attention Icon={BagIcon} variant="blue">
                <p>
                  Перевозчик (на выбранном рейсе) установил, что продажу
                  квитанций на провоз платной ручной клади осуществляет водитель
                  в момент посадки
                </p>
              </Attention>
              <Attention Icon={AttentionIcon} variant="blue">
                <p>Для выбора или отмены места кликнете на него</p>
                <p>
                  В случае замены автобуса расположение мест в подменном
                  автобусе может отличаться от представленной схемы
                </p>
              </Attention>
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
