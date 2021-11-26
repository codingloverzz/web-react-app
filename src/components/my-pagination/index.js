import React, { memo } from 'react'
import { Pagination } from 'antd';
export default memo(function MyPagination(props) {
  const { defaultPageSize, total, pageChangeCallback, current } = props
  const pageChange = (e) => {
    pageChangeCallback(e)
  }
  return (
    <div>
      <Pagination
        current={current}
        onChange={e => pageChange(e)}
        showSizeChanger={false}
        defaultPageSize={defaultPageSize}
        total={total}
      />

    </div>
  )
})
