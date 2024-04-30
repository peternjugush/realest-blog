import item from "./item";

const Itemcontainer = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 ig:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
            <item li/>
            <item />
            <item />
            <item />
        </div>
    )
}

export default Itemcontainer;