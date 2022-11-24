import { FC, MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import DrawingPanel from './Panels/DrawingPanel';
import MapSettingsPanel from './Panels/MapSettingsPanel';
import ModelsSettingsPanel from './Panels/ModelsSettingsPanel';

interface SidebarProps {
  opened: boolean
  handleSidebar: (event: MouseEvent) => void;
}

const Sidebar: FC<SidebarProps> = ({ opened, handleSidebar }) => {

  return createPortal(
    <>
      <div className={`sidebar ${opened ? 'sidebar-active' : ''}`}>
        <button className='primary-btn close-btn' onClick={handleSidebar}>+</button>
        <DrawingPanel />
        <MapSettingsPanel />
        {/* <ModelsSettingsPanel /> */}
      </div>
      <button className={`toggle-sidebar-btn`} onClick={handleSidebar}>
        &#10095;
      </button>
    </>
    ,
  document.getElementById('map') as HTMLElement);
};

export default Sidebar;