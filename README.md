# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



 {/* Menu for Both Small and Large Screens */}
        <div
          className={``}
        >
          {/* Close Button for Small Screens */}
          <div className="flex justify-between items-center lg:hidden">
            <button onClick={toggleNavbar} className="text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          {/* Navbar Links */}
          <ul className="lg:flex lg:space-x-6 text-white text-center lg:text-left">
            {/* Home */}
            <li className='flex flex-col items-center justify-center gap-1 text-6xl md:text-4xl lg:text-[14px] mb-6 md:mb-5 lg:mb-0'>
              <Link
                to="/"
                className="block py-2 px-4 links relative margarine-regular"
              >
                Home
                <span
                  className={`absolute bottom-0 left-0 h-1 bg-green-500 transition-all duration-300 ${
                    location.pathname === '/' ? 'w-full' : 'hover:w-full w-0'
                  }`}
                ></span>
              </Link>
            </li>

            {/* About */}
            <li className='flex flex-col items-center justify-center gap-1 text-6xl md:text-4xl lg:text-[14px] mb-6 md:mb-5 lg:mb-0'>
              <Link
                to="/about"
                className="block py-2 px-4 links relative margarine-regular"
              >
                About
                <span
                  className={`absolute bottom-0 left-0 h-1 bg-green-500 transition-all duration-300 ${
                    location.pathname === '/about' ? 'w-full' : 'hover:w-full w-0'
                  }`}
                ></span>
              </Link>
            </li>

            {/* Projects */}
            <li className='flex flex-col items-center justify-center gap-1 text-6xl md:text-4xl lg:text-[14px] mb-6 md:mb-5 lg:mb-0'>
              <Link
                to="/projects"
                className="block py-2 px-4 links relative margarine-regular"
              >
                My Projects
                <span
                  className={`absolute bottom-0 left-0 h-1 bg-green-500 transition-all duration-300 ${
                    location.pathname === '/projects' ? 'w-full' : 'hover:w-full w-0'
                  }`}
                ></span>
              </Link>
            </li>

            {/* Services */}
            <li className='flex flex-col items-center justify-center gap-1 text-6xl md:text-4xl lg:text-[14px]'>
              <Link
                to="/services"
                className="block py-2 px-4 links relative margarine-regular"
              >
                Services
                <span
                  className={`absolute bottom-0 left-0 h-1 bg-green-500 transition-all duration-300 ${
                    location.pathname === '/services' ? 'w-full' : 'hover:w-full w-0'
                  }`}
                ></span>
              </Link>
            </li>

            {/* Contact */}
            <li className='flex flex-col items-center justify-center gap-1 text-6xl md:text-4xl lg:text-[14px]'>
              <Link
                to="/contact"
                className="block py-2 px-4 links relative margarine-regular"
              >
                Contact
                <span
                  className={`absolute bottom-0 left-0 h-1 bg-green-500 transition-all duration-300 ${
                    location.pathname === '/contact' ? 'w-full' : 'hover:w-full w-0'
                  }`}
                ></span>
              </Link>
            </li>
          </ul>
        </div>