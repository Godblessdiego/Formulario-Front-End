import React, { useMemo } from 'react'
import { Progress } from "@/components/ui/progress"

type tipoFuerzaContrasena = "Muy corta" | "Débil" | "Intermedia" | "Fuerte";

interface ContrasenaProps {
    clave: string
    nombreClase?: string
}

const IndicadorFuerzaDeContrasena: React.FC<ContrasenaProps> = ({
    clave = "",
    nombreClase = "",
}: ContrasenaProps) => {
    const calcularFuerza: number = useMemo<number>(() => {
        if (clave.length < 6) return 0;

        let puntaje = 0;
        // Longitud: 10 pts por letra hasta 60
        puntaje += Math.min(clave.length * 10, 50);
        // Mayúsculas
        if (/[A-Z]/.test(clave)) puntaje += 5;
        // Números
        if (/[0-9]/.test(clave)) puntaje += 5;
        // Caracteres especiales - expanded pattern
        if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]+/.test(clave)) puntaje += 20;

        return Math.min(Math.max(puntaje, 0), 100);
    }, [clave]);

    const categoria = useMemo((): tipoFuerzaContrasena => {
        if (clave.length < 6) return 'Muy corta';
        if (calcularFuerza < 30) return 'Débil';
        if (calcularFuerza < 70) return 'Intermedia';
        return 'Fuerte';
    }, [clave, calcularFuerza]);

    const colorCategoria: Record<tipoFuerzaContrasena, string> = {
        "Muy corta": "bg-red-500",
        "Débil": "bg-red-400",
        "Intermedia": "bg-yellow-400",
        "Fuerte": "bg-green-400",
    };

    return (
        <div className="w-full space-y-1">
            <section className="flex justify-between items-center text-xs gap-2">
                <p><span className="text-sm font-medium">{categoria}</span></p>
                <Progress
                    value={calcularFuerza}
                    max={100}
                    className={`${colorCategoria[categoria]} ${nombreClase}`}
                />
            </section>
            {categoria === 'Muy corta' && (
                <p className="text-xs text-red-500">
                    La contraseña debe tener al menos 6 caracteres.
                </p>
            )}
        </div>
    );
};

export default IndicadorFuerzaDeContrasena;
