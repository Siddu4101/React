React context:
    The problem is consider u have 3 level nested component like parent -> child -> grandchild and you want to pass some data from parent to grandchild.
        Without context, you would have to pass the data as props through each level of the component tree, even if u r not using it in the intermediate components. Context acts a global shared container to provide the data at the parent level and consume it directly in the grandchild component. This makes the code cleaner and easier to manage, especially when dealing with deeply nested components.
How to use it ?
1. Context creation: create a context using React.createContext() method and use this object to create the provider
2. Provider: by context object u can get the provider which acts a wrapper for the components that need access to the context data and this data u will pass as value to the provider.
3. Consumer : by using the context object and the useContext u will get the access to the context data inside the components which were wrapped by provider and  you can consume it by the name you have given to the in the provider value.


