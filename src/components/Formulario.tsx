"use client";

import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Card } from "@/components/ui/card";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import FuerzaDeContrasena from "@/components/FuerzaDeContrasena";

// Defino las reglas de validación con Zod para cada campo
const esquemaValidacion = z.object({
  nombreCompleto: z
    .string()
    .min(3, { message: "El nombre debe tener al menos 3 caracteres" }),
  correo: z.string().email({ message: "Ingresa un correo válido" }),
  clave: z
    .string()
    .min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
});

// Creo el tipo TypeScript basado en el esquema de validación
type DatosFormulario = z.infer<typeof esquemaValidacion>;

const FormularioRegistro: React.FC = () => {
  // Configuro react-hook-form con validación en tiempo real
  const formulario = useForm<DatosFormulario>({
    resolver: zodResolver(esquemaValidacion),
    mode: "onChange", // Valida mientras el usuario escribe
  });

  // Estado para mostrar/ocultar la contraseña
  const [mostrarClave, setMostrarClave] = useState(false);

  // Observo el valor actual de la contraseña para el componente de fuerza
  const claveActual = formulario.watch("clave") || "";

  // Función que se ejecuta cuando se envía el formulario
  const onSubmit = async (datos: DatosFormulario) => {
    console.log("Datos enviados:", datos);

    try {
      // Envío los datos al servidor backend
      const response = await fetch("http://localhost:5000/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: datos.nombreCompleto,
          correo: datos.correo,
          contrasena: datos.clave,
        }),
      });

      // Manejo errores del servidor
      if (!response.ok) {
        const error = await response.json();
        alert(`❌ Error: ${error.detalle}`);
        return;
      }

      // Si todo sale bien, limpio el formulario
      alert("✅ Registro exitoso");
      formulario.reset();
    } catch (error) {
      // Manejo errores de conexión
      console.error(error);
      alert("❌ No se pudo conectar al servidor");
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white shadow-sm border border-gray-100 p-3 sm:p-4 rounded-md">
      <Form {...formulario}>
        <form onSubmit={formulario.handleSubmit(onSubmit)} className="space-y-8">
          {/* Campo de nombre completo */}
          <FormField
            control={formulario.control}
            name="nombreCompleto"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre completo</FormLabel>
                <FormControl>
                  <Input placeholder="Tu nombre completo" {...field} />
                </FormControl>
                <FormDescription>Al menos 3 caracteres.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Campo de correo electrónico */}
          <FormField
            control={formulario.control}
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

          {/* Campo de contraseña con botón para mostrar/ocultar */}
          <FormField
            control={formulario.control}
            name="clave"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={mostrarClave ? "text" : "password"}
                      placeholder="Tu contraseña"
                      {...field}
                    />
                    {/* Botón para alternar visibilidad de la contraseña */}
                    <button
                      type="button"
                      onClick={() => setMostrarClave(!mostrarClave)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      aria-label={
                        mostrarClave ? "Ocultar contraseña" : "Mostrar contraseña"
                      }
                    >
                      {mostrarClave ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </FormControl>
                <FormDescription>
                  Al menos 6 caracteres, incluye mayúsculas, números y símbolos.
                </FormDescription>
                <FormMessage />
                {/* Componente que muestra la fuerza de la contraseña */}
                <FuerzaDeContrasena clave={claveActual} />
              </FormItem>
            )}
          />

          {/* Botón de envío - se deshabilita si el formulario no es válido */}
          <Button
            type="submit"
            className="w-full transition-all"
            disabled={!formulario.formState.isValid || !formulario.formState.isDirty}
          >
            Crear cuenta
          </Button>
        </form>
      </Form>
    </Card>
  );
};

export default FormularioRegistro;
