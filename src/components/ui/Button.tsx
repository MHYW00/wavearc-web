import React from 'react'
import { motion } from 'framer-motion'
import { clsx } from 'clsx'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, onClick, disabled, type = 'button' }, ref) => {
    const variants = {
      primary: 'bg-white text-black hover:bg-gray-200 shadow-lg hover:shadow-xl',
      secondary: 'bg-transparent hover:bg-white/10 text-white border border-white/30',
      ghost: 'hover:bg-white/10 text-white',
      destructive: 'bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl'
    }

    const sizes = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-11 px-6',
      lg: 'h-12 px-8 text-lg'
    }

    return (
      <motion.button
        ref={ref}
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={clsx(
          'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
          variants[variant],
          sizes[size],
          className
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export default Button