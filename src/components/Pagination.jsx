import CaretLeftIcon from '../icons/caret-left.svg?component'
import CaretRightIcon from '../icons/caret-right.svg?component'

import './Pagination.css'

export default function Pagination() {
  return (
    <div class="pagination">
      <a href="#" className="pagination__end" classList={{ disabled: true }}>
        <CaretLeftIcon />В начало
      </a>

      <div className="pagination__items">
        <a href="#" className="pagination__item" classList={{ disabled: true }}>
          <CaretLeftIcon />
        </a>
        <a href="#" className="pagination__item" classList={{ active: true }}>
          1
        </a>
        <a href="#" className="pagination__item">
          2
        </a>
        <a href="#" className="pagination__item">
          3
        </a>
        {/* {Array.from({ length: 20 }).map((_) => (
          <a href="#" className="pagination__item">
            3
          </a>
        ))} */}
        <a href="#" className="pagination__item">
          <CaretRightIcon />
        </a>
      </div>

      <a href="#" className="pagination__end">
        В конец
        <CaretRightIcon />
      </a>
    </div>
  )
}
