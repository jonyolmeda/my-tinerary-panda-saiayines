export let URL = 'http://localhost:4000/api'
console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'production') {
    URL = process.env.REACT_URL
}