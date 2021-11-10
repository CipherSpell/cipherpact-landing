import { FC } from 'react';
import Link from 'next/link';
import { NavigationBar, Links } from '../styles/globals';
import config from '../utils/configs';

const Header: FC = () => {
  return (
    <NavigationBar>
      <ul>
        <Links>
          <Link href='#'>
            <a>{config.app_name}</a>
          </Link>
        </Links>
      </ul>
    </NavigationBar>
  );
};

export default Header;
