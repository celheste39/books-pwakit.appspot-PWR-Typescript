export class GenerateData{
    randomTerminoBusqueda(): string {
        const busquedas = [
            "Calculo integral",
            "Calculo diferencial",
            "Calculo vectoriaL",
            "Geometria",
            "Arquitectura",
            "Algebra",
            "Leones",
            "Angeles",
            "Teorias",
            "Aldolf Hitler",
            "Vino sangre",
        ]
        return busquedas[Math.floor(Math.random() * busquedas.length)];
    }

}