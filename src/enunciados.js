//Muestra todos los cuadros
db.cuadros.find({})

//Muestra los cuadros pintados por Leonardo da Vinci
db.cuadros.find({artista: {$in: ["Leonardo da Vinci"]}})

//Muestra los cuadros pintados en el periodo del Renacimiento
db.cuadros.find({periodo: {$eq:Renacimiento}})

//Muestra los cuadros situacos en MoMA
db.cuadros.find({ubicacion: {$eq:MoMA}})

//Muestra los cuadros pintados en 1511
db.cuadros.find({fecha creacion: {$eq:1511}})

//Muestra los cuadros de antes del 1500
db.cuadros.find({fecha creacion: {$it:1500}})

//Muestra los cuadros pintados en el periodo del Surrealismo
db.cuadros.find({periodo: {$eq:Surrealismo}})
