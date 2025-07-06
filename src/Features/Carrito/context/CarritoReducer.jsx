export const carritoReducer = (state, action) => {
  switch (action.type) {
    case "AGREGAR": {
      const existe = state.find(
        (item) => item.titulo === action.payload.titulo
      );
      if (existe) {
        return state.map((item) =>
          item.titulo === action.payload.titulo
            ? { ...item, cantidad: item.cantidad + action.payload.cantidad }
            : item
        );
      } else {
        return [...state, action.payload];
      }
    }

    case "ELIMINAR":
      return state.filter((item) => item.titulo !== action.payload);

    case "VACIAR":
      return [];

    default:
      return state;
  }
};
