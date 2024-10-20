
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Country Information Page.</h1>
      <Link href="./country">
        Go to Country List
      </Link>
    </div>
  );
};

export default HomePage;

