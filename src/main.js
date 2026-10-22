import { animate, scroll, stagger } from "motion"

document.querySelector("#year").textContent = new Date().getFullYear()

// Si el usuario pidió menos movimiento en su sistema, no animamos nada
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches

if (!reduceMotion) {
    // Entrada del encabezado: cada elemento aparece 0.1 s después del anterior
    animate(
        ".hero > *",
        { opacity: [0, 1], y: [24, 0] },
        { duration: 0.6, delay: stagger(0.1) }
    )

    // Barra de progreso ligada al scroll de toda la página
    scroll(animate("#progress", { scaleX: [0, 1] }, { ease: "linear" }))

    // Cada bloque aparece mientras entra en pantalla y termina al verse entero
    // (así también el último bloque, que no puede subir más allá del final)
    document.querySelectorAll(".reveal").forEach((el) => {
        scroll(animate(el, { opacity: [0, 1], y: [40, 0] }), {
            target: el,
            offset: ["start end", "end end"],
        })
    })
}
