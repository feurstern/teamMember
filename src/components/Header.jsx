import bgimage from '../pics/bg-img.png'
const Header=()=>{
    return(
        <header class="container-bg-img" style={{cursor:'pointer'}}>
            <h1>Welcome to my website</h1>
             <img src={bgimage} class="bg-image" />
            <div class="text-over-img">
                <h1>For The Sake Of Learning, NO Sacrifices is Too Great To Make!</h1>
                <h2>Lock and Load!</h2>
            </div>
        </header>
    );
}

export default Header;

