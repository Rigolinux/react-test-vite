import { Button } from 'primereact/button'
import { useNavigate } from 'react-router-dom'



const Landing = () => {
  const navigate = useNavigate();
  return (
    <div  >
   
      <div className="grid grid-nogutter bg-sidebar text-800">
          <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
              <section>
                  <span className="block text-6xl text-white font-bold mb-1">Create the screens</span>
                  <div className="text-6xl text-primary font-bold mb-3">your visitors deserve to see</div>
                  <p className="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                
                  <Button label="Login" onClick={()=>navigate('login')}  type="button" className="mr-3 p-button-raised" />
                  <Button label="Sing In" type="button" className="p-button-outlined" />
              </section>
          </div>
          <div className="col-12 md:col-6 overflow-hidden">
              <img src="/demo/images/blocks/hero/hero-1.png" alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
          </div>
      </div>

      <div className="surface-300 text-center">
          <div className="mb-3 font-bold text-3xl">
              <span className="text-900">One Product, </span>
              <span className="text-blue-600">Many Solutions</span>
          </div>
          <div className="text-700 mb-6">Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.</div>
          <div className="grid">
              <div className="col-12 md:col-4 mb-4 px-5">
                  <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                      <i className="pi pi-desktop text-4xl text-blue-500"></i>
                  </span>
                  <div className="text-900 text-xl mb-3 font-medium">Built for Developers</div>
                  <span className="text-700 line-height-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
              </div>
              <div className="col-12 md:col-4 mb-4 px-5">
                  <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                      <i className="pi pi-lock text-4xl text-blue-500"></i>
                  </span>
                  <div className="text-900 text-xl mb-3 font-medium">End-to-End Encryption</div>
                  <span className="text-700 line-height-3">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</span>
              </div>
              <div className="col-12 md:col-4 mb-4 px-5">
                  <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                      <i className="pi pi-check-circle text-4xl text-blue-500"></i>
                  </span>
                  <div className="text-900 text-xl mb-3 font-medium">Easy to Use</div>
                  <span className="text-700 line-height-3">Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae semper.</span>
              </div>
              <div className="col-12 md:col-4 mb-4 px-5">
                  <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                      <i className="pi pi-globe text-4xl text-blue-500"></i>
                  </span>
                  <div className="text-900 text-xl mb-3 font-medium">Fast & Global Support</div>
                  <span className="text-700 line-height-3">Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.</span>
              </div>
              <div className="col-12 md:col-4 mb-4 px-5">
                  <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                      <i className="pi pi-github text-4xl text-blue-500"></i>
                  </span>
                  <div className="text-900 text-xl mb-3 font-medium">Open Source</div>
                  <span className="text-700 line-height-3">Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. </span>
              </div>
              <div className="col-12 md:col-4 md:mb-4 mb-0 px-3">
                  <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                      <i className="pi pi-shield text-4xl text-blue-500"></i>
                  </span>
                  <div className="text-900 text-xl mb-3 font-medium">Trusted Securitty</div>
                  <span className="text-700 line-height-3">Mattis rhoncus urna neque viverra justo nec ultrices. Id cursus metus aliquam eleifend.</span>
              </div>
          </div>
      </div>
    
    
    </div>
  )
}

export default Landing