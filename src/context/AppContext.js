import React, { useState } from 'react'

const AppContext = () => {
    const [limitPage, setLimitPage]= useState(2)
  return {
    setLimitPage,
    limitPage
  }
}

export default AppContext