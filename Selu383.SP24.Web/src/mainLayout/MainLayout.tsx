import { Outlet } from "react-router-dom";

export function MainLayout (){
    
    return(
        <>
            <div className='navigation'>
                <nav>
                    <button
                    
                    > 
                    swag 
                    </button>
                    <p> Huh </p>
                </nav>
            </div>
            <hr></hr>
            <Outlet/>
        </>
    );
}