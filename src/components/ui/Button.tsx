// components/ui/Button.tsx — thomasgoodman.me

import React from 'react'
import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  external?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  'aria-label'?: string
}

const baseStyles: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  fontFamily: 'var(--font-heading)',
  fontWeight: 600,
  borderRadius: 'var(--radius-md)',
  border: 'none',
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'all var(--motion-base)',
  whiteSpace: 'nowrap',
}

const variants: Record<string, React.CSSProperties> = {
  primary: {
    background: 'var(--color-accent)',
    color: 'var(--color-text-inverse)',
  },
  outline: {
    background: 'transparent',
    color: 'var(--color-accent)',
    border: '1.5px solid var(--color-accent)',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--color-text-secondary)',
    border: 'none',
  },
}

const sizes: Record<string, React.CSSProperties> = {
  sm: { fontSize: 'var(--text-xs)',  padding: '6px 14px' },
  md: { fontSize: 'var(--text-base)', padding: '10px 22px' },
  lg: { fontSize: 'var(--text-lg)',  padding: '14px 28px' },
}

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  external = false,
  className,
  type = 'button',
  disabled,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const style: React.CSSProperties = {
    ...baseStyles,
    ...variants[variant],
    ...sizes[size],
    opacity: disabled ? 0.5 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget
    if (variant === 'primary') {
      el.style.background = 'var(--color-accent-hover)'
      el.style.boxShadow = 'var(--shadow-glow)'
    } else if (variant === 'outline') {
      el.style.background = 'var(--color-accent-subtle)'
    } else {
      el.style.color = 'var(--color-text-primary)'
    }
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget
    if (variant === 'primary') {
      el.style.background = 'var(--color-accent)'
      el.style.boxShadow = 'none'
    } else if (variant === 'outline') {
      el.style.background = 'transparent'
    } else {
      el.style.color = 'var(--color-text-secondary)'
    }
  }

  if (href) {
    if (external || href.startsWith('http') || href.startsWith('mailto')) {
      return (
        <a
          href={href}
          target={external || href.startsWith('http') ? '_blank' : undefined}
          rel={external || href.startsWith('http') ? 'noopener noreferrer' : undefined}
          style={style}
          aria-label={ariaLabel}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={className}
        >
          {children}
        </a>
      )
    }
    return (
      <Link
        href={href}
        style={style}
        aria-label={ariaLabel}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={className}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={style}
      aria-label={ariaLabel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </button>
  )
}
