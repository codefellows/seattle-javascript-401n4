import Enzyme  from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

global.__API_URL__ = true;
global.__AUTH_URL__ = true;
global.__DEBUG__ = false;