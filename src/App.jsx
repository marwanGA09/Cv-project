import Navigation from './assets/component/Navigation';

import { SideBarCvContainerGroup } from './assets/containersComponent/SideBarCvContainerGroup';
import { Footer } from './assets/component/Footer';

export default function App() {
  return (
    <>
      {' '}
      {localStorage.clear()}
      <div className="App">
        <Navigation />
        <SideBarCvContainerGroup />
        <Footer />
      </div>
    </>
  );
}
