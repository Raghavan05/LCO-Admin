import { Route, Routes } from "react-router"
import AuthLayout from "../layouts/AuthLayout"
import Login from "../pages/Auth/Login"

const AuthRoutes = () => (
    <Routes>
        <Route exact path="/" element={<AuthLayout />}>
            <Route path="" element={<Login />}/>
            <Route path="signUp" element={<div>signUp</div>}/>
            <Route path="typo" element={<div>
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa doloremque voluptas, 
                    inventore nostrum quasi labore ullam non eos odit omnis? Animi quidem architecto 
                    nobis quis quod. Quisquam ipsa maiores distinctio.
                </p></div>
            }/>
        </Route>
    </Routes>
)

export default AuthRoutes;