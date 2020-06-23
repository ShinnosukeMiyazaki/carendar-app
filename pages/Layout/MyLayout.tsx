import Header from "./Header";

type Props = {
    children: JSX.Element
}

const Layout:React.FC<Props> = (props) => {
    return (
        <div>
            <Header />
            {props.children}
        </div>
    )
}

export default Layout;