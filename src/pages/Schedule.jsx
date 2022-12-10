import Button from '@/components/Button'
import Finder from '@/components/Finder'
import Intro from '@/components/Intro'
import Stops from '@/components/Stops'
import Weekdays from '@/components/Weekdays'

export default function Schedule() {
  return (
    <>
      <Intro concise title="Расписание рейсов" />
      <Finder />
      <div className="schedule pt-[60px] pb-[100px]">
        <div className="container">
          <h2 className="mb-[40px] max-w-[57ch] text-[26px] font-black uppercase md:mb-[50px] md:text-[28px]">
            Расписание и карта междугородних автобусов Республики Бурятия
          </h2>
          <div className="grid grid-cols-1 gap-x-[30px] gap-y-[60px] lg:grid-cols-[30%_minmax(0,1fr)]">
            <aside className="">
              <h3 className="mb-[40px] text-[20px] font-semibold md:mb-[50px]">
                Выберите маршрут
              </h3>
              <div className="rounded shadow">
                <div className="grid grid-cols-[clamp(50px,20%,100px)_minmax(0,1fr)] border-b border-[#323232]/10 font-semibold">
                  <span className="px-5 pt-[16px] pb-[10px] sm:pl-7">№</span>
                  <span className="px-5 pt-[16px] pb-[10px]">Маршрут</span>
                </div>
                <div className="scrollbar max-h-[50vh] overflow-y-auto pb-[10px] lg:max-h-[615px]">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <>
                      <a
                        href="#"
                        className="grid grid-cols-[clamp(50px,20%,100px)_minmax(0,1fr)] transition hover:bg-primary-lightest/10"
                        classList={{
                          'bg-primary-lightest/[0.15] font-semibold': i === 1
                        }}
                      >
                        <span className="px-5 py-[10px] sm:pl-7">010</span>
                        <span className="px-5 py-[10px]">Кяхта — Наушки</span>
                      </a>
                      <a
                        href="#"
                        className="grid grid-cols-[clamp(50px,20%,100px)_minmax(0,1fr)] transition hover:bg-primary-lightest/10"
                      >
                        <span className="px-5 py-[10px] sm:pl-7">301/ 302</span>
                        <span className="px-5 py-[10px]">
                          Улан-Удэ — Максимиха — Усть-Баргузин
                        </span>
                      </a>
                    </>
                  ))}
                </div>
              </div>
            </aside>
            <div className="">
              <div className="mb-[40px] flex flex-wrap items-center justify-between gap-x-[30px] gap-y-3 md:mb-[50px]">
                <h3 className="text-[20px] font-semibold">
                  Маршрут № 260 Кяхта — Улан-Удэ
                </h3>
                <span className="text-[14px] opacity-50">
                  Ежедневный маршрут
                </span>
              </div>
              <Weekdays className="mb-[50px]" />
              <div className="mb-[50px] grid gap-x-[30px] gap-y-[40px] md:grid-cols-[auto_minmax(0,1fr)]">
                <div className="">
                  <h4 className="mb-5">Дата</h4>
                  <time className="block w-fit min-w-[166px] justify-center rounded border border-current p-[14px] text-center">
                    01.11.2022
                  </time>
                </div>
                <div className="">
                  <h4 className="mb-5">Время отправления</h4>
                  <div className="grid grid-cols-[repeat(auto-fill,minmax(68px,1fr))] gap-[20px] sm:gap-[30px]">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <a
                        href="#"
                        className="flex items-center justify-center rounded border border-[#323232]/10 p-[14px] text-center transition hover:border-[#323232]/30 [&.active]:border-[#323232]"
                        classList={{ active: i === 1 }}
                      >
                        07:00
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <Stops hasLegend />
              <div className="mt-[30px] flex flex-wrap items-center justify-between gap-y-[20px] gap-x-[30px]">
                <span className="font-semibold">
                  Маршрут № 260 Кяхта — Улан-Удэ, 01.11.2022, 08:00
                </span>
                <Button
                  as="a"
                  href="#"
                  variant="primary"
                  size="md"
                  class="min-w-[264px]"
                >
                  Выбрать
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
