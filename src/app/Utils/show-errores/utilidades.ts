export function parsearErrorsAPI(response: any): string[]{
    const resultado: string[] = [];
    if(response.error )

   // if(response.errror){ // aqui nunca entraba por eso nolo veo
        if(typeof response.error === 'string'){
            resultado.push(response.error);
        } 
        else if(Array.isArray(response.error)){
            response.error.forEach((valor: any)=> resultado.push(valor.description));
        }
        else {
            const mapErrors = response.error.errors;
            const tikets = Object.entries(mapErrors);
            tikets.forEach((arreglo: any[]) => {
                const item = arreglo[0];
                arreglo[1].forEach((messageError: string) => {
                    resultado.push(`${item}: ${messageError}`);
                })
            })
       // }
    }
    
    return resultado;
}