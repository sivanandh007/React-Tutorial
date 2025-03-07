import './App.css';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import FocusInput from './components/FocusInput';
// import FragmentDemo from './components/FragmentDemo';
// import Inline from './components/Inline';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import Stylesheet from './components/Stylesheet';
// import './components/appStyles.css';
// import styles from './components/appStyles.module.css'
// import Form from './components/Form';
// import LifecycleA from './components/LifecycleA';
// import Table from './components/Table';
// import PureComp from './components/PureComp';
// import RegComp from './components/RegComp';
// import ParentComp from './components/ParentComp';
// import RefsDemo from './components/RefsDemo';
// import FRParent from './components/FRParent';
// import PortalDemo from './components/PortalDemo';
// import Hero from './components/Hero';
// import ErrorBoundary from './components/ErrorBoundary';
// import ClickCounterTwo from './components/ClickCounterTwo';
// import HoverCounterTwo from './components/HoverCounterTwo';
// import RenderPropCounter from './components/RenderPropCounter';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContext';


function App() {
  return (
    <div className="App">
      <UserProvider value = "Sivanandh">
      <ComponentC />
      </UserProvider>
      {/* <RenderPropCounter render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
      )} />

      <RenderPropCounter render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
      )} /> */}
      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={(isLoggedIn) => isLoggedIn ? "Sivanandh": "Guest"  }/> */}
      {/* <HoverCounter />
      <ClickCounter /> */}
      {/* <ErrorBoundary>
      <Hero heroname = 'Batman' />
      <Hero heroname = 'Super Man' />
      <Hero heroname='joker' />
      </ErrorBoundary> */}
      {/* <PortalDemo /> */}
      {/* <FRParent /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <PureComp />
      <RegComp /> */}
      {/* <ParentComp /> */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
      {/* <LifecycleA /> */}
      {/* <Form /> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline /> */}
      {/* <Stylesheet primary={true} /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="Venkata Jwala" Relation="Mother"/>
      <Greet name="Venkata Durga Sivanandh" Relation = "Father" />
      <Greet name="Buddi siva" Relation="Son" />
      <Welcome name="Venkata Jwala" Relation="Mother"/>
      <Welcome name="Venkata Durga Sivanandh" Relation = "Father" />
      <Welcome name="Buddi siva" Relation="Son" /> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
