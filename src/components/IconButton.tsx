import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

type Tone = 'soft' | 'ghost' | 'clay'

type SharedProps = {
  children: ReactNode
  className?: string
  tone?: Tone
  active?: boolean
  'aria-label': string
}

type IconButtonAsButton = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'> & {
    to?: undefined
  }

type IconButtonAsLink = SharedProps &
  Omit<LinkProps, 'children' | 'className'> & {
    to: string
  }

type IconButtonProps = IconButtonAsButton | IconButtonAsLink

const toneClass: Record<Tone, string> = {
  soft:
    'border border-sand bg-sand text-ink hover:border-sand-deep hover:bg-sand-deep hover:text-clay',
  ghost:
    'border border-transparent bg-transparent text-muted hover:border-sand hover:bg-sand hover:text-ink',
  clay:
    'border border-clay bg-clay text-paper hover:bg-clay/90',
}

const activeClass =
  'border-clay bg-clay-soft text-clay hover:border-clay hover:bg-clay-soft hover:text-clay'

const baseClass =
  'relative inline-flex size-9 items-center justify-center rounded-full transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/35'

export default function IconButton(props: IconButtonProps) {
  const {
    children,
    className = '',
    tone = 'soft',
    active = false,
    ...rest
  } = props

  const classes = `${baseClass} ${active ? activeClass : toneClass[tone]} ${className}`

  if ('to' in rest && rest.to) {
    const { to, ...linkRest } = rest
    return (
      <Link to={to} className={classes} {...linkRest}>
        {children}
      </Link>
    )
  }

  const buttonRest = rest as IconButtonAsButton
  return (
    <button type="button" className={classes} {...buttonRest}>
      {children}
    </button>
  )
}
