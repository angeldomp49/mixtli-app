La aplicación se va a componer en el front-end del patrón de diseño bridge donde la UI será desarrollada
en react-native y redux para crear una "interfaz inteligente", mientras que los respectivos middlewares
en lugar de llamar directamente al back-end van a comunicarse con el API que llamaremos "System". 

Va a ser System quien llame de forma adecuada al back-end mediante ajax y enviar la información correspondiente
al estado global de redux para actualizar la UI.

El back-end va a estar hecha con Laravel y en medida de lo posible se va a encargar de la comunicación con la
base de datos y de la autenticación. 

La aplicación va a usar "roles-permisos" para permitir la asignación dinámica de acciones por parte de los usuarios
dependiendo de sus respectivos roles.