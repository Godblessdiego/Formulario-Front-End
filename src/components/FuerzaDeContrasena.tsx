import React, { useMemo } from 'react'
import { Progress } from "@/components/ui/progress"

// Defino los tipos posibles de fuerza de contraseña
type TipoFuerzaContrasena = "Muy corta" | "Débil" | "Intermedia" | "Fuerte";

// Interfaz para las props del componente
interface Props {
    clave: string
    className?: string
}

const FuerzaDeContrasena: React.FC<Props> = ({ clave, className }) => {
    // Uso useMemo para calcular la fuerza solo cuando cambia la contraseña
    const { puntaje, categoria } = useMemo(() => {
        // Si es muy corta, directamente retorno 0 puntos
        if (clave.length < 6) {
            return { puntaje: 0, categoria: 'Muy corta' as TipoFuerzaContrasena };
        }

        let puntos = 0;

        // Asigno puntos por longitud (máximo 50 puntos)
        puntos += Math.min(clave.length * 10, 50);

        // Bonus por tener mayúsculas
        if (/[A-Z]/.test(clave)) puntos += 5;

        // Bonus por tener números
        if (/[0-9]/.test(clave)) puntos += 5;

        // Bonus mayor por tener caracteres especiales
        if (/[^A-Za-z0-9]/.test(clave)) puntos += 20;

        // Limito el puntaje entre 0 y 100
        const puntajeFinal = Math.min(Math.max(puntos, 0), 100);

        // Determino la categoría según el puntaje
        let cat: TipoFuerzaContrasena;
        if (puntajeFinal < 30) cat = 'Débil';
        else if (puntajeFinal < 70) cat = 'Intermedia';
        else cat = 'Fuerte';

        return { puntaje: puntajeFinal, categoria: cat };
    }, [clave]);

    // Defino los colores para cada categoría
    const coloresCategoria: Record<TipoFuerzaContrasena, string> = {
        "Muy corta": "bg-red-500",
        "Débil": "bg-red-400",
        "Intermedia": "bg-yellow-400",
        "Fuerte": "bg-green-400",
    };

    return (
        <div className="w-full space-y-1">
            <div className="flex justify-between items-center text-xs gap-2">
                {/* Muestro la categoría actual */}
                <span className="text-sm font-medium">{categoria}</span>
                {/* Barra de progreso con color dinámico */}
                <Progress
                    value={puntaje}
                    max={100}
                    className={`${coloresCategoria[categoria]} ${className || ''}`}
                />
            </div>
            {/* Mensaje de ayuda cuando la contraseña es muy corta */}
            {categoria === 'Muy corta' && (
                <p className="text-xs text-red-500">
                    La contraseña debe tener al menos 6 caracteres.
                </p>
            )}
        </div>
    );
};

export default FuerzaDeContrasena;