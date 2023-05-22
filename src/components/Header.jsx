import bgimage from '../pics/bg-img.png'
const Header=()=>{
    return(
        <header className="">
            <h1>Welcome to my website</h1>
             <img src={bgimage} class="bg-image" />
        </header>
    );
}

export default Header;

