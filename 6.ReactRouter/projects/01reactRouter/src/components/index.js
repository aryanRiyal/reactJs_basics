import Header from "./Header/Header";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import User from "./User/User";
// import Github from "./Github/Github";
// import { githubInfoLoader } from "./Github/githubInfoLoader";
import { Github, githubInfoLoader } from "./Github/Github";
import Footer from "./Footer/Footer";

export { Header, Home, About, Contact, User, Github, githubInfoLoader, Footer };

// Issue: Vite's Fast Refresh mechanism is incompatible with mixing named exports and default exports.

//  Reason: The issue occurs because Vite's Fast Refresh mechanism is incompatible with mixing named exports and default exports when using React components and loaders together. Specifically, githubInfoLoader being exported alongside the default Github component is causing the issue.

//  Solution 1: To resolve the issue, you can move the githubInfoLoader function to a separate file. This way, the component file only contains the React component (default export), and the loader logic can be modularized for better maintainability.

//  Solution 2: Exporting both Github and githubInfoLoader as named exports instead of using export default is a valid approach, and it resolves the issue with Vite's Fast Refresh.
