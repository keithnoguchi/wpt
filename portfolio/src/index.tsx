// Project Portfolio App
import ReactDOM from 'react-dom/client';
import UserSearch from './refs/UserSearch';

const App = () => {
  return (
    <div>
      <UserSearch />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
  .render(<App />);
