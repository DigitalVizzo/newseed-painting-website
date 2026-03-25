'use client'

import { motion } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'

type AnimationType = 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scaleIn' | 'fadeIn'

const variants = {
  fadeUp: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
  fadeLeft: { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
  fadeRight: { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } },
  scaleIn: { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } },
  fadeIn: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
}

interface Props extends Omit<HTMLMotionProps<'div'>, 'variants'> {
  animation?: AnimationType
  delay?: number
  duration?: number
  children: React.ReactNode
}

export default function AnimateOnScroll({
  animation = 'fadeUp',
  delay = 0,
  duration = 0.7,
  children,
  ...props
}: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={variants[animation]}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerChildren({
  children,
  staggerDelay = 0.1,
  ...props
}: {
  children: React.ReactNode
  staggerDelay?: number
} & Omit<HTMLMotionProps<'div'>, 'variants'>) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, ...props }: { children: React.ReactNode } & Omit<HTMLMotionProps<'div'>, 'variants'>) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
