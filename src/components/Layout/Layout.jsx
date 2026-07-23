import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import "./Layout.css";

function Layout(){

return(
    <div className="layout">
        <Sidebar/>

        <div className="layout-main">
            <Header />

            <main className="layout-content">
                <h2>Conteúdo do Dashboard</h2>
                </main>
                </div>
                </div>
                   
            );
}
export default Layout;