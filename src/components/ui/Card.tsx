// components/ui/Card.tsx — thomasgoodman.me

'use client'

import React, { useState } from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  accentBar?: boolean
  lift?: boolean
  onClick?: () => void
}

export function Card({
  children,
  className,
  style,
  accentBar = true,
  lift = true,
  onClick,
}: CardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={className}
      style={{
        background: 'var(--color-bg-surface)',
        border: `1px solid ${hovered ? 'var(--color-border-default)' : 'var(--color-border-subtle)'}`,
        borderRadius: 'var(--radius-xl)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all var(--motion-base)',
        transform: hovered && lift ? 'translateY(-2px)' : 'none',
        boxShadow: hovered && lift ? 'var(--shadow-md)' : 'none',
        cursor: onClick ? 'pointer' : 'default',
        ...style,
      }}
    >
      {accentBar && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            background: 'var(--color-accent)',
            opacity: hovered ? 1 : 0,
            transition: 'opacity var(--motion-base)',
          }}
        />
      )}
      {children}
    </div>
  )
}
