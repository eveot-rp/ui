import { FC, PropsWithChildren } from 'react'
import './style.scss'

interface ButtonsGroupProps {}

export const ButtonsGroup: FC<PropsWithChildren<ButtonsGroupProps>> = ({ children }) => {
  return (
    <div className="ev-buttons-group">
      { children }
    </div>
  )
}