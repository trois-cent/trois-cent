import { FC, ReactNode } from 'react'
import './styles.scss'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    text: string
    icon?: ReactNode
    variant: 'accent' | 'white' | 'off-white' | 'black'
    size?: 'small' | 'normal'
    width?: 'full' | 'auto'
    onClick?: () => void
    className?: string
}

export const Button: FC<ButtonProps> = ({ text, icon, variant, size = 'normal', width = 'auto', onClick, className, ...props }) => {
    return (
        <button
            className={`text-icon-button ${width === 'full' ? '100%' : 'max-content'} ${variant} ${className} ${size}`}
            onClick={onClick}
            {...props}
        >
            <div className="content" data-text={text}>
                {icon && <div className="icon-wrap">{icon}</div>}
                <div className="text">{text}</div>
            </div>
        </button>
    )
}
