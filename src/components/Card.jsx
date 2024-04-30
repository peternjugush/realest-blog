import { Link } from "react-router-dom";

const Card= () =>{
    return (
        <section>
            <div className="card">
                <h2>realestblog</h2>
                <img src="src\assets\staci-form-check.webp" className='cardimage '></img>
                <p></p>
                <button className="font-serif bg-blue-900 text-center mt-4 text-slate-50 hover:text-gray-300 border border-orange-500 rounded-lg">wanna read more?<Link to="/determinance" className='text-orange-700 hover:text-green-300 font-bold mb-5  sn:grid-cols-2'> ◙ Step #1: Determine your starting point <img className="size-full" src="src\assets\muppet-strength-training.gif" alt="" /></Link></button>
            </div>
        </section>
    )
}
export default Card;