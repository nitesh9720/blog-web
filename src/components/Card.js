const Card = (props) => {
    

    return (
        <>
            <div className="m-2 bg-slate-100 rounded-xl shadow overflow-hidden w-96  font-serif  " >
                <div className="flex-col p-5 min-h-fit" >
                    <span className="bg-blue-200 rounded-3xl text-base m-0 px-1 py-1 cursor-pointer mb-1">{props.tag}</span>
                <h4 className="font-bold mt-[10px]">
               {props.heading}
                </h4>
                    <p className="text-sm">{props.data}</p></div>
            </div>
        </>
    )
}
export default Card;