import { ReactElement } from 'react'
import './Title.css'

interface Props {
    children: ReactElement
}

export default function Title({children}: Props) {
  return (
    <div className='title'>
        {children}
    </div>
  )
}
