type Props = {
    className?: string; 
    label: string;
    valueInput: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const PrimaryInput = ({
    className,
    label,
    valueInput,
    onChange
}: Props) => {
    return(
        <div className="w-full h-full">
            <input className="w-[95%] h-full bg-[#212424] border-2 border-[#a4a4a4] rounded-md pl-4" type="text" placeholder={label} value={valueInput} onChange={onChange}/>
        </div>
    )
}