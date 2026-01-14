import { Project } from "@/lib/types/global";

export const projects: Project[] = [
    {
        id: '1',
        title: 'E-commerce Dashboard',
        description: 'Panel administrativo para tienda online con analytics en tiempo real, gestión de inventario y sistema de pedidos.',
        image: '/projects/ecommerce-dashboard.jpg',
        technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind'],
        githubUrl: 'https://github.com/usuario/ecommerce-dashboard',
        liveUrl: 'https://ecommerce-dashboard.vercel.app',
        featured: true
    },
    {
        id: '2',
        title: 'Task Management App',
        description: 'Aplicación de gestión de tareas con drag & drop, colaboración en equipo y notificaciones en tiempo real.',
        image: '/projects/task-app.jpg',
        technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
        githubUrl: 'https://github.com/usuario/task-manager',
        liveUrl: 'https://task-manager-app.vercel.app',
        featured: true
    }
]