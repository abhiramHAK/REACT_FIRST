console.log("React script loaded")

const App = () => {
    console.log("App component rendering")

    return 
    (
    
        <div>
        <h3>Welcome To React!</h3>
        </div>
    )
}


const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(<App />)


// console.log("React script loaded")

// const App = () => {
//     console.log("App component rendering")

//     return (
//         <div>
//             <h3>Welcome To React!</h3>
//         </div>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<App />)
