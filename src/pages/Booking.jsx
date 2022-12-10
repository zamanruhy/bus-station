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

export default function Booking() {
  return (
    <>
      <Intro concise title="Бронь" />
      <Finder />
      <div className="booking pt-[60px] pb-[100px]">
        <div className="container">
          <h2 className="mb-[40px] max-w-[57ch] text-[26px] font-black uppercase md:mb-[50px] md:text-[28px]">
            Забронируйте билет online
          </h2>
          <div className="grid grid-cols-1 gap-x-[30px] gap-y-[60px] lg:grid-cols-[minmax(0,1fr)_26%] xl:gap-x-[50px]">
            <div className="">
              <div className="mb-[40px] flex flex-wrap items-center justify-between gap-x-[30px] gap-y-3 md:mb-[50px]">
                <h3 className="text-[20px] font-semibold">
                  Маршрут № 260 Кяхта — Улан-Удэ, 01.11.2022, 07:00
                </h3>
              </div>
              <Flight />
              <hr className="mt-[30px] mb-[50px]" />
              <form action="#" className="">
                <h4 className="mb-5 text-[20px] font-semibold">
                  Данные пассажира:
                </h4>
                <div className="grid gap-[50px]">
                  {Array.from({ length: 2 }).map((_, i) => (
                    <fieldset className="">
                      <legend className="mb-[10px]">Пассажир № {i + 1}</legend>
                      <div className="mb-5 grid grid-cols-1 gap-y-[16px] gap-x-[30px] md:grid-cols-3">
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
                      <div className="grid gap-[10px]">
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
                <div className="mt-[50px]">
                  <a
                    href="#"
                    className="flex items-center text-primary transition hover:opacity-80"
                  >
                    Добавить пассажира{' '}
                    <span className="ml-[10px] text-[16px] leading-none">
                      +
                    </span>
                  </a>
                </div>
                <hr className="my-[50px]" />
                <h4 className="mb-5 text-[20px] font-semibold">Выбор места:</h4>
                <div className="flex flex-col flex-wrap gap-[30px] sm:flex-row">
                  <div className="sm:w-[24%]">
                    <Input
                      variant="primary"
                      name="place"
                      type="number"
                      min={1}
                      required
                      placeholder="Место"
                    />
                  </div>
                  <div className="grow basis-0"></div>
                  <div className="flex w-full justify-center md:w-[26%]">
                    <div className="max-w-[340px]">
                      <img
                        className="aspect-[1.3] w-full rounded object-cover"
                        src="https://images.unsplash.com/photo-1557223562-6c77ef16210f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=470&q=80"
                        alt="#"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="mt-[5px] grid grid-cols-3 gap-[10px]">
                        {[
                          {
                            src: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80'
                          },
                          {
                            src: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80'
                          },
                          {
                            src: 'https://images.unsplash.com/photo-1520442922418-8211a6fe605c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80'
                          }
                        ].map(({ src }, i) => (
                          <img
                            className="aspect-[1.14] w-full rounded-[7px] object-cover"
                            src={src}
                            alt="#"
                            loading="lazy"
                            decoding="async"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="mt-[55px] flex items-center justify-center"
                  onclick="bookingModal.showModal()"
                >
                  <Button
                    class="min-w-[166px]"
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
            <aside className="grid content-start items-start gap-[30px]">
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
