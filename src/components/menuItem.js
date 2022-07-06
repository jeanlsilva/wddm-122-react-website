function MenuItem(props) {
    return (
        <div className="bg-white rounded-xl flex flex-col items-center justify-between px-4 hover:bg-gray-300 transition-all duration-500 cursor-pointer">
            <h2 className="text-2xl font-bold py-4">{props.title}</h2>
            <img src={props.img} alt="img" className="h-48 w-full object-cover" />
            <p className="py-4">{props.description}</p>
            <p className="py-4 text-2xl font-bold">{`$ ${props.price}`}</p>
        </div>
    )
}

export default MenuItem;