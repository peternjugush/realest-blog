import { Link } from "react-router-dom"

const OtherImportance = () => {
  return (
<section>
<div className="card">
    <h2>▼...▼...▼....▼....▼....▼</h2>
    <p></p>
    <button className=" font-serif bg-blue- text-center mt-4 text-slate-60 hover:text-gray-300 border border-orange-600 rounded-lg">Book a Holiday!<Link to="/loose" className='text-orange-700 hover:text-green-300 font-bold mb-5 '> ◙ Step #2: “What exercises should I do to lose weight (or build muscle)?”<img src="src\assets\staci-form-check.webp" className=''></img> </Link></button>  
</div>      
</section>

)
}

export default OtherImportance