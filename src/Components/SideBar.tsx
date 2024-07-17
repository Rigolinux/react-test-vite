

import { PanelMenu } from 'primereact/panelmenu';
import { MenuItem } from 'primereact/menuitem';
import reactLogo from '../assets/react.svg';

export default function SideBar() {
    const items: MenuItem[] = [
        {
            label: 'Catalogo',
            icon: 'pi pi-folder',
            items: [
                {
                    label: 'Tipos de productos',
                    icon: 'pi pi-box',
                    url: '/dashboard/catalog/productType'
                },
                {
                    label: 'Proveedores',
                    icon: 'pi pi-image',
                    url: '/dashboard/catalog/providers'
                },
                {
                    label: 'Tipo de cliente',
                    icon: 'pi pi-user',
                    url: '/dashboard/catalog/customerType'
                },
                {
                    label: 'Ubicaciones',
                    icon: 'pi pi-map',
                    url: '/dashboard/catalog/location'
                    
                },
                {
                    label: 'Activos',
                    icon: 'pi pi-lightbulb',
                    url: '/dashboard/catalog/actives'
                },
            ],
            
        },
        {
            label: 'Sguridad',
            icon: 'pi pi-shield',
           
            items: [
                {
                    label: 'Roles',
                    icon: 'pi pi-user-edit',
                    url: '/dashboard/security/roles'
                },
                {
                    label: 'Usuarios',
                    icon: 'pi pi-users',
                    url: '/dashboard/security/users'
                },
                {
                    label: 'Accesos',
                    icon: 'pi pi-lock',
                    url: '/dashboard/security/access'
                }
                
            ]
        
        }      
    ];
 

    return (
        <div className="card flex flex-column justify-content-center">
            <div className='flex justify-content-center mt-5'>
                <img src={reactLogo} className="logo react" alt="React logo" width={100} />
            </div>
            <PanelMenu model={items} className="w-full md:w-20rem" multiple  />
             
        </div>
    )
}
        