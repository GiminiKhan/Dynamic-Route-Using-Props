
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className='flex justify-center items-center gap-3'>

      <h1>Welcome to the Country Information Page</h1>

      <Link href="./country"> Go to Country List </Link>

    </div>
  );
};

export default HomePage;

