import Image from "next/image";
import {useMoralis} from "react-moralis";

function Login(){
    const { authenticate , isAuthenticating } = useMoralis();
    return (
       
      
        
    

        <div className=" relative">
            <video autoPlay muted loop id="videoBG" >         
            <source src="/images/vbg.mp4" type="video/mp4"/>       
        </video>
            
            <div className="flex flex-col absolute z-50 h-5/6 w-full items-center justify-center space-y-9">
                
            <div className="img-hover-zoom--colorize">
            <Image className = "object-cover rounded-full" src="/images/prop.jpg" width={200} height={200}  />
            </div>

                <button className="button" onClick={authenticate}>
                    Login To The Y-Verse
                </button>
            </div>
            
        
            <div>
                {/*Profile logo and log button*/}
            </div>

            <div className="w-full h-screen">
            {/* <Image src="/images/bg1.jpg" layout="fill" objectFit="cover"/> */}


                {/*Login form*/}
            </div>
        </div>
    );
}

export default Login;