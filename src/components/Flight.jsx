import CaretIcon from '../icons/caret.svg?component'
import bagImg from '../images/bag.jpg'
import dogImg from '../images/dog.jpg'
import Button from './Button'
import Stops from './Stops'

export default function Flight(props) {
  return (
    <article className="flight rounded p-5 shadow">
      <div className="grid grid-cols-1 gap-x-[20px] gap-y-[25px] md:grid-cols-[53%_minmax(0,1fr)]">
        <div className="relative grid grid-cols-[auto_minmax(0,1fr)_auto] gap-x-[30px]">
          <div className="absolute inset-x-0 top-[57px] z-[-1] h-px bg-primary [.flight:has(details[open])_&]:hidden" />
          <div className="max-w-[90px] md:w-[90px]">
            <div className="mb-[25px] whitespace-nowrap text-[12px] opacity-50">
              Вт, 01 нояб
            </div>
            <div>
              <div className="relative w-fit text-[20px] font-semibold text-primary">
                <div
                  className="absolute left-0 top-1/2 right-[-18px] z-[-1] h-[7px] -translate-y-1/2 bg-white before:absolute
                before:top-0 before:right-0 before:aspect-square before:h-full before:rounded-full before:bg-primary max-sm:before:hidden [.flight:has(details[open])_&]:hidden"
                />
                07:00
              </div>
              <div className="">Кяхта</div>
              <div className="text-[12px] opacity-50">автовокзал</div>
            </div>
          </div>
          <div className="mt-[57px] -translate-y-1/2 self-start justify-self-center rounded border-[5px] border-white bg-primary py-0.5 px-2 text-center text-[12px] text-white sm:px-3 md:translate-x-[-19px]">
            3&nbsp;ч. 30&nbsp;мин.
          </div>
          <div className="max-w-[90px] md:w-[90px]">
            <div className="mb-[25px] whitespace-nowrap text-[12px] opacity-50">
              Вт, 01 нояб
            </div>
            <div>
              <div className="relative text-[20px] font-semibold text-primary">
                <div
                  className="absolute right-0 top-1/2 left-[-18px] z-[-1] h-[7px] -translate-y-1/2 bg-white before:absolute
                before:top-0 before:left-0 before:aspect-square before:h-full before:rounded-full before:bg-primary max-sm:before:hidden [.flight:has(details[open])_&]:hidden"
                />
                10:30
              </div>
              <div className="">Улан-Удэ</div>
              <div className="text-[12px] opacity-50">автовокзал</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-[30px] gap-x-[30px] md:grid-cols-[auto_auto_minmax(0,1fr)]">
          <div className="flex gap-x-[30px] md:contents">
            <div className="mt-3 grid content-start gap-3 md:mt-[48px]">
              <img
                className="w-[17px]"
                src={bagImg}
                width="17"
                height="17"
                alt="#"
                loading="lazy"
                decoding="async"
              />
              <img
                className="w-[17px]"
                src={dogImg}
                width="17"
                height="17"
                alt="#"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="mt-1 max-w-[90px] md:mt-[42px]">
              <div className="mb-2">Автобус</div>
              <div className="whitespace-nowrap text-[12px]">
                <div className="opacity-50">Мест: 15</div>
                <div className="">
                  {props.variant === 'seats' ? (
                    <>
                      <span className="opacity-50">Ваше место:</span>{' '}
                      <b>1, 2</b>
                    </>
                  ) : (
                    <>
                      <span className="opacity-50">Свободных:</span> 7
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[450px]">
            <div
              className="mb-[6px]"
              classList={{ 'mt-1 md:mt-[42px]': props.variant !== 'choice' }}
            >
              573,00&nbsp;₽{' '}
              <span className="text-[12px] opacity-50">
                (серв.сбор 23,00&nbsp;₽)
              </span>
            </div>
            <div className="md:min-h-[42px]">
              {props.variant === 'choice' && (
                <Button
                  class="my-[14px] w-full"
                  as="a"
                  href="#"
                  variant="primary"
                  size="md"
                >
                  Выбрать
                </Button>
              )}
              {props.variant === 'seats' && (
                <>
                  Итого: <br />
                  1146,00&nbsp;₽{' '}
                  <span className="text-[12px] opacity-50">
                    (серв.сбор 46,00&nbsp;₽)
                  </span>
                </>
              )}
            </div>
            <span className="mt-[6px] block text-[12px] opacity-50">
              Льгот нет
            </span>
          </div>
        </div>
      </div>
      <details className="group mt-5 md:mt-3">
        <summary className="flex w-fit cursor-pointer items-center">
          Остановочные пункты{' '}
          <CaretIcon className="relative top-px ml-1.5 w-3 shrink-0 fill-current group-open:top-0 group-open:rotate-180" />
        </summary>
        <Stops className="mt-5" />
      </details>
    </article>
  )
}
