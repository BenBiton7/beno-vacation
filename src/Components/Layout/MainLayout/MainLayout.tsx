import MainRouting from "../../Routs/MainRouting/MainRouting";
import Header from "../Header/Header";
import "./MainLayout.css";

function MainLayout(): JSX.Element {
    return (
        <div className="MainLayout">
			<header>
                <Header/>
            </header>
            <main>
                <MainRouting/>
            </main>
            
        </div>
    );
}

export default MainLayout;
