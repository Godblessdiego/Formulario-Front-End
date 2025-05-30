"use client";
import React from 'react';
import Formulario from '@/components/Formulario';

const PaginaInicio: React.FC = () => {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 relative overflow-hidden">
            {/* Efectos decorativos gracias a Reddit */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
            </div>

            <div className="relative z-10 container mx-auto px-4 py-12">
                <div className="mt-10 flex flex-col lg:flex-row gap-12">
                    {/* Contenedor izquierdo */}
                    <div className="flex-1 space-y-8">
                        <header className="text-center lg:text-left">
                            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold rounded-full mb-4">
                                🚀 CREA CUENTAS SIN LÍMITES
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                                Regístrate <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">en una sola página!</span>
                            </h1>
                            <p className="text-lg text-gray-600 mt-5">
                                Sé parte de los <strong>100 millones</strong> de usuarios que se registran tan rápido como un Tesla.
                            </p>
                        </header>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <span className="text-green-600 font-bold text-xl">✓</span>
                                </div>
                                <p className="text-gray-700">Validación de formulario con biblioteca única de TypeScript... <strong>Zod.</strong></p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                    <span className="text-blue-600 font-bold text-xl">⚡</span>
                                </div>
                                <p className="text-gray-700">Almacenamiento seguro en base de datos PostgreSQL y servidores usando Flask (Python).</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                    <span className="text-purple-600 font-bold text-xl">🎯</span>
                                </div>
                                <p className="text-gray-700">Seguridad ultra segura, con hash para que ni la CIA lo sepa gracias a <strong>passlib.hash.</strong></p>
                            </div>
                        </div>
                    </div>

                    {/* Contenedor Derecho */}
                    <div className="flex-1 flex justify-center">
                        <div className="bg-white bg-opacity-50 backdrop-blur-sm p-8 rounded-xl shadow max-w-md w-full">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center lg:text-left">
                                Únete a la Revolución
                            </h2>
                            <p className="text-gray-600 mb-6 text-center lg:text-left">
                                (Es solo un formulario, pero a nuestros inversores les encanta)
                            </p>

                            <Formulario />

                            <div className="mt-6 text-center">
                                <p className="text-xs text-gray-500">
                                    Al registrarte aceptas recibir nuestro newsletter de novedades.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reseñas para darle credibilidad */}
                <div className="mt-12 text-center">
                    <blockquote className="text-sm text-gray-600">
                        <p><strong>"Este proceso de registro cambió mi vida."</strong></p>
                        <cite className="mt-2 block">– Usuario Verificado</cite>
                    </blockquote>
                </div>
            </div>
        </div>
    );
};

export default PaginaInicio;