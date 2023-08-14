import { Link } from 'react-router-dom'

export function Button({ children, disabled, to, type, onClick }) {
  const base =
    'font-semibold text-sm tracking-wide uppercase transition-colors duration-300 bg-yellow-400 rounded-full disabled:cursor-now-allowed text-stone-800 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2'

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    round: base + ' px-2.5 py-1 md:px-5 md:px-3.5 md:py-2 text-sm',
    secondary:
      'font-semibold text-sm tracking-wide uppercase transition-colors duration-300 bg-transparent px-4 py-2.5 md:px-6 md:py-3.5  border-2 border-stone-300 rounded-full disabled:cursor-now-allowed text-stone-400 hover:bg-stone-300 focus:bg-stone-300 hover:text-stone-800 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2',
  }

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    )

  if (onClick)
    return (
      <button disabled={disabled} onClick={onClick} className={styles[type]}>
        {children}
      </button>
    )

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  )
}
