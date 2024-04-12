import Header from "./Header";

function Layout(props) {
    const { children } = props; 
    return ( 
        <>
            <Header />
            {children}
            
        </>
    );
}

export default Layout;