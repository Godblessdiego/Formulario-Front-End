"use client"; // Obligatorio cuando se usan hooks de cliente en NEXT

import React, { useState, useEffect } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card } from '@/components/ui/card';
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff } from 'lucide-react';
import FuerzaDeContrasena from '@/components/FuerzaDeContrasena';

// Esquema de validación con Zod
const esquemaZod = z.object({
    nombreCompleto: z
        .string()
        .min(3, { message: 'El nombre debe tener al menos 3 caracteres' }),
    correo: z.string().email({ message: 'Ingresa un correo válido' }),
    clave: z
        .string()
        .min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
});

type FormValues = z.infer<typeof esquemaZod>;

const FormularioRegistro: React.FC = () => {
    // Configuración de React Hook Form con Zod
    const form = useForm<FormValues>({
        resolver: zodResolver(esquemaZod),
        mode: 'onChange',
    });

    // Estados locales
    const [mostrarClave, setMostrarClave] = useState(false);
    const [fuerzaClave, setFuerzaClave] = useState(0);

    // Observar el valor de 'clave' para medir su fuerza
    const clave = form.watch('clave') || '';

    useEffect(() => {
        let puntaje = 0;
        // Longitud: 10 pts por carácter hasta 50
        puntaje += Math.min(clave.length * 10, 50);
        // Mayúsculas
        if (/[A-Z]/.test(clave)) puntaje += 5;
        // Números
        if (/[0-9]/.test(clave)) puntaje += 5;
        // Caracteres especiales
        if (/[^A-Za-z0-9]/.test(clave)) puntaje += 20;
        setFuerzaClave(Math.min(Math.max(puntaje, 0), 100));
    }, [clave]);

    // Función de envío de formulario
    const onSubmit = (data: FormValues) => {
        console.log('Datos enviados:', data);
        // Llamada a API o lógica adicional aquí
    };

    return (
        <Card className="w-full max-w-md mx-auto bg-white shadow-sm border border-gray-100 p-3 sm:p-4 rounded-md">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="nombreCompleto"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nombre completo</FormLabel>
                                <FormControl>
                                    <Input placeholder="Juan Pérez" {...field} />
                                </FormControl>
                                <FormDescription>Al menos 3 caracteres.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="correo"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Correo electrónico</FormLabel>
                                <FormControl>
                                    <Input placeholder="tucorreo@ejemplo.com" {...field} />
                                </FormControl>
                                <FormDescription>Debe ser un email válido.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="clave"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Contraseña</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input
                                            type={mostrarClave ? 'text' : 'password'}
                                            placeholder="••••••"
                                            {...field}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setMostrarClave(!mostrarClave)}
                                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                            aria-label={mostrarClave ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                                        >
                                            {mostrarClave ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                </FormControl>
                                <FormDescription>
                                    Al menos 6 caracteres, incluye mayúsculas, números y símbolos.
                                </FormDescription>
                                <FormMessage />
                                <FuerzaDeContrasena clave={clave} />
                            </FormItem>
                        )}
                    />

                    <Button
                        type="submit"
                        className="w-full transition-all"
                        disabled={!form.formState.isValid || !form.formState.isDirty}
                    >
                        Crear cuenta
                    </Button>
                </form>
            </Form>
        </Card>
    );
};

export default FormularioRegistro;
