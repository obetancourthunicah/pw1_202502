const planICCData = {
    "codigo": "UCHIF600",
    "nombre": "Ingeniería en Ciencias de la Computación",
    "bloques": [
        {
            "codigo" : "I",
            "asignaturas": [
                {
                    "codigo": "ES101",
                    "nombre":"Español",
                    "creditos": 3,
                    "requisitos": [],
                },
                {
                    "codigo": "MT101",
                    "nombre": "Matemáticas",
                    "creditos": 4,
                    "requisitos": []
                },
                {
                    "codigo": "IF112",
                    "nombre": "Introducción a Ciencias de la Computación",
                    "creditos": 3,
                    "requisitos": []
                },
                {
                    "codigo":"SC101",
                    "nombre":"Sociología",
                    "creditos": 3,
                    "requisitos": []
                },
                {
                    "codigo": "FI101",
                    "nombre": "Filosofía",
                    "creditos": 3,
                    "requisitos": []
                }
            ]
        },
        {
            "codigo" : "II",
            "asignaturas" : [
                {
                    "codigo": "ES201",
                    "nombre": "Expresión Oral Escrita",
                    "creditos" : 3,
                    "requisitos": ["ES101"]
                },
                {
                    "codigo": "MT201",
                    "nombre": "Precálculo",
                    "creditos" : 4,
                    "requisitos": ["MT101"]
                },
                {
                    "codigo": "IF214",
                    "nombre": "Fundamentos y Lógica de Programación",
                    "creditos" : 3,
                    "requisitos": ["IF112"]
                },
                {
                    "codigo": "HS101",
                    "nombre": "Historia de Honduras",
                    "creditos" : 3,
                    "requisitos": []
                },
                {
                    "codigo": "CR201",
                    "nombre": "El Hombre Frente a la Vida",
                    "creditos" : 3,
                    "requisitos": ["FI101"]
                }
            ]
        },
        {
            "codigo" : "III",
            "asignaturas" : [
                {
                    "codigo": "MT202",
                    "nombre": "Estadística I",
                    "creditos" : 4,
                    "requisitos": ["MT101"]
                },
                {
                    "codigo": "MT303",
                    "nombre": "Cálculo 1",
                    "creditos" : 4,
                    "requisitos": ["MT201"]
                },
                {
                    "codigo": "IF301",
                    "nombre": "Programación Estructura I",
                    "creditos" : 3,
                    "requisitos": ["IF214"]
                },
                {
                    "codigo": "IF213",
                    "nombre": "Estructura Discretas",
                    "creditos" : 3,
                    "requisitos": ["IF214"]
                },
                {
                    "codigo": "AM101",
                    "nombre": "Ciencias Naturales",
                    "creditos" : 3,
                    "requisitos": []
                }
            ]
        }
    ],
};

document.addEventListener("DOMContentLoaded", ()=>{
    const contenedorPlan = document.getElementById("plan-container");
    const planEstudio = new PlanEstudio(contenedorPlan, planICCData);
    planEstudio.generarHTML();
})

class PlanEstudio{
    constructor(container, data){
        this.container = container;
        this.data = data;
        this.nodes = {};
    }

    generarHTML(){
        this.generarEncabezado();
        this.generarBloques();
    }

    generarEncabezado(){
        this.contenedor = document.createElement("SECTION");
        this.contenedor.classList.add("plan");
        const h1 = document.createElement("H1");
        h1.innerHTML = `(${this.data.codigo}) ${this.data.nombre}`;
        this.container.appendChild(h1);
        this.container.appendChild(this.contenedor);
    }
    generarBloques(){
        this.data.bloques.forEach(
            (bloque, i)=> {
                const bloqueHtml = document.createElement("SECTION");
                bloqueHtml.id = `blq_${bloque.codigo}`;
                bloqueHtml.classList.add("bloque");
                ///
                const h2 = document.createElement("H2");
                h2.innerHTML = bloque.codigo;
                bloqueHtml.appendChild(h2);

                const asignaturas = this.generarAsignaturas(bloque);
                bloqueHtml.appendChild(asignaturas);
                this.contenedor.appendChild(bloqueHtml);
            }
        );
    }
    generarAsignaturas( bloque ){
        const asignaturasHtml = document.createElement("DIV");
        asignaturasHtml.classList.add("asignaturas");
        bloque.asignaturas.forEach( (asignatura,i)=>{
            const asignaturaHTML = document.createElement("DIV");
            asignaturaHTML.classList.add("asignatura");
            const codigo = document.createElement("DIV");
            const label = document.createElement("DIV");
            const creditos = document.createElement("DIV");

            codigo.innerHTML = asignatura.codigo;
            label.innerHTML = asignatura.nombre;
            creditos.innerHTML = `Créditos: ${asignatura.creditos}`;

            asignaturaHTML.appendChild(codigo);
            asignaturaHTML.appendChild(label);
            asignaturaHTML.appendChild(creditos);

            this.nodes[asignatura.codigo] = {}
            this.nodes[asignatura.codigo]["node"] = asignaturaHTML;
            this.nodes[asignatura.codigo]["requisitos"] = asignatura.requisitos;
            this.nodes[asignatura.codigo]["apertura"] = [];
            asignatura.requisitos.forEach( req => {
                if (this.nodes[req]) {
                    if (!this.nodes[req]["apertura"].includes(asignatura.codigo)){
                        this.nodes[req]["apertura"].push(asignatura.codigo);
                    }
                }
            });
            this.nodes[asignatura.codigo]["node"].addEventListener("mouseover", (e)=>{
                this.nodes[asignatura.codigo]["requisitos"].forEach( req => {
                    this.nodes[req]["node"].classList.add("requisito");
                })
                this.nodes[asignatura.codigo]["apertura"].forEach( req => {
                    this.nodes[req]["node"].classList.add("apertura");
                })
                this.nodes[asignatura.codigo]["node"].classList.add("focused");
            });
            this.nodes[asignatura.codigo]["node"].addEventListener("mouseout", (e)=>{
                this.nodes[asignatura.codigo]["requisitos"].forEach( req => {
                    this.nodes[req]["node"].classList.remove("requisito");
                })
                 this.nodes[asignatura.codigo]["apertura"].forEach( req => {
                    this.nodes[req]["node"].classList.remove("apertura");
                })
                this.nodes[asignatura.codigo]["node"].classList.remove("focused");
            });

            asignaturasHtml.appendChild(asignaturaHTML);

        });
        return asignaturasHtml;
    }
}

// json.org