import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import css from './Layout.module.css';

export const Layout = () => {
  const token = useSelector(state => state.auth.token);
  const layoutStyles = token ? css.bgDesktopWithoutBg : css.bgDesktop;

  return (
    <div className={layoutStyles}>
      <Header />
      <Outlet />
    </div>
  );
};
