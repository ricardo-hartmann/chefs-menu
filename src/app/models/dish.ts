export interface Dish {
    id: number;

    name: string;
    price: number;
    description?: string;
    available: boolean;
    category: string;

    created_at?: Date | string;
    updated_at?: Date | string;
    }


// export interface User {
//     id: number;
//     name: string;
//     email: string;
//     role: string;
//     created_at?: Date | string;
//     }


// export interface Dish {
// available: boolean
// category: string
// created_at: string
// created_by: number
// description: string
// id: number
// name: string
// price: number
// updated_at: string
// }
