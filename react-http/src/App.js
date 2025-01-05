import React from 'react';
import './App.css';
import UseContext from './components/UseContext';
// import IntervalHookCounter from './components/IntervalHookCounter';
// import HookCounter from './components/HookCounter';
// import PostForm from './components/PostForm';
// import PostList from './components/PostList';
// import ClassCounter from './components/ClassCounter';
// import HookCounterTwo from './components/HookCounterTwo';
// import HookCounterThree from './components/HookCounterThree';
// import HookCounterFive from './components/HookCounterFive';
// import UseEffectHook from './components/UseEffectHook';
// import UseEffectHookMouse from './components/UseEffectHookMouse';
// import MouseContainer from './components/MouseContainer';
// import DataFetching from './components/DataFetching';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()


function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Sivanandh'}>
        <ChannelContext.Provider value={'CookingWithMe'}>
          <UseContext />
        </ChannelContext.Provider>
      </UserContext.Provider>
      {/* <DataFetching /> */}
      {/* <IntervalHookCounter /> */}
      {/* <MouseContainer /> */}
      {/* <UseEffectHookMouse /> */}
      {/* <UseEffectHook /> */}
      {/* <HookCounterFive /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounter /> */}
      {/* <ClassCounter /> */}
      {/* <PostForm /> */}
      {/* <PostList /> */}
    </div>
  );
}

export default App;
