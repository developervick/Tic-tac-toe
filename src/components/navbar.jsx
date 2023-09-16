import { Link } from 'react-router-dom'

function HomeNavbar() {
  return (
    <>
    <div className="bg-zinc-900 flex">
        <ul className="flex text-white m-4">
                <Link className='mx-2 p-2 hover:text-black font-bold hover:bg-zinc-300 rounded-sm ' to="/">Home</Link>
                <Link className='mx-2 p-2 hover:text-black font-bold hover:bg-zinc-300 rounded-sm ' to="about">About</Link>
                <Link className='mx-2 p-2 hover:text-black font-bold hover:bg-zinc-300 rounded-sm ' to="page">Page</Link>
                <Link className='mx-2 p-2 hover:text-black font-bold hover:bg-zinc-300 rounded-sm ' to="page1">Page1</Link>
        </ul>
    </div>
    </>
  );
}

export default HomeNavbar;