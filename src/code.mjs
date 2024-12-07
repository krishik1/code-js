let x=[2,3,9,6,9,5]

export let res = new Promise((resolve, reject) => {
    try {
        let x = [5, 15, 25, 10, 30]; // Example array (ensure x is defined)
        let filtered = x.filter(i => i > 10);
        resolve(filtered);
    } catch (error) {
        reject(error);
    }
});

function area(i) {
    return i*i
}
const GITHUB_API = 'https://api.github.com/users/akshaymarch27'
export const user = fetch(GITHUB_API);

export {
    area
}
 


