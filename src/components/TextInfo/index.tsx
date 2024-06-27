import { Icon, IconName } from '@components/Icon'
import { FC, PropsWithChildren } from 'react'
import './style.scss'

export interface TextInfoProps {
  active?: boolean
  disabled?: boolean
  iconLeft?: IconName
  iconRight?: IconName
  onClick?: () => void
}

export const TextInfo: FC<PropsWithChildren<TextInfoProps>> = ({ active, disabled, iconLeft, iconRight, children, onClick }) => {

  const _onClick = () => {
    if (onClick && !disabled) {
      onClick()
    }
  }

  return (
    <div className="ev-text-info" data-active={active} data-disabled={disabled} onClick={ _onClick }>
      { iconLeft &&  <Icon name={ iconLeft } /> }
      <p>{ children }</p>
      { iconRight && <Icon name={ iconRight } /> }
    </div>
  )
}