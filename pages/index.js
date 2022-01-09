import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from 'react-moralis';

export default function Home() {
  const { isAuthenticated , logout } = useMoralis();

  if (!isAuthenticated) {
    return (
     <Login />
    );
  }
  return (
    
    <div className=" relative">
    {/* <video autoPlay muted loop id="videoBG" >         
    <source src="/images/vbg2.mp4" type="video/mp4"/>       
    </video> */}
      <Head>
        <title>Meta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex absolute  w-full items-center justify-center space-y-9">
           
      <button onClick={logout} className='button'>Logout</button>
      
      </div>
    </div>
  );
}
