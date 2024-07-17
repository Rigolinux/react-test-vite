import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { useState } from "react"
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const navigate = useNavigate();

    const handleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        navigate('/dashboard/catalog/actives')
        
    }

  return (
    <div className="surface-300">
    
<div className="flex align-items-center justify-content-center mt-6 ">
    <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div className="text-center mb-5">
           
            <div className="text-900 text-3xl font-medium mb-3">Bienvenido</div>
            <span className="text-600 font-medium line-height-3"></span>
            <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer"></a>
        </div>

        <div>
            <div className="mt-5">
                <FloatLabel>
                    <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
                    <InputText id="email"  type="text"  className="w-full  "  value={email}  onChange={(e) => setEmail(e.target.value)} />
                </FloatLabel>
            </div>
            <div className="mt-5">

            <FloatLabel>
                <label htmlFor="password" className="block text-900 font-medium ">Contraseña</label>
                <InputText id="password" type="password"  className="w-full " value={password} onChange={(e) =>setPassword(e.target.value) } />
            </FloatLabel>
            </div>

            <div className="mt-5">
                <Button label="Ingresar" icon="pi pi-user" className="w-full" onClick={handleLogin} />
            </div>
        </div>
    </div>
</div>
    
    </div>
  )
}

export default Login