//Función  crear elemento
function crear_elemento(){
  
   $('#cuadro').append(`

   
   
   <div class="container mt-2">
   <a type="button" class="mb-5 mt-2" onclick="eliminar_elemento(this);" style="float:right; margin-right: 5px;"><i class="bi bi-dash-circle-dotted"></i></a>
   <div class="rounded border border-dark p-3" id="fondo">

       <div class="row">

           <div class="col">
               <label class="fw-bold">PCS</label>
               <input type="text" class="form-control mt-2" placeholder="Número Telefónico">

               <label class="mt-2 fw-bold">Sucursal</label>
               <select class="form-select mt-2">
                   <option selected>Lista de Sucursales</option>
                        <option value="Antofagasta SSCC">Antofagasta SSCC</option>
                        <option value="Calama SSCC">Calama SSCC</option>
                        <option value="Copiapó SSCC">Copiapó SSCC</option>
                        <option value="CPS Vallenar">CPS Vallenar</option>
                        <option value="CPS Coquimbo">CPS Coquimbo</option>
                        <option value="La Serena SSCC">La Serena SSCC</option>
                        <option value="CPS Ovalle">CPS Ovalle</option>
                        <option value="Temuco SSCC">Temuco SSCC</option>
                        <option value="CPS Villarrica">CPS Villarrica</option>
                        <option value="Plaza Oeste SSCC">Plaza Oeste SSCC</option>
                        <option value="CPS Chicureo">CPS Chicureo</option>
                        <option value="Gran Avenida SSCC">Gran Avenida SSCC</option>
                        <option value="Estación Central SSCC">Estación Central SSCC</option>
                        <option value="Plaza Norte SSCC">Plaza Norte SSCC</option>
                        <option value="Florida Center SSCC">Florida Center SSCC</option>
                        <option value="Vespucio II SSCC">Vespucio II SSCC</option>
                        <option value="Vespucio SSCC">Vespucio SSCC</option>
                        <option value="CPS La Reina">CPS La Reina</option>
                        <option value="Apoquindo SSCC">Apoquindo SSCC</option>
                        <option value="CPS APUMANQUE">CPS APUMANQUE</option>
                        <option value="CPS La Dehesa">CPS La Dehesa</option>
                        <option value="Maipú SSCC">Maipú SSCC</option>
                        <option value="CPS Melipilla">CPS Melipilla</option>
                        <option value="Plaza Quilin SSCC">Plaza Quilin SSCC</option>
                        <option value="Costanera Center SSCC">Costanera Center SSCC</option>
                        <option value="Puente Alto SSCC">Puente Alto SSCC</option>
                        <option value="San Bernardo SSCC">San Bernardo SSCC</option>
                        <option value="Estado SSCC">Estado SSCC</option>
                        <option value="Huerfanos SSCC">Huerfanos SSCC</option>
                        <option value="Merced SSCC">Merced SSCC</option>
                        <option value="Santiago Dowtown SSCC">Santiago Dowtown SSCC</option>
                        <option value="San Damian SSCC">San Damian SSCC</option>
                        <option value="La Calera SSCC">La Calera SSCC</option>
                        <option value="CPS Los Andes">CPS Los Andes</option>
                        <option value="CPS Quillota">CPS Quillota</option>
                        <option value="Quilpue SSCC">Quilpue SSCC</option>
                        <option value="San Antonio SSCC">San Antonio SSCC</option>
                        <option value="San Felipe SSCC">San Felipe SSCC</option>
                        <option value="Valparaiso SSCC">Valparaiso SSCC</option>
                        <option value="Viña Del Mar SSCC">Viña Del Mar SSCC</option>
                        <option value="Viña II SSCC">Viña II SSCC</option>
                        <option value="Rancagua SSCC">Rancagua SSCC</option>
                        <option value="CPS San Fernando">CPS San Fernando</option>
                        <option value="Curico SSCC">Curico SSCC</option>
                        <option value="Linares SSCC">Linares SSCC</option>
                        <option value="Talca SSCC">Talca SSCC</option>
                        <option value="Chillan SSCC">Chillan SSCC</option>
                        <option value="Concepción SSCC">Concepción SSCC</option>
                        <option value="El Trebol Concep SSCC">El Trebol Concep SSCC</option>
                        <option value="Plaza Bio Bio SSCC">Plaza Bio Bio SSCC</option>
                        <option value="Los Angeles SSCC">Los Angeles SSCC</option>
                        <option value="Castro SSCC">Castro SSCC</option>
                        <option value="Osorno SSCC">Osorno SSCC</option>
                        <option value="Pto. Montt SSCC">Pto. Montt SSCC</option>
                        <option value="Coyhaique SSCC">Coyhaique SSCC</option>
                        <option value="Punta Arenas SSCC">Punta Arenas SSCC</option>
                        <option value="Valdivia SSCC">Valdivia SSCC</option>
                        <option value="Arica SSCC">Arica SSCC</option>
                        <option value="Iquique SSCC">Iquique SSCC</option>  
               </select>
           </div>

           <div class="col">
               <label class="fw-bold">Equipo Aceptado</label>
               <input type="text" class="form-control mt-2" placeholder="Equipo o Código">

               <label class="mt-2 fw-bold">Bolsa</label>
               <select class="form-select mt-2">
                   <option selected>Lista de Bolsas</option>
                   <option value="1">One</option>
                   <option value="2">Two</option>
                   <option value="3">Three</option>
               </select>
           </div>

           <div class="col">
               <label class="fw-bold">Interacción</label>
               <input type="text" class="form-control mt-2" placeholder="Número de Interacción">

               <label class="mt-2 fw-bold">Descuento</label>
               <select class="form-select mt-2">
                   <option selected>Lista de Descuentos</option>
                   <option value="40% X 6 MESES">30% X 6 MESES</option>
                   <option value="50% X 6 MESES">50% X 6 MESES</option>
                   <option value="20% X 12 MESES">20% X 12 MESES</option>
                   <option value="30% X 12 MESES">30% X 12 MESES</option>
                   <option value="40% X 12 MESES">40% X 12 MESES</option>
                   <option value="50% X 12 MESES">50% X 12 MESES</option>
               </select>
           </div>

           <div class="col">
               <label class="fw-bold">Plan</label>
               <select class="form-select mt-2">
                   <option selected>Lista de Planes</option>
                   <option value="PLAN CUENTA EXACTA XS">PLAN CUENTA EXACTA XS</option>
                   <option value="PLAN CUENTA EXACTA S">PLAN CUENTA EXACTA S</option>
                   <option value="PLAN POSTPAGO MAX Y">PLAN POSTPAGO MAX Y</option>
                   <option value="PLAN POSTPAGO MAX M">PLAN POSTPAGO MAX M</option>
                   <option value="PLAN POSTPAGO MAX L">PLAN POSTPAGO MAX L</option>
                   <option value="PLAN POSTPAGO MAX XL">PLAN POSTPAGO MAX XL</option>
                   <option value="PLAN MAX PREMIUM LIBRE">PLAN MAX PREMIUM LIBRE</option>
                   <option value="PLAN MAX PREMIUM BLACK LIBRE">PLAN MAX PREMIUM BLACK LIBRE</option>
                   <option value="PLAN POSTPAGO MAX X">PLAN POSTPAGO MAX X</option>
               </select>

               <label class="mt-2 fw-bold">Fecha de Retiro</label>
               <input type="date" class="form-control mt-2">
           </div>

       </div>



   </div>

</div>




    `);
}

//Función eliminar elemento
function eliminar_elemento(valor){
     valor.parentNode.parentNode.removeChild(valor.parentNode);
}