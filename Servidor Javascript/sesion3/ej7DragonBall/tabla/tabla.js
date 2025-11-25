        document.addEventListener('DOMContentLoaded', () => {
            const container = document.getElementById("tabla-container");
            const dataString = localStorage.getItem("DragonBall");
            const personajes = JSON.parse(dataString);
            
            // Campos que queremos mostrar en el orden deseado
            const campos = ['id', 'name', 'ki', 'maxKi', 'race', 'gender', 'image', 'affiliation'];

            let html = '<table class="data-table"><thead><tr>';
            
            // 1. Crear la cabecera de la tabla
            campos.forEach(campo => {
                // Capitalizar la primera letra para el título
                html += `<th>${campo.charAt(0).toUpperCase() + campo.slice(1)}</th>`;
            });
            html += '</tr></thead><tbody>';

            // 2. Crear las filas de la tabla
            personajes.forEach(p => {
                html += '<tr>';
                campos.forEach(campo => {
                    let valor = p[campo] || 'N/A';
                    html += `<td>${valor}</td>`;
                });
                html += '</tr>';
            });

            html += '</tbody></table>';
            container.innerHTML = html;
        });