'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: React.ElementType
  priority?: boolean
}

let sharedObserver: IntersectionObserver | null = null
const pending = new Map<Element, () => void>()

function getObserver() {
  if (sharedObserver) return sharedObserver

  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        pending.get(entry.target)?.()
        pending.delete(entry.target)
        sharedObserver?.unobserve(entry.target)
      }
    },
    { threshold: 0.06, rootMargin: '0px 0px -3% 0px' },
  )

  return sharedObserver
}

function RevealStatic({ children, className, as: Tag = 'div' }: RevealProps) {
  return <Tag className={className}>{children}</Tag>
}

function RevealAnimated({ children, className, delay = 0, as: Tag = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const show = () => setVisible(true)
    pending.set(el, show)
    getObserver().observe(el)

    return () => {
      pending.delete(el)
      sharedObserver?.unobserve(el)
    }
  }, [])

  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn('reveal', visible && 'reveal-visible', className)}
    >
      {children}
    </Tag>
  )
}

export function Reveal({ priority = false, ...props }: RevealProps) {
  if (priority) return <RevealStatic {...props} />
  return <RevealAnimated {...props} />
}
