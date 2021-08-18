const aplicarDescuento = (monto = undefined, descuento = 0) => {

  const total = (monto * (descuento / 100));
  let totalApagar = monto - total;

  if (monto === undefined & descuento === 0) return console.warn('No hay Actividad');

  if (typeof monto !== "number") return console.error(`No puedes Ingresar numero entre comillas "Corrigelo por favor!!"`);

  if (Math.sign(monto) === -1) return console.error(`Monto no valido ${monto}, ('No puede ser negativo')`);

  if (Math.sign(monto) === 0) return console.warn(`Monto = ${monto}, No hay actividad `);

  if (descuento === 0) return console.warn(`Monto= L${monto}, Descuento= ${descuento}, Total a Pagar= L${totalApagar} \n "No se aplico ningun descuento"`);

  if (typeof descuento !== "number") return console.error("deves ingresar la cantidad del descuento correctamente (ejem: 20)");

  if (Math.sign(descuento) === -1) return console.error(`ERROR no se puede aplicar descuento ${descuento}, ('No puede ser negativo')`);

  // if (descuento) {
  return console.info(`Monto Lps ${monto}, descuento ${descuento}%, Total a Pagar= Lps ${totalApagar} \n 'Descuento aplicado' = 'Lps ${total}' `);
  //}
}

aplicarDescuento(1000, 25);
    // console.clear();