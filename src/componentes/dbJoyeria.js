const tasks = [
    { id: '1', nombre: 'Anillo', precio: 1000 },
    { id: '2', nombre: 'Arete', precio: 2000},
    { id: '3', nombre: 'Hcollar', precio: 5000 }
]

export const getTasks = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(tasks)
        }, 1000)
    })
}