import { Icon, IconProps } from '@yamada-ui/react'
import { forwardRef } from 'react'

export const ColorPalette = forwardRef<SVGSVGElement, IconProps>(
  ({ boxSize = '1.6em', ...rest }, ref) => {
    return (
      <Icon
        ref={ref}
        boxSize={boxSize}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
        fill='none'
        {...rest}
      >
        <path d='M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25' />
        <path d='M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
        <path d='M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
        <path d='M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
      </Icon>
    )
  },
)

ColorPalette.displayName = 'ColorPalette'
