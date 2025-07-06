const BASE_URL =
  "https://crudcrud.com/api/d5f6a6b763a9464f87a00f0eb036d79e/productos";

export const obtenerProductos = async () => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Error al obtener productos");
  return await res.json();
};

export const crearProducto = async (producto) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(producto),
  });
  if (!res.ok) throw new Error("Error al crear producto");
  return await res.json();
};

export const editarProducto = async (id, productoActualizado) => {
  const { _id, ...producto } = productoActualizado;

  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(producto),
  });

  if (!res.ok) throw new Error("Error al editar producto");
};

export const eliminarProducto = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Error al eliminar producto");
};
