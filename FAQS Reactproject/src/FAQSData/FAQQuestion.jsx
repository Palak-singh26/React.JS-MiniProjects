export const question = [
  {
    "id": 1,
    "question": "What is React.js?",
    "answer": "React.js is a popular open-source JavaScript library developed by Facebook for building fast and interactive user interfaces for web and mobile applications. It allows developers to create reusable UI components and manage the view layer of an application efficiently. React uses a virtual DOM to improve performance and simplifies the process of building complex interfaces by breaking them down into smaller, reusable components."
  },
  {
    "id": 2,
    "question": "What are React components?",
    "answer": "React components are independent, reusable building blocks of a user interface. Each component represents a part of the UI and can be either a class component or a functional component. Components can accept input (called props) and return JSX to describe what should appear on the screen. This modular approach enhances code maintainability and readability."
  },
  {
    "id": 3,
    "question": "What is JSX?",
    "answer": "JSX (JavaScript XML) is a syntax extension for JavaScript used with React to describe what the UI should look like. It looks similar to HTML, but it has the full power of JavaScript. JSX helps make the code more readable and writing React components easier by allowing you to write HTML structures in the same file as JavaScript code."
  },
  {
    "id": 4,
    "question": "What is the virtual DOM?",
    "answer": "The virtual DOM is a lightweight JavaScript representation of the actual DOM in the browser. When changes occur in a React application, React updates the virtual DOM first, then efficiently updates only the parts of the real DOM that have changed. This process, called reconciliation, improves performance and responsiveness in web applications."
  },
  {
    "id": 5,
    "question": "What is a state in React?",
    "answer": "State is an object that stores dynamic data and determines how a component behaves or renders. It allows components to respond to user input, server responses, and other events. When the state of a component changes, React automatically re-renders the component to reflect those changes in the UI."
  },
  {
    "id": 6,
    "question": "What are props in React?",
    "answer": "Props (short for properties) are read-only data passed from a parent component to a child component. They allow components to be dynamic and customizable. Props help create reusable components by allowing different values to be passed each time the component is used."
  },
  {
    "id": 7,
    "question": "What is the difference between state and props?",
    "answer": "Props are used to pass data from parent to child components and are immutable. State, on the other hand, is local to a component and can be changed using the `setState` function (or hooks like `useState`). Props make components reusable and configurable, while state manages data that changes over time within the component."
  },
  {
    "id": 8,
    "question": "What is useState hook?",
    "answer": "The `useState` hook is a function that allows you to add local state to functional components. It returns an array with the current state value and a function to update it. This hook is useful for managing user inputs, toggles, counters, and any component-specific data without converting it into a class component."
  },
  {
    "id": 9,
    "question": "What is useEffect hook?",
    "answer": "`useEffect` is a React hook that lets you perform side effects in functional components, such as data fetching, subscribing to events, or manually changing the DOM. It runs after the component has rendered, and you can control when it runs by specifying dependencies in an array."
  },
  {
    "id": 10,
    "question": "What is the purpose of keys in React lists?",
    "answer": "Keys are special string attributes used to identify which items in a list have changed, been added, or removed. They help React optimize rendering by providing a stable identity for each element, which reduces the number of operations required during updates and improves performance."
  },
  {
    "id": 11,
    "question": "How do you handle events in React?",
    "answer": "React handles events similarly to HTML but with some differences. Event names are camelCased (e.g., `onClick`, `onChange`) and are passed a callback function rather than a string. React wraps native events in a synthetic event system that ensures consistent behavior across browsers."
  },
  {
    "id": 12,
    "question": "What is conditional rendering in React?",
    "answer": "Conditional rendering allows you to render different elements or components based on a condition. You can use JavaScript operators like `if`, `ternary (?:)`, or `&&` inside JSX to decide what should appear on the screen based on state or props."
  },
  {
    "id": 13,
    "question": "What is a controlled component?",
    "answer": "A controlled component is a form element (like input, textarea, or select) whose value is controlled by React state. This means that the displayed value of the input always reflects the current state, making it easier to validate and manage user input."
  },
  {
    "id": 14,
    "question": "What is lifting state up in React?",
    "answer": "Lifting state up is the process of moving state from a child component to a common ancestor so that multiple components can share and access that state. It is a common pattern used to enable communication between sibling components in React."
  },
  {
    "id": 15,
    "question": "What is context API in React?",
    "answer": "The Context API provides a way to share values like theme, language, or user data across the entire component tree without manually passing props down at every level. It is useful for avoiding 'prop drilling' and helps manage global or app-wide state more cleanly."
  },
  {
    "id": 16,
    "question": "What is React Router?",
    "answer": "React Router is a popular routing library for React that enables navigation between different views or components in a single-page application. It allows dynamic route matching, nested routes, and route parameters, helping create a seamless user experience."
  },
  {
    "id": 17,
    "question": "What is Redux in React?",
    "answer": "Redux is a state management library that provides a centralized store for managing application state. It uses actions and reducers to update the state predictably. While it's often used with React, it's framework-agnostic and especially useful in large-scale applications with complex state logic."
  },
  {
    "id": 18,
    "question": "What are higher-order components (HOC)?",
    "answer": "A higher-order component is a function that takes a component and returns a new component with additional props or behavior. HOCs are used for code reuse, logic abstraction, and enhancing component capabilities without modifying the original component."
  },
  {
    "id": 19,
    "question": "What is the useRef hook?",
    "answer": "`useRef` is a hook that returns a mutable object with a `.current` property. It can store a reference to a DOM element or a value that persists between renders without causing re-renders. It’s useful for accessing form elements, timers, or keeping track of previous state values."
  },
  {
    "id": 20,
    "question": "How does React handle rendering performance?",
    "answer": "React enhances performance using a virtual DOM, selective re-rendering based on state/prop changes, memoization with `React.memo`, and hooks like `useMemo` and `useCallback`. These techniques help reduce unnecessary updates and keep the UI responsive even with complex data."
  },
  {
    "id": 21,
    "question": "What is the difference between functional and class components?",
    "answer": "Class components are ES6 classes that extend `React.Component` and have lifecycle methods like `componentDidMount`. Functional components are plain JavaScript functions that return JSX and use hooks for state and side effects. Today, most new code uses functional components for simplicity and improved readability."
  },
  {
    "id": 22,
    "question": "What is memoization in React?",
    "answer": "Memoization is an optimization strategy that stores the result of expensive function calls and returns the cached result when the same inputs occur again. In React, `React.memo` memoizes components, while `useMemo` memoizes values to prevent unnecessary calculations or renders."
  },
  {
    "id": 23,
    "question": "What is lazy loading in React?",
    "answer": "Lazy loading delays the loading of components until they’re needed, improving the performance and speed of your app. React provides `React.lazy()` and `Suspense` to implement code splitting and load components only when they're rendered for the first time."
  },
  {
    "id": 24,
    "question": "What is the difference between useEffect and useLayoutEffect?",
    "answer": "`useEffect` runs asynchronously after the component has rendered, while `useLayoutEffect` runs synchronously right after DOM mutations and before the browser paints. `useLayoutEffect` is used when you need to read layout from the DOM and synchronously re-render."
  },
  {
    "id": 25,
    "question": "What is React.StrictMode?",
    "answer": "`React.StrictMode` is a development tool that activates additional checks and warnings for its child components. It helps identify unsafe lifecycle methods, unexpected side effects, and other potential issues to ensure code follows best practices."
  },
  {
    "id": 26,
    "question": "How does reconciliation work in React?",
    "answer": "Reconciliation is the process by which React updates the DOM when a component's state or props change. It compares the new virtual DOM tree with the previous one and calculates the minimal set of changes needed to update the actual DOM efficiently."
  },
  {
    "id": 27,
    "question": "What is prop drilling and how can it be avoided?",
    "answer": "Prop drilling is the process of passing data through many layers of components unnecessarily. It makes the code harder to maintain. This can be avoided using Context API or state management libraries like Redux or Zustand to provide data globally."
  },
  {
    "id": 28,
    "question": "What is the difference between useCallback and useMemo?",
    "answer": "`useCallback` returns a memoized version of a callback function, while `useMemo` returns a memoized value. Both are used to optimize performance by avoiding re-creation of functions or recalculations on every render unless dependencies change."
  },
  {
    "id": 29,
    "question": "What are fragments in React?",
    "answer": "Fragments let you group multiple elements without adding extra nodes to the DOM. You can use `<></>` shorthand or `<React.Fragment>` to wrap sibling elements when a component needs to return more than one top-level element."
  },
  {
    "id": 30,
    "question": "What are portals in React?",
    "answer": "React Portals allow you to render children into a DOM node outside the current DOM hierarchy. They're useful for UI elements like modals, popovers, or tooltips that need to break out of the component's DOM structure but stay connected to React’s event system."
  }
]
