import { FC, ReactNode } from 'react'
import './styles.scss'
import { ArrowRight } from 'lucide-react'

type ButtonProps = {
    text: string
    icon?: ReactNode
    variant: 'accent' | 'white' | 'off-white' | 'black'
    width?: 'full' | 'auto'
    onClick?: () => void
    className?: string
}

export const Button: FC<ButtonProps> = ({ text, icon, variant, width = 'auto', onClick, className }) => {
    return (
        <button
            className={`text-icon-button ${width === 'full' ? '100%' : 'max-content'} ${variant} ${className}`}
            onClick={onClick}
        >
            <div className="content" data-text={text}>
                {icon && <div className="icon-wrap">{icon}</div>}
                <div className="text">{text}</div>
            </div>
        </button>
    )
}
