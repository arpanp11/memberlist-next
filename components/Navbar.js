import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <Image src='/logo.jpg' alt='family tree' width={128} height={85} />
      </div>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/members'>
        <a>Member List</a>
      </Link>
    </nav>
  );
};

export default Navbar;
