export class Product {
    name: string;
    price: number;
    stock: number;
    vendor: string;
    quantity: number;
}

export const products = [
    {
        name: 'Radeon RX470',
        vendor: 'Gigabyte',
        price: 150,
        stock: 5,
        quantity: 0
    },
    {
        name: 'Radeon RX480',
        vendor: 'MSI',
        price: 200,
        stock: 33,
        quantity: 0
    },
    {
        name: 'GeForce GTX 1080',
        vendor: 'Gigabyte',
        price: 500,
        stock: 44,
        quantity: 0
    },
    {
        name: 'GeForce RTX 2070',
        vendor: 'Asus',
        price: 650,
        stock: 26,
        quantity: 0
    },
    {
        name: 'Radeon 5700 XT',
        vendor: 'AMD',
        price: 450,
        stock: 100,
        quantity: 0
    },
    {
        name: 'GeForce GTX 1060',
        vendor: 'nVidia',
        price: 350,
        stock: 19,
        quantity: 0
    },
]