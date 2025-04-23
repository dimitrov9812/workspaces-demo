const Logo = () => {
    const handleNewTabOpen: any = () => {
        console.log("test");
    }
    return <>
        <img onClick={handleNewTabOpen()} src="../public/flower.png" alt="My Icon" width="32" height="32"/>
    </>;
}


export default Logo;