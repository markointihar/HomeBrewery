
import { useDarkMode } from './DarkModeProvider'; // Import useDarkMode hook

const MyComponent = () => {
    const { darkMode, toggleDarkMode } = useDarkMode(); // Access dark mode state and toggle function

    return (
        <div>
            <button onClick={toggleDarkMode}>
                {darkMode ? 'Disable Dark Mode' : 'Enable Dark Mode'}
            </button>
            <div className={darkMode ? 'dark' : 'light'}>
                {/* Your component content */}
            </div>
        </div>
    );
};

export default MyComponent;
