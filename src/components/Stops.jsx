export default function Stops(props) {
  return (
    <section
      className="grid grid-cols-1 gap-[30px] md:grid-cols-[36%,minmax(0,1fr)] md:gap-[40px]"
      classList={{ [props.className]: props.className }}
    >
      <div className="max-w-[320px]">
        {props.hasLegend && <h4 className="mb-5">Остановочные пункты</h4>}
        <div className="relative grid gap-[20px] pl-[18px]">
          <div className="absolute inset-y-0 left-[3px] w-px bg-primary" />

          <div className="relative flex justify-between gap-[20px]">
            <div
              className="absolute top-0 left-[-18px] h-[13px] w-[7px] bg-white
            before:absolute before:bottom-0 before:aspect-square before:w-full before:rounded-full before:bg-primary"
            />
            <div className="">
              <span className="block font-semibold">Кяхта</span>
              <span className="block text-[12px] opacity-50">автовокзал</span>
            </div>
          </div>

          {Array.from({ length: 3 }).map((_, i) => (
            <div className="flex justify-between gap-[20px] pl-[10px]">
              <div className="">
                <span className="block">Гусиноозерск</span>
                <span className="block text-[12px] opacity-50">
                  на трассе кафе «Лотос»
                </span>
              </div>
              <span>08:29</span>
            </div>
          ))}

          <div className="relative flex justify-between gap-[20px]">
            <div
              className="absolute bottom-0 top-[7px] left-[-18px] w-[7px] bg-white
            before:absolute before:top-0 before:aspect-square before:w-full before:rounded-full before:bg-primary"
            />
            <div className="">
              <span className="block font-semibold">Улан-Удэ</span>
              <span className="block text-[12px] opacity-50">автовокзал</span>
            </div>
            <b>10:30</b>
          </div>
        </div>
      </div>

      <div className="self-start overflow-hidden rounded">
        <iframe
          className="h-[350px] w-full"
          src="https://api-maps.yandex.ru/frame/v1/-/CVh7YBYg?lang=en_RU"
          frameborder="0"
        ></iframe>
      </div>
    </section>
  )
}
