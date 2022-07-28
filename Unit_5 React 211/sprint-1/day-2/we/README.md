#### Steps
1. Install 'redux' library  `npm i redux`
2. Create 'Redux' folder
    a. Create action.js file
    b. Create reducer.js file
    c. Create store.js file
3. Setup store.js
4. Setup reducer.js

Pure Function
- It must be predictable
    When we give same number/types of argument, we get the same output
- It should not have any side effects
    It should not perform any operation that is not related/required for getting the final output

-React Redux
 -<Provider>
 -useSelector()
 -useDispatch()
1. Install react-redux library
2. Wrap the app component with the <Provider>
3. Get the counter from useSelector
4. Get the dispatch method from useDispatch