import Home from '../views/pages/home';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';
import Edit from '../views/pages/edit';
import About from '../views/pages/about';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/favorite': Favorite,
  '/detail/:id': Detail,
  '/edit/:id': Edit,
  '/about': About,
};

export default routes;
