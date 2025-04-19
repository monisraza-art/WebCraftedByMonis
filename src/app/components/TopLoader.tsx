'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import '../styles/nprogress-custom.css'

NProgress.configure({ showSpinner: false })

export default function TopLoader(): null {
  const pathname = usePathname()

  useEffect(() => {
    NProgress.start()
    NProgress.done()
  }, [pathname])

  return null
}
