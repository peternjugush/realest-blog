import {Link} from 'react-router-dom';

const  Navbar = () => {
    return ( 
        <nav className='bg-orange-800 py-4'>
            <div className='container max-auto flex justify-between items-center'>
            <Link to="/login" className='text-white hover:text-green-300'>        <img className="size-16" src="src\assets\Modern orange travel agency logo with icon.png" alt="" /></Link>
            <ul className='flex space-x-4'>
            <li>
            <Link to="/home" className='text-white hover:text-green-300'>Home</Link>
            </li>
            <li>
            <Link to="/about" className='text-white hover:text-green-300'>About</Link>
            </li>
            <li>
            <Link to="/" className='text-white hover:text-green-300'>Login</Link>
            </li>
            </ul>
            </div>
            
        </nav>
    )
}

export default Navbar;