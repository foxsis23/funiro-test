

interface CardProps{
    title:string;
    text:string;
    price:string;
    img:string;
}

const Card = ({title,text,price,img}:CardProps) => {
    return(
        <div className="flex flex-col gap-4 bg-slate-100">
            <img src={img} alt="img" className="w-[280px] h-[300px]" />
            <div className="p-4 flex flex-col gap-2">
                <p className="text-xl font-medium">{title}</p>
                <p className="text-md text-slate-400">{text}</p>
                <p className="text-lg font-medium">{price}</p>
            </div>
        </div>
    )
}

export default Card;