type Props = {
    icon: React.ReactNode
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    position?: string
}

const IconButton = ({ icon, onClick, position = 'static' }: Props) => {
    return (
        <button onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            onClick(event)} className={`bg-transparent hover:bg-gray-200 p-2 rounded-full ${position}`} >
            {icon}
        </button>
    );
};

export default IconButton;